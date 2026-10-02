import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "MCM Seguros" };

export default function Seguros() {
  return (
    <PageShell
      titulo="MCM Seguros"
      subtitulo="Proteção da renda, da família e dos bens."
    />
  );
}
