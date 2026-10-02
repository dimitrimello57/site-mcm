"use client";

import { Container } from "@/components/ui";
import { contatoInfo, estados, whatsappTextos } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export default function Erro({ unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
  const { titulo, texto, botao } = estados.erroSite;
  return (
    <Container className="py-24">
      <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{titulo}</h1>
      <p className="mt-4 max-w-xl text-lg text-navy/80">{texto}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="inline-flex min-h-12 items-center justify-center rounded-sm bg-navy px-6 py-3 text-sm font-medium text-sand hover:bg-navy-soft"
        >
          {botao}
        </button>
        <a
          href={whatsappUrl(contatoInfo.whatsapp, whatsappTextos.geral("orientação para começar"))}
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-navy px-6 py-3 text-sm font-medium hover:bg-navy hover:text-sand"
        >
          {estados.falha.alternativa}
        </a>
      </div>
    </Container>
  );
}
