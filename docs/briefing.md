# Briefing - Novo site MCM

## Objetivo e status

Apresentar com clareza MCM Seguros, MCM Partners e MCM Capital e preparar o visitante para uma conversa contextualizada. Copy e wireframes v1 são propostas para validação. O conteúdo do site atual foi rejeitado; não reutilizar sua redação.

## Frentes

- MCM Seguros: saúde, proteção em vida, vida e bens.
- MCM Partners: planejamento e alternativas de construção patrimonial.
- MCM Capital: crédito e aquisição planejada.

Consórcio em Partners integra a construção patrimonial; em Capital é comparado com alternativas para aquisição planejada.

## Arquitetura

Início (/), Seguros (/seguros), Partners (/partners), Capital (/capital), Sobre (/sobre), Contato (/contato) e Privacidade (/privacidade).

Home: abertura, problema, método, três frentes, situações de entrada, equipe e contato. Páginas das frentes: soluções, processo, dúvidas e contato contextual.

## Referências

- Imagem original: estrutura das três frentes e portfólio inicial.
- Áudio original: página principal como apresentação comercial, começando pelo problema e método, com aprofundamento pelas frentes. Transcrição automática em docs/audio-transcricao.txt; pode conter erros.
- Estudo Patrimonial MCM.pdf: método de comparação, premissas e riscos. Não publicar resultados como promessa nem incluir caso público na v1 sem validação e autorização.
- https://mcm-capital.vercel.app/: inventário de contatos e equipe, a confirmar.

O objetivo principal é a clareza das três frentes; a orientação comercial do áudio complementa esse objetivo.

## Implementação e fontes

O novo código já existe neste repositório em Next.js, TypeScript e Tailwind CSS. A aplicação usa src/lib/content.ts. Copy e instruções estão em conteudo/; PDF em output/pdf/.

Azul, dourado e as fontes atuais são referências de implementação, ainda sujeitas à validação visual.

## Pendências

Validar copy e wireframes; confirmar portfólio, equipe, contatos, identidade visual, escopo e registros; definir domínio e hospedagem; configurar destino do formulário e concluir a política de privacidade conforme a operação real.