import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "MCM Capital" };

export default function Capital() {
  return (
    <PageShell
      titulo="MCM Capital"
      subtitulo="Financiamento imobiliário, home equity e soluções de crédito."
    />
  );
}
