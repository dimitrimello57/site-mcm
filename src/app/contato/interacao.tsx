import { ContatoInterativo } from "@/components/ContatoInterativo";
import { assuntos, type Frente } from "@/lib/content";
import { isPreview, mostrarFormulario, mostrarPrivacidade } from "@/lib/env";

type Param = string | string[] | undefined;

const frentesPermitidas: Frente[] = ["seguros", "partners", "capital", "nao-sei"];

// Lista permitida: qualquer valor desconhecido seleciona "Ainda não sei".
export function interpretarParametros(frente: Param, assunto: Param) {
  const f = Array.isArray(frente) ? frente[0] : frente;
  const a = Array.isArray(assunto) ? assunto[0] : assunto;

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

export function ContatoInteracao({ frente, assunto }: { frente: Param; assunto: Param }) {
  const { frente: frenteInicial, solucao } = interpretarParametros(frente, assunto);
  return (
    <ContatoInterativo
      frenteInicial={frenteInicial}
      assuntoInicial={solucao}
      mostrarFormulario={mostrarFormulario}
      demonstracao={isPreview && !process.env.CONTACT_WEBHOOK_URL}
      linkPrivacidade={mostrarPrivacidade}
    />
  );
}
