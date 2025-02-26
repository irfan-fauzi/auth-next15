"use server";
import { compare, hashSync } from "bcrypt-ts";
import { loginSchema, registerSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

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

// Login Credential
export const loginCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      values: {
        email: formData.get("email") || "",
        password: formData.get("password") || "",
      },
      error: {
        email: fieldErrors.email || [],
        password: fieldErrors.password || [],
      },
    };
  }
  const { email, password } = validatedFields.data;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.password) {
    return {
      values: {
        email,
        password: "",
      },
      error: {
        email: ["invalid email or password"],
        password: [],
      },
    };
  }

  // bandingkan password dari input dengan password yang sudah ada di database

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    return {
      values: {
        email,
        password: "",
      },
      error: {
        email: ["Invalid email or password"],
        password: [],
      },
    };
  }
  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credential" };
        default:
          return { message: "ada sesuatu yang salah" };
      }
    }
    throw error
  }
  // jika berhasil login, gunakan SignIn dari NextAuth
};
