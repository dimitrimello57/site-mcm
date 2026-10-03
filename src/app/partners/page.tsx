import type { Metadata } from "next";
import {
  Accordion,
  Breadcrumb,
  CardGrid,
  FaixaFinal,
  HeroFrente,
  Section,
  TextLink,
} from "@/components/ui";
import { partners } from "@/lib/content";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata("/partners", partners.seo);

export default function Partners() {
  const { p01, p02, p03, p04, p05, p06, p07 } = partners;
  return (
    <>
      <Breadcrumb pagina="MCM Partners" />
      <HeroFrente bloco="P01" hero={p01} />

      <Section bloco="P02" tom="areia" titulo={p02.h2}>
        <ol className="question-list">
          {p02.perguntas.map((q, i) => (
            <li key={q} >
              <span aria-hidden="true" className="question-number">
                {i + 1}
              </span>
              <p >{q}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-navy/80">{p02.texto}</p>
      </Section>

      <Section bloco="P03" titulo={p03.h2}>
        <CardGrid cartoes={p03.cartoes} />
      </Section>

      <Section bloco="P04" tom="areia" titulo={p04.h2}>
        <p className="max-w-3xl text-lg text-navy/80">{p04.texto}</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {p04.itens.map((item) => (
            <li key={item} className="border-l-2 border-gold pl-4">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm text-navy/75">{p04.apoio}</p>
      </Section>

      <Section bloco="P05" titulo={p05.h2}>
        <p className="max-w-3xl text-lg text-navy/80">{p05.texto}</p>
        <p className="mt-6">
          <TextLink href={p05.link.href}>{p05.link.label}</TextLink>
        </p>
      </Section>

      <Section bloco="P06" tom="areia" titulo={p06.h2}>
        <Accordion itens={p06.faq} />
      </Section>

      <FaixaFinal bloco="P07" dados={p07} />
    </>
  );
}
