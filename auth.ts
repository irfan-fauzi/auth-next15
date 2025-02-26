import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { loginSchema } from "@/lib/zod";
import { compareSync } from "bcrypt-ts";

// kode ini sesuai dokumentasi dari auth.js hanya ada sedikit perubahan
// https://authjs.dev/getting-started/authentication/credentials?framework=next-js

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" }, // becouse i use provider so i can't use database session here
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credential) => {
        const validatedFields = loginSchema.safeParse(credential);
        if (!validatedFields.success) {
          return null; // return null = this will be triger error in signIncredential
        }
        const { email, password } = validatedFields.data;
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user || !user.password) {
          throw new Error("Invalid credentials.");
        }
        const passwordMatch = compareSync(password, user.password);
        if (!passwordMatch) {
          return null;
        }
        return user;
      },
    }),
  ],
});

/*
NextAuth → Library untuk otentikasi.
Credentials → Provider otentikasi yang menggunakan email dan password.
PrismaAdapter → Adapter yang menghubungkan NextAuth dengan database menggunakan Prisma.
prisma → Instance Prisma yang telah dikonfigurasi sebelumnya.
loginSchema → Validasi input menggunakan Zod.

handlers, auth, signIn, signOut → Fungsi yang bisa digunakan untuk menangani otentikasi.
adapter: PrismaAdapter(prisma) → Menggunakan Prisma untuk menyimpan data otentikasi di database.
session: { strategy: "jwt" } → Menggunakan JWT (JSON Web Token) untuk menyimpan sesi pengguna, bukan database session.

Credentials → Provider yang memungkinkan login menggunakan email & password.
credentials: { email: {}, password: {} } → Mendefinisikan field input login (email dan password).

authorize → Fungsi yang akan dipanggil ketika user mencoba login.
loginSchema.safeParse(credential) → Memeriksa apakah input email & password valid menggunakan Zod.
Jika validasi gagal, akan mengembalikan null (yang akan memicu error di signIn).




*/
