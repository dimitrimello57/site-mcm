import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb, Container } from "@/components/ui";
import { privacidade } from "@/lib/content";
import { mostrarPrivacidade } from "@/lib/env";
import { paginaMetadata } from "@/lib/seo";

export const metadata: Metadata = paginaMetadata("/privacidade", privacidade.seo, { noindex: true });

export default function Privacidade() {
  // Minuta com campos pendentes: só existe no preview até a MCM completar e aprovar o texto.
  if (!mostrarPrivacidade) notFound();

  return (
    <>
      <Breadcrumb pagina="Política de Privacidade" />
      <Container className="py-16">
        <p className="mb-8 max-w-[760px] rounded-sm bg-gold px-4 py-3 text-sm font-medium text-navy">
          Minuta para revisão da MCM. Os trechos entre colchetes dependem de informações ainda não confirmadas.
        </p>
        <article data-bloco="L01" className="max-w-[760px]">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{privacidade.h1}</h1>
          <p className="mt-6 text-lg text-navy/80">{privacidade.introducao}</p>
          <p className="mt-2 text-sm text-navy/70">{privacidade.data}</p>
          {privacidade.secoes.map((s) => (
            <section key={s.h2} className="mt-10">
              <h2 className="font-serif text-2xl font-semibold">{s.h2}</h2>
              <p className="mt-3 text-navy/80">{s.texto}</p>
            </section>
          ))}
        </article>
      </Container>
    </>
  );
}
