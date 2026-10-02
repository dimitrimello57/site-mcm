import Link from "next/link";
import { compartilhado, contatoInfo } from "@/lib/content";
import { mostrarPrivacidade } from "@/lib/env";
import { frentesFooter } from "@/lib/site";

const link = "hover:text-gold-light underline-offset-4 hover:underline";

export function Footer() {
  return (
    <footer className="bg-navy text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-serif text-3xl text-gold-light">MCM</p>
          <p className="mt-3 text-sm font-medium">{compartilhado.rodape.assinatura}</p>
          <p className="mt-3 text-sm text-sand/75">{compartilhado.rodape.empresa}</p>
        </div>

        <nav aria-label="Nossas frentes">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-light">Nossas frentes</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {frentesFooter.map((f) => (
              <li key={f.href}>
                <Link href={f.href} className={link}>
                  {f.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="A MCM">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-light">A MCM</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/sobre" className={link}>
                Sobre a MCM
              </Link>
            </li>
            <li>
              <Link href="/contato" className={link}>
                Contato
              </Link>
            </li>
            {mostrarPrivacidade && (
              <li>
                <Link href="/privacidade" className={link}>
                  Política de Privacidade
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-light">Fale com a MCM</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{contatoInfo.telefone}</li>
            <li>
              <a href={`mailto:${contatoInfo.email}`} className={link}>
                {contatoInfo.email}
              </a>
            </li>
          </ul>
          <address className="mt-4 text-sm not-italic text-sand/75">{contatoInfo.endereco}</address>
        </div>
      </div>

      <div className="border-t border-sand/15">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-sand/65 sm:px-6">
          <p>{compartilhado.rodape.aviso}</p>
          <p className="mt-2">© {new Date().getFullYear()} MCM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
