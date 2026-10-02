import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Contato" };

export default function Contato() {
  return (
    <PageShell
      titulo="Contato"
      subtitulo="Acesso à primeira conversa com a MCM."
    />
  );
}
