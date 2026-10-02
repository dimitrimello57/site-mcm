import type { Metadata } from "next";
import { isPreview, siteUrl } from "./env";

export function paginaMetadata(
  caminho: string,
  seo: { title: string; description: string },
  opcoes: { noindex?: boolean } = {},
): Metadata {
  return {
    title: { absolute: seo.title },
    description: seo.description,
    ...(siteUrl && { alternates: { canonical: `${siteUrl}${caminho}` } }),
    openGraph: { title: seo.title, description: seo.description, locale: "pt_BR", type: "website" },
    ...((isPreview || opcoes.noindex) && { robots: { index: false, follow: false } }),
  };
}
