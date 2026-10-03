import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb, EditorialHero, Section } from "@/components/ui";
import { ContatoInteracao } from "./interacao";
import { imagens } from "@/lib/visual";
import { contato } from "@/lib/content";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata("/contato", contato.seo);

export default function Contato() {
  return (
    <>
      <Breadcrumb pagina="Contato" />
      <EditorialHero bloco="T01" identificador={contato.t01.identificador} titulo={contato.t01.h1} texto={contato.t01.texto} imagem={imagens.horizonte.src} />

      <Suspense fallback={null}>
        <ContatoInteracao />
      </Suspense>

      <Section bloco="T05" titulo={contato.t05.h2}>
        <p className="max-w-3xl text-lg text-navy/80">{contato.t05.texto}</p>
      </Section>
    </>
  );
}
