import type { Metadata } from "next";
import { Accordion, Breadcrumb, CardGrid, FaixaFinal, HeroFrente, Section, Steps } from "@/components/ui";
import { seguros } from "@/lib/content";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata("/seguros", seguros.seo);

export default function Seguros() {
  const { s01, s02, s03, s04, s05, s06 } = seguros;
  return (
    <>
      <Breadcrumb pagina="MCM Seguros" />
      <HeroFrente bloco="S01" hero={s01} />

      <Section bloco="S02" tom="areia" titulo={s02.h2}>
        <CardGrid cartoes={s02.cartoes} colunas={2} />
      </Section>

      <Section bloco="S03" titulo={s03.h2}>
        <ul className="revision-list">
          {s03.itens.map((item) => (
            <li key={item} >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-navy/80">{s03.texto}</p>
      </Section>

      <Section bloco="S04" tom="areia" titulo={s04.h2}>
        <Steps passos={s04.passos} />
      </Section>

      <Section bloco="S05" titulo={s05.h2}>
        <Accordion itens={s05.faq} />
      </Section>

      <FaixaFinal bloco="S06" dados={s06} />
    </>
  );
}
