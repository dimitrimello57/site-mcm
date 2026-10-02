# MCM - Site

Repositório do novo site da MCM.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. Fontes: Poppins e Cormorant Garamond.

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Estrutura

- `src/app/` - páginas: início, seguros, partners, capital, sobre, contato
- `src/components/` - Header, Footer e PageShell
- `src/lib/site.ts` - dados das frentes e navegação
- `docs/briefing.md` - contexto, objetivo e arquitetura do site
