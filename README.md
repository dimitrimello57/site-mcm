# MCM - Novo site

Projeto em desenvolvimento com Next.js, TypeScript e Tailwind CSS. Copy e wireframes são propostas para validação pela MCM.

## Desenvolvimento

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Organização

| Local | Uso |
| --- | --- |
| src/app/ | Páginas, API de contato, SEO e estados de erro |
| src/components/ | Componentes compartilhados |
| src/lib/content.ts | Copy utilizada pela aplicação |
| src/lib/ | Navegação, ambiente, SEO e validação |
| conteudo/mcm_copy.py | Fonte do documento editorial |
| conteudo/gerar_pdf.py | Gerador de PDF, Markdown e JSON |
| conteudo/MCM_Copy_Wireframes_v1.md | Proposta legível para revisão |
| conteudo/mcm_conteudo_v1.json | Exportação estruturada; não importada pelo site |
| conteudo/CLAUDE_Desenvolvimento.md | Orientações de desenvolvimento |
| output/pdf/MCM_Copy_Wireframes_v1.pdf | PDF entregue |
| docs/briefing.md | Objetivo e arquitetura |
| docs/audio-transcricao.txt | Transcrição automática do áudio |
| docs/organizacao.md | Inventário e limpeza |

PDF patrimonial, imagem e áudio originais permanecem na raiz. Não são assets públicos do site.

## Ambiente

- NEXT_PUBLIC_PREVIEW=1: preview para validação, com noindex e formulário de demonstração.
- NEXT_PUBLIC_SITE_URL: domínio de produção confirmado para SEO.
- CONTACT_WEBHOOK_URL: destino real do formulário, apenas no servidor.

Sem destino configurado, o formulário não aparece em produção. A política de privacidade é uma minuta e aparece apenas no preview.

## Geração e manutenção

Editar conteudo/mcm_copy.py e executar `python conteudo/gerar_pdf.py`, com ReportLab instalado e as fontes Arial do Windows. O gerador recria o PDF, o Markdown e o JSON. Revisar a renderização após mudanças.

A aplicação usa src/lib/content.ts. Alterações aprovadas precisam ser refletidas no documento editorial e no conteúdo do site.

node_modules/ pode ser reinstalada com npm ci. .next/ é cache e build regenerável. Ambas foram preservadas para continuidade do desenvolvimento.