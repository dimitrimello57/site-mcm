import type { Metadata } from "next";
import { Accordion, Breadcrumb, CardGrid, FaixaFinal, HeroFrente, Section, Steps } from "@/components/ui";
import { capital } from "@/lib/content";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata("/capital", capital.seo);

export default function Capital() {
  const { c01, c02, c03, c04, c05, c06 } = capital;
  return (
    <>
      <Breadcrumb pagina="MCM Capital" />
      <HeroFrente bloco="C01" hero={c01} />

      <Section bloco="C02" tom="areia" titulo={c02.h2}>
        <CardGrid cartoes={c02.cartoes} />
      </Section>

      <Section bloco="C03" titulo={c03.h2}>
        <p className="max-w-3xl text-lg text-navy/80">{c03.introducao}</p>

        {/* Desktop: tabela. */}
        <div className="mt-8 hidden md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Comparação entre financiamento imobiliário, home equity e consórcio</caption>
            <thead>
              <tr className="border-b-2 border-gold">
                <th scope="col" className="w-1/4 py-3 pr-4 font-serif text-xl">
                  {c03.colunas.nome}
                </th>
                <th scope="col" className="w-3/8 py-3 pr-4 font-serif text-xl">
                  {c03.colunas.finalidade}
                </th>
                <th scope="col" className="py-3 font-serif text-xl">
                  {c03.colunas.atencao}
                </th>
              </tr>
            </thead>
            <tbody>
              {c03.linhas.map((l) => (
                <tr key={l.nome} className="border-b border-navy/15 align-top">
                  <th scope="row" className="py-4 pr-4 font-medium">
                    {l.nome}
                  </th>
                  <td className="py-4 pr-4 text-navy/80">{l.finalidade}</td>
                  <td className="py-4 text-navy/80">{l.atencao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Celular: cartões, sem rolagem horizontal. */}
        <ul className="mt-8 grid gap-4 md:hidden">
          {c03.linhas.map((l) => (
            <li key={l.nome} className="border border-navy/15 p-5">
              <h3 className="font-serif text-2xl font-semibold">{l.nome}</h3>
              <dl className="mt-3 space-y-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gold">{c03.colunas.finalidade}</dt>
                  <dd className="mt-1 text-navy/80">{l.finalidade}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gold">{c03.colunas.atencao}</dt>
                  <dd className="mt-1 text-navy/80">{l.atencao}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </Section>

      <Section bloco="C04" tom="areia" titulo={c04.h2}>
        <Steps passos={c04.passos} />
      </Section>

      <Section bloco="C05" titulo={c05.h2}>
        <Accordion itens={c05.faq} />
      </Section>

      <FaixaFinal bloco="C06" dados={c06} />
    </>
  );
}
