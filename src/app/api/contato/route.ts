import { assuntos, type Frente } from "@/lib/content";
import { validarContato } from "@/lib/validacao";

// Encaminha o contato para o destino real configurado em CONTACT_WEBHOOK_URL.
// Sem destino configurado, responde 503: o cliente nunca mostra sucesso sem entrega confirmada.
export async function POST(request: Request) {
  const destino = process.env.CONTACT_WEBHOOK_URL;
  if (!destino) {
    return Response.json({ ok: false, erro: "destino-indisponivel" }, { status: 503 });
  }

  let corpo: unknown;
  try {
    corpo = await request.json();
  } catch {
    return Response.json({ ok: false, erro: "invalido" }, { status: 400 });
  }

  const dados = corpo as Record<string, unknown>;
  // Campo isca: robôs preenchem, pessoas não veem. Finge sucesso sem encaminhar.
  if (typeof dados.site === "string" && dados.site !== "") {
    return Response.json({ ok: true });
  }

  const resultado = validarContato({
    nome: String(dados.nome ?? ""),
    telefone: String(dados.telefone ?? ""),
    assunto: String(dados.assunto ?? "") as Frente | "",
    mensagem: String(dados.mensagem ?? ""),
  });
  if (!resultado.ok) {
    return Response.json({ ok: false, erro: "invalido", campos: resultado.erros }, { status: 400 });
  }

  const solucao = typeof dados.solucao === "string" && dados.solucao in assuntos ? dados.solucao : null;

  try {
    const resposta = await fetch(destino, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...resultado.valores, solucao, origem: "site-mcm", enviadoEm: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!resposta.ok) {
      return Response.json({ ok: false, erro: "falha-destino" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, erro: "falha-destino" }, { status: 502 });
  }
}
