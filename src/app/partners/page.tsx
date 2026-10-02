import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "MCM Partners" };

export default function Partners() {
  return (
    <PageShell
      titulo="MCM Partners"
      subtitulo="Planejamento, investimentos e construção patrimonial."
    />
  );
}
