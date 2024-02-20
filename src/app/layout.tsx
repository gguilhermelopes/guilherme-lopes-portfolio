import type { Metadata } from "next";
import { Montserrat, Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const montserrat = Work_Sans({
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
      <body className={montserrat.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
