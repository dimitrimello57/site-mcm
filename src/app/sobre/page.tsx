import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Sobre a MCM" };

export default function Sobre() {
  return (
    <PageShell
      titulo="Sobre a MCM"
      subtitulo="Equipe, experiência e metodologia."
    />
  );
}
