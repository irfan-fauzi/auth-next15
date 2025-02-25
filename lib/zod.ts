import { object, string, z } from "zod";

export const registerSchema = object({
  name: string().min(1, "name must be min 1 character"),
  email: string().email("invalid email"),
  password: string()
    .min(3, "password must be min 3 characters")
    .max(10, "pasword max 10 characters"),
  confirmPassword: string()
    .min(3, "password must be min 3 characters")
    .max(10, "pasword max 10 characters"),
  roles: z.enum(["user", "admin"], {
    message: "role must be either 'user' or 'admin'",
  }),
}).refine(
  (data: { password: string; confirmPassword: string }) =>
    data.password === data.confirmPassword,
  {
    message: "password does not match",
    path: ["confirmPassword"],
  }
);
