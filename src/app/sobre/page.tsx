import type { Metadata } from "next";
import { Breadcrumb, EditorialHero, FaixaFinal, Section, Steps, TextLink } from "@/components/ui";
import { imagens } from "@/lib/visual";
import { sobre } from "@/lib/content";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata("/sobre", sobre.seo);

export default function Sobre() {
  const { a01, a02, a03, a04, a05, a06 } = sobre;
  return (
    <>
      <Breadcrumb pagina="Sobre a MCM" />
      <EditorialHero bloco="A01" identificador={a01.identificador} titulo={a01.h1} texto={a01.texto} imagem={imagens.horizonte.src} />

      <Section bloco="A02" tom="areia" titulo={a02.h2}>
        <p className="max-w-3xl text-lg text-navy/80">{a02.texto}</p>
        <ul className="mt-8 value-list">
          {a02.frentes.map((f) => (
            <li key={f.nome} >
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
        <ul className="team-profiles">
          {a03.perfis.map((p) => (
            <li key={p.nome} >
              <h3 >{p.nome}</h3>
              <p className="team-role">{p.cargo}</p>
              <p className="team-bio">{p.bio}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bloco="A04" tom="areia" titulo={a04.h2}>
        <ul className="value-list">
          {a04.compromissos.map((c) => (
            <li key={c.titulo} >
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
