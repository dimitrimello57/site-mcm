"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  assuntos,
  contato,
  contatoInfo,
  estados,
  whatsappTextos,
  type Frente,
} from "@/lib/content";
import { validarContato, type ErrosContato } from "@/lib/validacao";
import { whatsappUrl } from "@/lib/site";

type Props = {
  frenteInicial: Frente | "";
  assuntoInicial: string;
};

const nomesFrente: Record<Exclude<Frente, "nao-sei">, string> = {
  seguros: "MCM Seguros",
  partners: "MCM Partners",
  capital: "MCM Capital",
};

type Estado = "ocioso" | "enviando" | "sucesso" | "falha" | "semConexao";

const campo =
  "mt-2 block min-h-12 w-full rounded-sm border border-navy/40 bg-white px-4 py-3 text-base text-navy placeholder:text-navy/50";

export function ContatoInterativo({
  frenteInicial,
  assuntoInicial,
}: Props) {
  const [frente, setFrente] = useState<Frente | "">(frenteInicial);
  // A solução específica só vale enquanto a frente escolhida for a dela.
  const [solucao, setSolucao] = useState(assuntoInicial);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [erros, setErros] = useState<ErrosContato>({});
  const [estado, setEstado] = useState<Estado>("ocioso");
  const resultadoRef = useRef<HTMLDivElement>(null);

  const solucaoAtual = solucao && assuntos[solucao]?.frente === frente ? assuntos[solucao] : null;

  const textoWhatsapp = (() => {
    if (frente === "seguros" || frente === "partners" || frente === "capital") {
      const opcao = contato.t02.opcoes.find((o) => o.valor === frente)!;
      return whatsappTextos.frente(nomesFrente[frente], solucaoAtual?.solucao ?? opcao.resumo);
    }
    const opcao = contato.t02.opcoes.find((o) => o.valor === "nao-sei")!;
    return whatsappTextos.geral(opcao.resumo);
  })();
  const hrefWhatsapp = whatsappUrl(contatoInfo.whatsapp, textoWhatsapp);

  function aoEscolherFrente(valor: Frente) {
    setFrente(valor);
    setErros((e) => ({ ...e, assunto: undefined }));
    if (assuntos[solucao]?.frente !== valor) setSolucao("");
  }

  async function aoEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "enviando") return;
    const dados = new FormData(e.currentTarget);
    const resultado = validarContato({ nome, telefone, email, assunto: frente, mensagem: "" });
    if (!resultado.ok) {
      setErros(resultado.erros);
      const primeiro = (["assunto", "nome", "telefone", "email"] as const).find((k) => resultado.erros[k]);
      document.getElementById(primeiro === "assunto" ? "assunto-grupo" : `campo-${primeiro}`)?.focus();
      return;
    }
    setErros({});
    setEstado("enviando");
    try {
      const resposta = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...resultado.valores,
          solucao: solucaoAtual ? solucao : null,
          site: dados.get("site") ?? "",
        }),
      });
      const corpo = (await resposta.json().catch(() => null)) as { ok?: boolean } | null;
      // Sucesso só com confirmação do servidor.
      setEstado(resposta.ok && corpo?.ok === true ? "sucesso" : "falha");
    } catch {
      setEstado("semConexao");
    }
    requestAnimationFrame(() => resultadoRef.current?.focus());
  }

  return <section data-bloco="T02" aria-label="Contato" className="mcm-contact-section">
    <div className="mcm-contact-card">
      <h2 id="contato-form-titulo" className="mcm-contact-heading">Vamos conversar sobre o seu próximo passo.</h2>
      <p className="mcm-contact-subtitle">Deixe seus dados e escolha seu interesse. Nossa equipe está pronta para ajudar você.</p>
      {estado === "sucesso" ? (
                <div ref={resultadoRef} tabIndex={-1} role="status" className="mt-8 border-l-4 border-gold bg-white p-6">
                  <p className="font-serif text-2xl font-semibold">Pré-cadastro recebido.</p>
                  <p className="mt-2 text-navy/80">Nossa equipe recebeu seus dados e o assunto escolhido. Entraremos em contato pelo número informado.</p>
                  <p className="mt-4"><a href={hrefWhatsapp} target="_blank" rel="noopener noreferrer" className="button-link button-primario">Conversar agora pelo WhatsApp<span className="sr-only"> (abre em nova aba)</span></a></p>
                  <p className="mt-4">
                    <Link href="/" className="font-medium underline decoration-gold decoration-2 underline-offset-4">
                      {estados.sucesso.link}
                    </Link>
                  </p>
                </div>
      ) : <form id="contato-form" onSubmit={aoEnviar} noValidate aria-busy={estado === "enviando"}>
        <div className="mcm-contact-inputs mcm-contact-compact">
                  {(estado === "falha" || estado === "semConexao") && (
                    <div ref={resultadoRef} tabIndex={-1} role="alert" className="border-l-4 border-red-700 bg-white p-5">
                      <p className="font-semibold">
                        {estado === "semConexao" ? estados.semConexao : estados.falha.titulo}
                      </p>
                      {estado === "falha" && <p className="mt-1 text-navy/80">Seus dados não foram confirmados. Tente novamente ou fale com a equipe pelo WhatsApp.</p>}
                      <p className="mt-3">
                        <a
                          href={hrefWhatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium underline decoration-gold decoration-2 underline-offset-4"
                        >
                          {estados.falha.alternativa}
                        </a>
                      </p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="campo-nome" className="font-medium">
                      {contato.t04.campos.nome.label} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="campo-nome"
                      name="nome"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={erros.nome ? true : undefined}
                      aria-describedby={erros.nome ? "erro-nome" : undefined}
                      placeholder={contato.t04.campos.nome.exemplo}
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className={campo}
                    />
                    {erros.nome && (
                      <p id="erro-nome" className="mt-2 text-sm font-medium text-red-800">
                        {erros.nome}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="campo-telefone" className="font-medium">
                      {contato.t04.campos.telefone.label} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="campo-telefone"
                      name="telefone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      aria-required="true"
                      aria-invalid={erros.telefone ? true : undefined}
                      aria-describedby={erros.telefone ? "erro-telefone" : undefined}
                      placeholder="(11) 99999-9999"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      className={campo}
                    />
                    {erros.telefone && (
                      <p id="erro-telefone" className="mt-2 text-sm font-medium text-red-800">
                        {erros.telefone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="campo-email" className="font-medium">E-mail (opcional)</label>
                    <input id="campo-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="voce@exemplo.com.br" value={email} onChange={e => setEmail(e.target.value)} aria-invalid={!!erros.email} aria-describedby={erros.email ? "erro-email" : undefined} className={campo} />
                    {erros.email && <p id="erro-email" className="mt-2 text-sm text-red-800">{erros.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="assunto-grupo" className="font-medium">Seu interesse <span aria-hidden="true">*</span></label>
                    <select id="assunto-grupo" name="assunto" value={frente} onChange={e => aoEscolherFrente(e.target.value as Frente)} required disabled={estado === "enviando"} aria-invalid={!!erros.assunto} aria-describedby={erros.assunto ? "erro-assunto" : undefined} className={campo}>
                      <option value="" disabled>Selecione seu interesse</option>
                      {contato.t02.opcoes.map(o => <option key={o.valor} value={o.valor}>{o.label}</option>)}
                    </select>
                    {erros.assunto && <p id="erro-assunto" className="mt-2 text-sm text-red-800">{erros.assunto}</p>}
                  </div>
                  {/* Campo isca contra robôs; invisível para pessoas. */}
                  <div aria-hidden="true" className="absolute -left-[9999px]">
                    <label>
                      Não preencha este campo
                      <input type="text" name="site" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={estado === "enviando"}
                    className="mcm-contact-submit"
                  >
                    {estado === "enviando"
                      ? estados.enviando
                      : "Fale agora com a gente"}
                  </button>
                  <p role="status" className="sr-only">
                    {estado === "enviando" ? estados.enviando : ""}
                  </p>
        </div>
      </form>}
    </div>
  </section>;
}
