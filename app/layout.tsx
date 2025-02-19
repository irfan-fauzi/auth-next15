import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"], // Pilih bobot font yang diperlukan
});

export const metadata: Metadata = {
  title: "Aplikasi Authentikasi",
  description: "Aplikasi nextjs Create by irfan fauzi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
