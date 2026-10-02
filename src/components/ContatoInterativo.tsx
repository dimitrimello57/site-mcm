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
  mostrarFormulario: boolean;
  demonstracao: boolean;
  linkPrivacidade: boolean;
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
  mostrarFormulario,
  demonstracao,
  linkPrivacidade,
}: Props) {
  const [frente, setFrente] = useState<Frente | "">(frenteInicial);
  // A solução específica só vale enquanto a frente escolhida for a dela.
  const [solucao, setSolucao] = useState(assuntoInicial);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
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
    const dados = new FormData(e.currentTarget);
    const resultado = validarContato({ nome, telefone, assunto: frente, mensagem });
    if (!resultado.ok) {
      setErros(resultado.erros);
      const primeiro = (["nome", "telefone", "assunto"] as const).find((k) => resultado.erros[k]);
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

  return (
    <>
      <section data-bloco="T02" aria-labelledby="t02-titulo" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
          <h2 id="t02-titulo" className="font-serif text-3xl font-semibold sm:text-4xl">
            {contato.t02.h2}
          </h2>
          <fieldset
            id="assunto-grupo"
            tabIndex={-1}
            className="mt-6 grid gap-3 md:grid-cols-2"
            aria-describedby={erros.assunto ? "erro-assunto" : undefined}
          >
            <legend className="sr-only">{contato.t02.h2}</legend>
            {contato.t02.opcoes.map((o) => (
              <label
                key={o.valor}
                className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-sm border bg-white px-4 py-3 has-[:checked]:border-gold has-[:checked]:ring-2 has-[:checked]:ring-gold ${
                  erros.assunto ? "border-red-700" : "border-navy/30"
                }`}
              >
                <input
                  type="radio"
                  name="assunto"
                  value={o.valor}
                  form="contato-form"
                  checked={frente === o.valor}
                  onChange={() => aoEscolherFrente(o.valor)}
                  className="size-5 accent-navy"
                />
                <span>{o.label}</span>
              </label>
            ))}
          </fieldset>
          {erros.assunto && (
            <p id="erro-assunto" className="mt-3 text-sm font-medium text-red-800">
              {erros.assunto}
            </p>
          )}
        </div>
      </section>

      <section data-bloco="T03" aria-labelledby="t03-titulo" className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
          <h2 id="t03-titulo" className="font-serif text-3xl font-semibold sm:text-4xl">
            {contato.t03.h2}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-navy/80">{contato.t03.texto}</p>
          <a
            href={hrefWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-navy px-6 py-3 text-sm font-medium text-sand hover:bg-navy-soft sm:w-auto"
          >
            {contato.t03.cta}
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <p className="mt-6 text-navy/80">
            <span className="font-medium">WhatsApp:</span> {contatoInfo.telefone}
            <br />
            <span className="font-medium">E-mail:</span>{" "}
            <a href={`mailto:${contatoInfo.email}`} className="underline underline-offset-4 hover:text-gold">
              {contatoInfo.email}
            </a>
          </p>
        </div>
      </section>

      <section data-bloco="T04" aria-labelledby="t04-titulo" className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-6 md:grid-cols-[3fr_2fr]">
          {mostrarFormulario ? (
            <div>
              <h2 id="t04-titulo" className="font-serif text-3xl font-semibold sm:text-4xl">
                {contato.t04.h2}
              </h2>
              {demonstracao && (
                <p className="mt-3 inline-block rounded-sm bg-gold px-3 py-1 text-xs font-semibold text-navy">
                  Formulário de demonstração: sem destino de entrega configurado.
                </p>
              )}
              <p className="mt-4 text-navy/80">{contato.t04.texto}</p>

              {estado === "sucesso" ? (
                <div ref={resultadoRef} tabIndex={-1} role="status" className="mt-8 border-l-4 border-gold bg-white p-6">
                  <p className="font-serif text-2xl font-semibold">{estados.sucesso.titulo}</p>
                  <p className="mt-2 text-navy/80">{estados.sucesso.apoio}</p>
                  <p className="mt-4">
                    <Link href="/" className="font-medium underline decoration-gold decoration-2 underline-offset-4">
                      {estados.sucesso.link}
                    </Link>
                  </p>
                </div>
              ) : (
                <form id="contato-form" onSubmit={aoEnviar} noValidate className="mt-8 space-y-6">
                  {(estado === "falha" || estado === "semConexao") && (
                    <div ref={resultadoRef} tabIndex={-1} role="alert" className="border-l-4 border-red-700 bg-white p-5">
                      <p className="font-semibold">
                        {estado === "semConexao" ? estados.semConexao : estados.falha.titulo}
                      </p>
                      {estado === "falha" && <p className="mt-1 text-navy/80">{estados.falha.apoio}</p>}
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
                      placeholder={contato.t04.campos.telefone.exemplo}
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

                  <p className="text-sm text-navy/75">
                    {contato.t04.campos.assunto.label} <span aria-hidden="true">*</span>: escolha uma das opções acima.
                    {frente ? (
                      <>
                        {" "}
                        Selecionado: <strong>{contato.t02.opcoes.find((o) => o.valor === frente)?.label}</strong>.
                      </>
                    ) : null}
                  </p>

                  <div>
                    <label htmlFor="campo-mensagem" className="font-medium">
                      {contato.t04.campos.mensagem.label}
                    </label>
                    <textarea
                      id="campo-mensagem"
                      name="mensagem"
                      rows={4}
                      maxLength={1000}
                      placeholder={contato.t04.campos.mensagem.exemplo}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      className={campo}
                    />
                  </div>

                  {/* Campo isca contra robôs; invisível para pessoas. */}
                  <div aria-hidden="true" className="absolute -left-[9999px]">
                    <label>
                      Não preencha este campo
                      <input type="text" name="site" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <p className="text-sm text-navy/75">
                    {contato.t04.privacidade}{" "}
                    {linkPrivacidade && (
                      <Link href="/privacidade" className="underline underline-offset-4 hover:text-gold">
                        {contato.t04.privacidadeLink}
                      </Link>
                    )}
                  </p>

                  <button
                    type="submit"
                    disabled={estado === "enviando"}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-navy px-6 py-3 text-sm font-medium text-sand hover:bg-navy-soft disabled:opacity-60 sm:w-auto"
                  >
                    {estado === "enviando"
                      ? estados.enviando
                      : estado === "falha" || estado === "semConexao"
                        ? estados.falha.botao
                        : contato.t04.cta}
                  </button>
                  <p role="status" className="sr-only">
                    {estado === "enviando" ? estados.enviando : ""}
                  </p>
                </form>
              )}
            </div>
          ) : null}

          <div>
            {mostrarFormulario ? (
              <h3 className="font-serif text-2xl font-semibold">{contato.t04.enderecoTitulo}</h3>
            ) : (
              <h2 id="t04-titulo" className="font-serif text-3xl font-semibold">
                {contato.t04.enderecoTitulo}
              </h2>
            )}
            <address className="mt-3 not-italic text-navy/80">{contatoInfo.endereco}</address>
          </div>
        </div>
      </section>
    </>
  );
}

