import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";
import { estados } from "@/lib/content";

export const metadata: Metadata = { title: "Página não encontrada | MCM", robots: { index: false } };

export default function NaoEncontrada() {
  const { titulo, texto, links } = estados.naoEncontrada;
  return (
    <Container className="utility-page pb-24">
      <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{titulo}</h1>
      <p className="mt-4 max-w-xl text-lg text-navy/80">{texto}</p>
      <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {links.map((l, i) => (
          <li key={l.href}>
            <ButtonLink href={l.href} variante={i === 0 ? "primario" : "contorno"} className="w-full sm:w-auto">
              {l.label}
            </ButtonLink>
          </li>
        ))}
      </ul>
    </Container>
  );
}
