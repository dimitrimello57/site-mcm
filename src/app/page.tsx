import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, Section, Steps, TextLink } from "@/components/ui";
import { inicio } from "@/lib/content";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata("/", inicio.seo);

export default function Inicio() {
  const { h01, h02, h03, h04, h05, h06, h07 } = inicio;
  return (
    <>
      <section data-bloco="H01" className="bg-navy text-sand">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">{h01.identificador}</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{h01.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg text-sand/85">{h01.texto}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={h01.ctaPrincipal.href}>{h01.ctaPrincipal.label}</ButtonLink>
              <ButtonLink href={h01.ctaSecundario.href} variante="secundario">
                {h01.ctaSecundario.label}
              </ButtonLink>
            </div>
          </div>
          {/* Composição decorativa das três frentes; o conteúdo real está em H04. */}
          <ul aria-hidden="true" className="grid gap-3">
            {h04.cartoes.map((c, i) => (
              <li
                key={c.titulo}
                className="border border-gold/50 bg-navy-soft p-5"
                style={{ marginLeft: `${i * 1.5}rem` }}
              >
                <p className="font-serif text-2xl text-gold-light">{c.titulo}</p>
                <p className="mt-1 text-sm text-sand/80">{c.chamada}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section bloco="H02" tom="areia" titulo={h02.h2}>
        <p className="max-w-3xl text-lg text-navy/80">{h02.texto}</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {h02.situacoes.map((s) => (
            <li key={s.titulo} className="border-t-2 border-gold pt-4">
              <h3 className="font-serif text-2xl font-semibold">{s.titulo}</h3>
              <p className="mt-2 text-navy/80">{s.texto}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl font-serif text-2xl leading-snug">{h02.conclusao}</p>
      </Section>

      <Section bloco="H03" titulo={h03.h2}>
        <Steps passos={h03.etapas} />
      </Section>

      <Section id="frentes" bloco="H04" tom="areia" titulo={h04.h2}>
        <p className="max-w-3xl text-lg text-navy/80">{h04.introducao}</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {h04.cartoes.map((c) => (
            <li key={c.titulo} className="flex flex-col rounded-sm border border-navy/15 bg-background p-6">
              <h3 className="font-serif text-3xl font-semibold">{c.titulo}</h3>
              <p className="mt-2 font-medium text-gold">{c.chamada}</p>
              <p className="mt-3 text-navy/80">{c.texto}</p>
              <p className="mt-auto pt-6">
                <TextLink href={c.link.href}>{c.link.label}</TextLink>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bloco="H05" titulo={h05.h2}>
        <ul className="divide-y divide-navy/15 border-y border-navy/15">
          {h05.situacoes.map((s) => (
            <li key={s.link.href} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <p className="max-w-xl text-lg">{s.texto}</p>
              <TextLink href={s.link.href}>{s.link.label}</TextLink>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-navy/80">{h05.apoio}</p>
      </Section>

      <Section bloco="H06" tom="areia" titulo={h06.h2}>
        {/* Foto real da equipe: aguardando imagem aprovada. */}
        <p className="max-w-3xl text-lg text-navy/80">{h06.texto}</p>
        <p className="mt-6">
          <TextLink href={h06.link.href}>{h06.link.label}</TextLink>
        </p>
      </Section>

      <section data-bloco="H07" aria-labelledby="h07-titulo" className="bg-navy text-sand">
        <Container className="py-16 sm:py-20">
          <h2 id="h07-titulo" className="max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            {h07.h2}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-sand/85">{h07.texto}</p>
          <Link
            href={h07.cta.href}
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-gold px-6 py-3 text-sm font-medium text-navy hover:bg-gold-light sm:w-auto"
          >
            {h07.cta.label}
          </Link>
        </Container>
      </section>
    </>
  );
}
