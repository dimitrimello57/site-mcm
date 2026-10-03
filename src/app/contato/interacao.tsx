"use client";

import { useSearchParams } from "next/navigation";
import { ContatoInterativo } from "@/components/ContatoInterativo";
import { assuntos, type Frente } from "@/lib/content";

type Param = string | string[] | undefined | null;

const frentesPermitidas: Frente[] = ["seguros", "partners", "capital", "nao-sei"];

// Lista permitida: qualquer valor desconhecido seleciona "Ainda não sei".
export function interpretarParametros(frente: Param, assunto: Param) {
  const f = Array.isArray(frente) ? frente[0] : (frente ?? undefined);
  const a = Array.isArray(assunto) ? assunto[0] : (assunto ?? undefined);

  const solucao = a && Object.hasOwn(assuntos, a) ? a : "";
  let frenteFinal: Frente | "" = "";
  if (f !== undefined) {
    frenteFinal = frentesPermitidas.includes(f as Frente) ? (f as Frente) : "nao-sei";
  }
  // Solução válida sem frente informada (ou incompatível): a frente da solução prevalece.
  if (solucao && (frenteFinal === "" || frenteFinal === "nao-sei" || assuntos[solucao].frente !== frenteFinal)) {
    frenteFinal = assuntos[solucao].frente;
  }
  if (a !== undefined && !solucao && frenteFinal === "") frenteFinal = "nao-sei";
  return { frente: frenteFinal, solucao };
}

// Lê os parâmetros no navegador, para a página de contato poder ser estática.
export function ContatoInteracao() {
  const params = useSearchParams();
  const { frente, solucao } = interpretarParametros(params.get("frente"), params.get("assunto"));
  return (
    <ContatoInterativo
      // Remonta se a URL mudar (ex.: navegar de um CTA para outro).
      key={`${frente}|${solucao}`}
      frenteInicial={frente}
      assuntoInicial={solucao}
    />
  );
}
