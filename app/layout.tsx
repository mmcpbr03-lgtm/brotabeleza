import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brotabeleza.com.br"),
  title: "Brota Beleza! | Adesivos secantes de espinha",
  description: "Adesivos secantes de espinha com ácido salicílico e designs tropicais colecionáveis.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Brota Beleza!",
    description: "Beleza real em pequenos gestos.",
    url: "https://brotabeleza.com.br",
    siteName: "Brota Beleza!",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
