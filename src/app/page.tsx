import Link from "next/link";
import { frentes } from "@/lib/site";

export default function Inicio() {
  return (
    <>
      <section className="bg-navy text-sand">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Proteja sua renda, construa patrimônio e encontre o crédito adequado aos seus planos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            Estrutura para transformar renda em patrimônio.
          </p>
          <Link
            href="/contato"
            className="mt-10 inline-block rounded-sm bg-gold px-6 py-3 text-sm font-medium text-navy hover:bg-gold-light"
          >
            Conversar com a MCM
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl font-semibold text-navy">Três frentes, uma estratégia</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {frentes.map((f) => (
            <li key={f.slug}>
              <Link
                href={`/${f.slug}`}
                className="block h-full rounded-sm border border-navy/15 bg-sand p-6 hover:border-gold"
              >
                <p className="text-xs uppercase tracking-widest text-gold">{f.eixo}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-navy">{f.nome}</h3>
                <p className="mt-3 text-navy/75">{f.resumo}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
