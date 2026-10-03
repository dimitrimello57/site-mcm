# MCM — direção visual

Proposta aplicada ao projeto para revisão. O PDF v1 continua sendo a referência de copy e estrutura; suas representações de wireframe antecedem esta direção visual.

## Referências e decisões

Referências fornecidas: [Rolex](https://www.rolex.com/pt-br), [Apple](https://www.apple.com/br/iphone-18-pro/) e [Walks](https://walksbrand.com.br/). A interpretação para a MCM combina cenas fotográficas amplas, títulos com escala, pausas na rolagem e navegação discreta. Nenhuma marca, imagem ou copy dessas empresas foi incorporada.

A home apresenta o problema do visitante, o método e três cenas individuais para Seguros, Partners e Capital. As páginas internas compartilham esse sistema. Listas editoriais substituem os cartões repetidos. A paleta combina azul petróleo, branco quente e detalhes dourados. Animações de entrada respeitam a preferência por movimento reduzido.

## Fotografia

Fotos editoriais provisórias baixadas do Unsplash, usadas conforme sua [licença](https://unsplash.com/license). Não representam clientes, equipe ou imóveis da MCM. A seleção final deve acompanhar a aprovação da direção visual.

| Arquivo | Autor | Fonte |
| --- | --- | --- |
| public/images/horizonte.webp | Johannes Mändle | [Horizonte](https://unsplash.com/photos/an-aerial-view-of-a-cliff-overlooking-the-ocean-G4JoiZZtAY0) |
| public/images/familia.webp | Merve Kalafat Yılmaz | [Família](https://unsplash.com/photos/family-walking-on-beach-at-sunset-dc8Yoc2lDTA) |
| public/images/arquitetura.webp | Rafael Hoyos Weht | [Arquitetura](https://unsplash.com/photos/modern-concrete-building-with-large-windows-and-palm-tree-9rZeITBUgBc) |

## Implementação

Estilos em `src/app/editorial.css`; imagens em `src/lib/visual.ts`; animação progressiva em `src/components/EditorialMotion.tsx`. A copy de serviços continua em `src/lib/content.ts`. A implementação não altera as regras de envio do contato ou publica o projeto.

## Verificação

`npm run lint` e `npm run build` passaram. Teste em navegador Edge isolado: home, Seguros, Partners, Capital, Sobre e Contato, nas larguras de 1440, 390 e 320 pixels, com um título principal por página e sem rolagem horizontal. Menu e fechamento por Escape, além da abertura de FAQ, foram conferidos. Imagens de revisão em `output/hero-desktop.png`, `output/hero-mobile.png`, `output/frentes-desktop.png` e `output/capital-mobile.png`.
