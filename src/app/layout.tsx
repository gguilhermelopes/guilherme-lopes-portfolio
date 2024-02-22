import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const workSans = Work_Sans({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Guilherme Lopes 💻",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={workSans.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
