import Link from "next/link";
import { navegacao } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-navy/10 bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-navy">
          MCM
        </Link>
        <nav aria-label="Principal">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy/80">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
