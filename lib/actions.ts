"use server";
import { hashSync } from "bcrypt-ts";
import { registerSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const registerCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    roles: formData.get("roles"),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      values: {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        password: formData.get("password") || "",
        confirmPassword: formData.get("confirmPassword") || "",
        roles: formData.get("role") || "",
      },
      error: {
        name: fieldErrors.name || [],
        email: fieldErrors.email || [],
        password: fieldErrors.password || [],
        confirmPassword: fieldErrors.confirmPassword || [],
        roles: fieldErrors.roles || [],
      },
    };
  }
  const { name, email, password, roles } = validatedFields.data;
  // is email already used
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return {
      values: {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        password: formData.get("password") || "",
        confirmPassword: formData.get("confirmPassword") || "",
        roles: formData.get("role") || "",
      },
      error: {
        name: [],
        email: ["email is already used"],
        password: [],
        confirmPassword: [],
        roles: [],
      },
    };
  }
  //---------------------------
  const hashedPassword = hashSync(password, 10);
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        roles,
        password: hashedPassword,
      },
    });
  } catch (error) {
    throw new Error(`failed to register: ${error}`);
  }

  redirect("/login");
};
