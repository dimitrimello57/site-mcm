"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { compartilhado } from "@/lib/content";
import { navegacao } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  // O menu guarda a rota em que foi aberto: ao navegar, fecha sem precisar de efeito.
  const [abertoEm, setAbertoEm] = useState<string | null>(null);
  const aberto = abertoEm === pathname;
  const setAberto = (valor: boolean | ((v: boolean) => boolean)) => {
    const proximo = typeof valor === "function" ? valor(aberto) : valor;
    setAbertoEm(proximo ? pathname : null);
  };
  const botaoRef = useRef<HTMLButtonElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);

// Menu aberto: foco vai para dentro, Esc fecha e devolve o foco, Tab fica preso no painel.
  useEffect(() => {
    if (!aberto) return;
    const painel = painelRef.current;
    const focaveis = () =>
      Array.from(painel?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
    focaveis()[0]?.focus();

    function aoTeclar(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAbertoEm(null);
        botaoRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const itens = [botaoRef.current as HTMLElement, ...focaveis()];
      const primeiro = itens[0];
      const ultimo = itens[itens.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    }
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  const ativo = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
        <Link href="/" className="font-serif text-3xl font-semibold tracking-wide text-navy" aria-label="MCM - Início">
          MCM
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className={`py-2 hover:text-gold ${ativo(item.href) ? "border-b-2 border-gold font-medium" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            className="hidden min-h-11 items-center rounded-sm bg-navy px-5 text-sm font-medium text-sand hover:bg-navy-soft md:inline-flex"
          >
            {compartilhado.botaoTopo}
          </Link>
          <button
            ref={botaoRef}
            type="button"
            className="inline-flex min-h-11 items-center rounded-sm border border-navy px-4 text-sm font-medium md:hidden"
            aria-expanded={aberto}
            aria-controls="menu-celular"
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? compartilhado.fecharMenu : compartilhado.abrirMenu}
          </button>
        </div>
      </div>

      <div
        id="menu-celular"
        ref={painelRef}
        hidden={!aberto}
        className="border-t border-navy/10 bg-background md:hidden"
      >
        <nav aria-label="Menu" className="px-5 py-4">
          <ul className="flex flex-col">
            {navegacao.map((item) => (
              <li key={item.href} className="border-b border-navy/10">
                <Link
                  href={item.href}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className="flex min-h-12 items-center text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contato"
            className="mt-4 flex min-h-12 items-center justify-center rounded-sm bg-navy px-5 text-sm font-medium text-sand"
          >
            {compartilhado.botaoTopo}
          </Link>
        </nav>
      </div>
    </header>
  );
}


