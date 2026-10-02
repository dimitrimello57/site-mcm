import type { Metadata } from "next";
import { Breadcrumb, Container, FaixaFinal, Section, Steps, TextLink } from "@/components/ui";
import { sobre } from "@/lib/content";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata("/sobre", sobre.seo);

export default function Sobre() {
  const { a01, a02, a03, a04, a05, a06 } = sobre;
  return (
    <>
      <Breadcrumb pagina="Sobre a MCM" />
      <section data-bloco="A01" className="bg-navy text-sand">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">{a01.identificador}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {a01.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/85">{a01.texto}</p>
        </Container>
      </section>

      <Section bloco="A02" tom="areia" titulo={a02.h2}>
        <p className="max-w-3xl text-lg text-navy/80">{a02.texto}</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {a02.frentes.map((f) => (
            <li key={f.nome} className="border border-navy/15 bg-background p-5">
              <h3 className="font-serif text-2xl font-semibold">
                <TextLink href={f.href}>{f.nome}</TextLink>
              </h3>
              <p className="mt-2 text-navy/80">{f.texto}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bloco="A03" titulo={a03.h2}>
        {/* Fotos de Mário e Emilly: aguardando imagens aprovadas. */}
        <ul className="grid gap-8 md:grid-cols-2">
          {a03.perfis.map((p) => (
            <li key={p.nome} className="border-t-2 border-gold pt-5">
              <h3 className="font-serif text-3xl font-semibold">{p.nome}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-widest text-gold">{p.cargo}</p>
              <p className="mt-4 text-navy/80">{p.bio}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bloco="A04" tom="areia" titulo={a04.h2}>
        <ul className="grid gap-6 md:grid-cols-3">
          {a04.compromissos.map((c) => (
            <li key={c.titulo} className="border border-navy/15 bg-background p-6">
              <h3 className="font-serif text-2xl font-semibold">{c.titulo}</h3>
              <p className="mt-2 text-navy/80">{c.texto}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bloco="A05" titulo={a05.h2}>
        <Steps passos={a05.etapas} />
        <p className="mt-10 max-w-3xl text-sm text-navy/75">{a05.apoio}</p>
      </Section>

      <FaixaFinal bloco="A06" dados={a06} />
    </>
  );
}
