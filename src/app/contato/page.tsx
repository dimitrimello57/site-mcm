import type { Metadata } from "next";
import { Breadcrumb, Container, Section } from "@/components/ui";
import { ContatoInteracao } from "./interacao";
import { contato } from "@/lib/content";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata("/contato", contato.seo);

export default async function Contato({ searchParams }: PageProps<"/contato">) {
  const params = await searchParams;
  return (
    <>
      <Breadcrumb pagina="Contato" />
      <section data-bloco="T01" className="bg-navy text-sand">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">{contato.t01.identificador}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            {contato.t01.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/85">{contato.t01.texto}</p>
        </Container>
      </section>

      <ContatoInteracao frente={params.frente} assunto={params.assunto} />

      <Section bloco="T05" titulo={contato.t05.h2}>
        <p className="max-w-3xl text-lg text-navy/80">{contato.t05.texto}</p>
      </Section>
    </>
  );
}
