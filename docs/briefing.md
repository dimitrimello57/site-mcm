# Briefing - Novo site MCM

## Contexto

- Site atual (referência): https://mcm-capital.vercel.app/ — feito em Next.js, Tailwind CSS, fontes Poppins e Cormorant Garamond. O código dele não está neste repositório.
- Identidade visual: azul escuro, dourado e tons claros.
- Materiais de referência (fora do Git, ver `.gitignore`): Estudo Patrimonial MCM (PDF), mapa de marca e serviços (imagem) e um áudio de WhatsApp ainda sem transcrição.

## Marca e frentes

MCM é a marca principal. As frentes de atuação são:

- **MCM Seguros** — proteção da renda, da família e dos bens.
- **MCM Partners** — planejamento, investimentos e construção patrimonial.
- **MCM Capital** — financiamento imobiliário, home equity e soluções de crédito.

Posicionamento: "Estrutura para transformar renda em patrimônio". Eixos do site atual: proteção, rentabilidade e perpetuação.

## Objetivo principal

Apresentar com clareza as três frentes da MCM e mostrar como se complementam.

## Arquitetura proposta

| Página | Papel |
| --- | --- |
| Início | Proposta da MCM e apresentação imediata das três frentes |
| MCM Seguros | Página própria da frente |
| MCM Partners | Página própria da frente |
| MCM Capital | Página própria da frente |
| Sobre a MCM | Equipe, experiência e metodologia |
| Contato | Acesso à primeira conversa |

Cada página de frente segue a mesma sequência: o que faz, para quem faz sentido, quais soluções oferece e como funciona o atendimento.

## Sequência da página inicial

1. Proposta direta: "Proteja sua renda, construa patrimônio e encontre o crédito adequado aos seus planos."
2. Situações do cliente: proteger a família, investir, adquirir um imóvel, viabilizar um projeto.
3. As três frentes, com serviços claros em cada uma.
4. Método de trabalho: diagnóstico, estratégia, implementação e acompanhamento.
5. Exemplo concreto: estudo patrimonial com premissas e riscos explícitos.
6. Equipe e credibilidade.
7. Convite para conversar.

## Pontos em aberto

- **Consórcio:** em Partners é estratégia de construção patrimonial; em Capital é alternativa para aquisição planejada. Definir a explicação que evita sobreposição entre as frentes.
- Transcrever o áudio do WhatsApp.
- Confirmar a stack (Next.js + Tailwind, como o site atual?).
- Definir domínio e hospedagem.

## Direção do áudio (transcrição de `tmp/audio-transcript.txt`)

- A página inicial ("página mãe") deve funcionar como **página de vendas / apresentação**, começando **pelo problema**: o cliente gera muita renda, mas não constrói patrimônio. Depois vem a metodologia (como a MCM resolve).
- O visitante que preenche o formulário do site já deve chegar **pronto para comprar**.
- A navegação **segmenta** o visitante: quem entra em MCM Seguros é conduzido cada vez mais para Seguros; quem entra em Partners, para Partners. As subpáginas aprofundam e deixam o lead mais preparado para fechar.
- Isso reforça o objetivo de conversão no formulário, além de apresentar as três frentes.
