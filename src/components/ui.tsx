import Link from "next/link";
import type { Card, Faq, Fechamento, Hero, Passo } from "@/lib/content";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 ${className}`}>{children}</div>;
}

type Tom = "claro" | "areia" | "escuro";
const tons: Record<Tom, string> = {
  claro: "bg-background text-navy",
  areia: "bg-sand text-navy",
  escuro: "bg-navy text-sand",
};

export function Section({
  id,
  bloco,
  tom = "claro",
  titulo,
  children,
}: {
  id?: string;
  bloco: string;
  tom?: Tom;
  titulo: string;
  children: React.ReactNode;
}) {
  const tituloId = `${bloco.toLowerCase()}-titulo`;
  return (
    <section id={id} data-bloco={bloco} aria-labelledby={tituloId} className={`${tons[tom]} scroll-mt-20`}>
      <Container className="py-16 sm:py-20">
        <h2 id={tituloId} className="max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          {titulo}
        </h2>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variante = "primario",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variante?: "primario" | "secundario" | "contorno";
  className?: string;
}) {
  const estilos = {
    primario: "bg-gold text-navy hover:bg-gold-light",
    secundario: "border border-sand/60 text-sand hover:border-gold-light hover:text-gold-light",
    contorno: "border border-navy text-navy hover:bg-navy hover:text-sand",
  };
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-sm px-6 py-3 text-center text-sm font-medium ${estilos[variante]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold">
      {children}
    </Link>
  );
}

export function Breadcrumb({ pagina }: { pagina: string }) {
  return (
    <nav aria-label="Você está em" className="bg-navy text-sand/80">
      <Container className="py-3 text-sm">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="underline underline-offset-4 hover:text-gold-light">
              Início
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{pagina}</li>
        </ol>
      </Container>
    </nav>
  );
}

export function HeroFrente({
  bloco,
  hero,
  children,
}: {
  bloco: string;
  hero: Hero;
  children?: React.ReactNode;
}) {
  return (
    <section data-bloco={bloco} className="bg-navy text-sand">
      <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[3fr_2fr] lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">{hero.identificador}</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{hero.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/85">{hero.texto}</p>
          <ButtonLink href={hero.cta.href} className="mt-10 w-full sm:w-auto">
            {hero.cta.label}
          </ButtonLink>
        </div>
        {children}
      </Container>
    </section>
  );
}

export function CardGrid({ cartoes, colunas = 3 }: { cartoes: Card[]; colunas?: 2 | 3 }) {
  return (
    <ul className={`grid gap-6 ${colunas === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {cartoes.map((c) => (
        <li key={c.titulo} className="flex flex-col rounded-sm border border-navy/15 bg-background p-6">
          <h3 className="font-serif text-2xl font-semibold">{c.titulo}</h3>
          <p className="mt-3 text-navy/80">{c.texto}</p>
          {c.condicao && (
            <p className="mt-4 border-l-2 border-gold pl-3 text-sm text-navy/75">{c.condicao}</p>
          )}
          <p className="mt-auto pt-6">
            <TextLink href={c.link.href}>{c.link.label}</TextLink>
          </p>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ passos, escuro = false }: { passos: Passo[]; escuro?: boolean }) {
  return (
    <ol className="grid gap-6 md:grid-cols-4">
      {passos.map((p, i) => (
        <li key={i} className={`border-t-2 pt-4 ${escuro ? "border-gold-light" : "border-gold"}`}>
          <span className={`font-serif text-3xl ${escuro ? "text-gold-light" : "text-gold"}`} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          {p.titulo && <h3 className="mt-2 font-serif text-xl font-semibold">{p.titulo}</h3>}
          <p className={`mt-2 ${escuro ? "text-sand/85" : "text-navy/80"}`}>{p.texto}</p>
        </li>
      ))}
    </ol>
  );
}

// <details> nativo: anuncia estado expandido/recolhido e funciona por teclado sem JavaScript.
export function Accordion({ itens }: { itens: Faq[] }) {
  return (
    <div className="max-w-3xl divide-y divide-navy/15 border-y border-navy/15">
      {itens.map((f) => (
        <details key={f.pergunta} className="group py-1">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-medium [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-base font-medium sm:text-lg">{f.pergunta}</h3>
            <span aria-hidden="true" className="text-2xl text-gold transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="pb-4 pr-8 text-navy/80">{f.resposta}</p>
        </details>
      ))}
    </div>
  );
}

export function FaixaFinal({ bloco, dados }: { bloco: string; dados: Fechamento }) {
  const id = `${bloco.toLowerCase()}-titulo`;
  return (
    <section data-bloco={bloco} aria-labelledby={id} className="bg-navy text-sand">
      <Container className="py-16 sm:py-20">
        <h2 id={id} className="max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          {dados.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-sand/85">{dados.texto}</p>
        <ButtonLink href={dados.cta.href} className="mt-8 w-full sm:w-auto">
          {dados.cta.label}
        </ButtonLink>
        {dados.condicao && <p className="mt-6 max-w-2xl text-sm text-sand/70">{dados.condicao}</p>}
      </Container>
    </section>
  );
}

