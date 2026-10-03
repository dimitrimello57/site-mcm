import type { MetadataRoute } from "next";
import { isPreview, siteUrl } from "@/lib/env";

// Sem domínio de produção confirmado (ou em preview) não publicamos sitemap.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview || !siteUrl) return [];
  return ["/", "/seguros", "/partners", "/capital", "/sobre", "/contato"].map((caminho) => ({
    url: `${siteUrl}${caminho}`,
  }));
}
