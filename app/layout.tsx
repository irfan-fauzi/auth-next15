import type { Metadata } from "next";
import "./globals.css";

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
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
