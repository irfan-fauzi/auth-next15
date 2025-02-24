"use server";
import { hashSync } from "bcrypt-ts";
import { registerSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";



export const registerCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  
  const validatedFields = registerSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

  } catch(error) {
    throw new Error(`failed to register: ${error}`)
  }
 
  redirect("/login");
  
};
