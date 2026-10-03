import type { Metadata } from "next";
import { EditorialMotion } from "@/components/EditorialMotion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { compartilhado } from "@/lib/content";
import { isPreview, siteUrl } from "@/lib/env";
import "./globals.css";
import "./editorial.css";

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  applicationName: "MCM",
  ...(isPreview && { robots: { index: false, follow: false } }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-gold focus:px-4 focus:py-3 focus:text-navy"
        >
          {compartilhado.atalho}
        </a>
        {isPreview && (
          <p className="preview-banner">
            Preview para validação. Conteúdo sujeito a aprovação da MCM; não indexado.
          </p>
        )}
        <Header />
        <EditorialMotion />
        <main id="conteudo" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
