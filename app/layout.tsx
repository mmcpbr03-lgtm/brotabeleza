import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brota Beleza! | Adesivos secantes de espinha",
  description:
    "Adesivos secantes de espinha com ácido salicílico e designs colecionáveis.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
