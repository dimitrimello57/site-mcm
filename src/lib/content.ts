// Copy do site. Fonte editorial: conteudo/MCM_Copy_Wireframes_v1.md (proposta para validação).
// Os IDs dos blocos (H01, S02...) seguem a fonte. Notas de produção ficam fora deste arquivo.

export type Link = { label: string; href: string };
export type Card = { titulo: string; texto: string; condicao?: string; link: Link };
export type Faq = { pergunta: string; resposta: string };
export type Passo = { titulo?: string; texto: string };

export type Hero = { identificador: string; h1: string; texto: string; cta: Link };
export type Fechamento = { h2: string; texto: string; cta: Link; condicao?: string };

export const contatoInfo = {
  telefone: "(82) 9 9122-3900",
  whatsapp: "5582991223900",
  email: "adm@mcmcapital.com.br",
  endereco:
    "Av. Comendador Gustavo Paiva, 3692, Sala 207 - Mangabeiras, Maceió - AL. CEP 57037-035.",
};

export const compartilhado = {
  atalho: "Ir para o conteúdo",
  botaoTopo: "Fale com a MCM",
  abrirMenu: "Abra o menu",
  fecharMenu: "Feche o menu",
  rodape: {
    assinatura: "Proteção, patrimônio e crédito em um só lugar.",
    empresa:
      "A MCM reúne soluções em seguros, planejamento patrimonial e crédito para diferentes momentos da sua vida.",
    aviso:
      "As condições de cada solução dependem da análise, das regras e dos contratos das instituições responsáveis.",
  },
};

/* ------------------------------------------------------------------ Início */

export const inicio = {
  seo: {
    title: "MCM | Seguros, planejamento patrimonial e crédito",
    description:
      "Conheça MCM Seguros, MCM Partners e MCM Capital. Soluções para proteger sua família, construir patrimônio e planejar o crédito para seus projetos.",
  },
  h01: {
    identificador: "MCM",
    h1: "Transforme sua renda em patrimônio, com um plano para cada etapa.",
    texto:
      "Sua renda precisa dar conta da vida de hoje e dos planos para o futuro. A MCM ajuda você a organizar essas decisões em três frentes: seguros, planejamento patrimonial e crédito.",
    ctaPrincipal: { label: "Conheça nossas frentes", href: "/#frentes" },
    ctaSecundario: { label: "Fale com a MCM", href: "/contato" },
  },
  h02: {
    h2: "Você conquista mais. As decisões também aumentam.",
    texto:
      "Com a renda vêm novas escolhas: quanto guardar, o que proteger, onde investir e como comprar um bem. Quando cada decisão é tomada separadamente, fica mais difícil saber se o conjunto acompanha seus objetivos.",
    situacoes: [
      {
        titulo: "A proteção ficou para depois.",
        texto: "Sua família e seus compromissos mudaram, mas você ainda não revisou seus seguros.",
      },
      {
        titulo: "O dinheiro ainda não tem um destino.",
        texto: "Você quer construir patrimônio, mas precisa definir objetivos e comparar os caminhos.",
      },
      {
        titulo: "A aquisição começa pela parcela.",
        texto:
          "Você encontrou um bem que deseja comprar, mas ainda precisa entender o custo e o impacto do crédito.",
      },
    ],
    conclusao:
      "A MCM ajuda a colocar essas decisões dentro de um plano que considere seu momento e o que você quer alcançar.",
  },
  h03: {
    h2: "Do seu objetivo ao próximo passo.",
    etapas: [
      {
        titulo: "Entender seu momento",
        texto: "Conversamos sobre seus objetivos, sua situação atual e o que precisa ser resolvido.",
      },
      {
        titulo: "Planejar as alternativas",
        texto: "Analisamos possibilidades, custos, prazos e condições antes de apresentar um caminho.",
      },
      {
        titulo: "Apoiar a implementação",
        texto: "Depois da sua decisão, orientamos os próximos passos e a documentação necessária.",
      },
      {
        titulo: "Acompanhar as mudanças",
        texto:
          "Revisitamos as soluções contratadas quando seus planos e necessidades mudam, conforme o escopo do atendimento.",
      },
    ] satisfies Passo[],
  },
  h04: {
    h2: "Conheça as três frentes da MCM.",
    introducao:
      "Cada frente tem um papel. Juntas, ajudam você a tomar decisões que consideram sua vida, seus recursos e seus planos.",
    cartoes: [
      {
        titulo: "MCM Seguros",
        chamada: "Proteja sua família, sua renda e seus bens.",
        texto:
          "Planos de saúde, seguros em vida, seguro de vida e seguros patrimoniais, escolhidos a partir do que você precisa proteger.",
        link: { label: "Conheça a MCM Seguros", href: "/seguros" },
      },
      {
        titulo: "MCM Partners",
        chamada: "Construa patrimônio com planejamento.",
        texto:
          "Planejamento patrimonial e análise de alternativas no mercado financeiro, em consórcios e em imóveis para renda.",
        link: { label: "Conheça a MCM Partners", href: "/partners" },
      },
      {
        titulo: "MCM Capital",
        chamada: "Encontre o crédito adequado ao seu projeto.",
        texto:
          "Financiamento imobiliário, crédito com garantia de imóvel e consórcio para aquisição planejada, com análise de custos e prazos.",
        link: { label: "Conheça a MCM Capital", href: "/capital" },
      },
    ],
  },
  h05: {
    h2: "O que você precisa resolver agora?",
    situacoes: [
      {
        texto: "Quero cuidar da minha saúde e proteger minha família e meus bens.",
        link: { label: "Explore as soluções de seguros", href: "/seguros" },
      },
      {
        texto: "Quero organizar meus recursos e planejar a construção do meu patrimônio.",
        link: { label: "Explore as soluções patrimoniais", href: "/partners" },
      },
      {
        texto: "Quero comprar um imóvel ou encontrar crédito para um projeto.",
        link: { label: "Explore as soluções de crédito", href: "/capital" },
      },
    ],
    apoio:
      "Seu momento pode envolver mais de uma frente. A conversa com a MCM ajuda a entender por onde começar.",
  },
  h06: {
    h2: "Conheça quem está por trás da MCM.",
    texto:
      "A MCM reúne planejamento e apoio à execução em seguros, patrimônio e crédito. Mário Mello e Emilly Mello conduzem a empresa com foco no atendimento e na organização de cada etapa.",
    link: { label: "Saiba mais sobre a MCM", href: "/sobre" },
  },
  h07: {
    h2: "Vamos entender o que faz sentido para você?",
    texto:
      "Conte à MCM o que você deseja proteger, construir ou viabilizar. Nossa equipe ajuda a identificar a frente adequada ao seu momento.",
    cta: { label: "Fale com a MCM", href: "/contato" },
  } satisfies Fechamento,
};

/* ----------------------------------------------------------------- Seguros */

export const seguros = {
  seo: {
    title: "MCM Seguros | Saúde, vida e proteção patrimonial",
    description:
      "Conheça as soluções da MCM Seguros: planos de saúde, seguros em vida, seguro de vida e proteção dos seus bens. Converse sobre suas necessidades.",
  },
  s01: {
    identificador: "MCM Seguros",
    h1: "Proteção para sua família, sua renda e seus bens.",
    texto:
      "Escolher uma proteção começa por entender o que está em jogo. A MCM ajuda você a avaliar planos de saúde e seguros de acordo com suas necessidades e seu orçamento.",
    cta: { label: "Converse sobre sua proteção", href: "/contato?frente=seguros" },
  } satisfies Hero,
  s02: {
    h2: "O que você pode proteger com a MCM.",
    cartoes: [
      {
        titulo: "Planos de saúde",
        texto:
          "Avalie alternativas de assistência à saúde para você e sua família. Rede de atendimento, abrangência, acomodação, carências e custos entram na comparação.",
        link: {
          label: "Converse sobre plano de saúde",
          href: "/contato?frente=seguros&assunto=plano-de-saude",
        },
      },
      {
        titulo: "Seguros em vida",
        texto:
          "Conheça coberturas que podem oferecer apoio financeiro em situações como doença grave, invalidez ou incapacidade temporária, conforme as condições de cada seguro.",
        link: {
          label: "Converse sobre proteção em vida",
          href: "/contato?frente=seguros&assunto=seguros-em-vida",
        },
      },
      {
        titulo: "Seguro de vida",
        texto:
          "Planeje o apoio financeiro para quem depende de você. A análise considera seus compromissos, as necessidades da família e o valor de cobertura adequado.",
        link: {
          label: "Converse sobre seguro de vida",
          href: "/contato?frente=seguros&assunto=seguro-de-vida",
        },
      },
      {
        titulo: "Seguros patrimoniais",
        texto:
          "Avalie proteção para seu imóvel, automóvel ou empresa. Comparamos coberturas, limites, franquias e exclusões para que você entenda o que está contratando.",
        link: {
          label: "Converse sobre seus bens",
          href: "/contato?frente=seguros&assunto=seguros-patrimoniais",
        },
      },
    ] satisfies Card[],
  },
  s03: {
    h2: "Quando vale revisar sua proteção?",
    itens: [
      "Quando você precisa contratar ou mudar seu plano de saúde.",
      "Quando nasce um filho ou alguém passa a depender da sua renda.",
      "Quando seus compromissos financeiros ou sua renda mudam.",
      "Quando você compra um imóvel, troca de carro ou amplia sua empresa.",
    ],
    texto:
      "Uma proteção contratada em outro momento pode precisar de ajustes. A revisão ajuda a identificar o que continua adequado e o que merece atenção.",
  },
  s04: {
    h2: "Como ajudamos você a escolher.",
    passos: [
      { texto: "Entendemos quem e o que você precisa proteger." },
      { texto: "Comparamos alternativas e explicamos coberturas, custos e condições." },
      { texto: "Após sua escolha, orientamos a proposta e a documentação." },
      {
        texto:
          "Ajudamos a revisar a proteção quando sua situação muda, conforme o atendimento contratado.",
      },
    ] satisfies Passo[],
  },
  s05: {
    h2: "Dúvidas sobre seguros e proteção.",
    faq: [
      {
        pergunta: "Qual a diferença entre seguro em vida e seguro de vida?",
        resposta:
          "Nesta página, seguros em vida reúne coberturas que podem ser acionadas durante a vida do segurado. Seguro de vida destaca o apoio aos beneficiários em caso de falecimento. Um mesmo produto pode reunir os dois tipos de cobertura.",
      },
      {
        pergunta: "Posso revisar um seguro que já tenho?",
        resposta:
          "Sim. Você pode apresentar sua apólice para uma análise das coberturas e das suas necessidades atuais. Uma mudança deve considerar as condições do contrato existente e da nova proposta.",
      },
      {
        pergunta: "A MCM é a seguradora?",
        resposta:
          "Não. A cobertura é assumida pela seguradora ou operadora responsável pelo produto. A MCM apoia a escolha e o processo de contratação dentro do seu escopo de atuação.",
      },
      {
        pergunta: "Existe uma opção igual para todas as pessoas?",
        resposta:
          "As necessidades variam. Dependentes, rotina, orçamento, patrimônio e condições de aceitação ajudam a definir quais alternativas devem ser avaliadas.",
      },
    ] satisfies Faq[],
  },
  s06: {
    h2: "Sua proteção acompanha sua vida hoje?",
    texto:
      "Conte o que você precisa proteger. A equipe da MCM ajuda a avaliar as alternativas para o seu momento.",
    cta: { label: "Converse sobre sua proteção", href: "/contato?frente=seguros" },
    condicao:
      "Coberturas, carências, limites, exclusões e aceitação variam conforme o produto e a seguradora ou operadora.",
  } satisfies Fechamento,
};

/* ---------------------------------------------------------------- Partners */

export const partners = {
  seo: {
    title: "MCM Partners | Planejamento e construção patrimonial",
    description:
      "Organize seus objetivos e conheça alternativas de construção patrimonial no mercado financeiro, em consórcios e em imóveis para renda com a MCM Partners.",
  },
  p01: {
    identificador: "MCM Partners",
    h1: "Construa patrimônio com um plano para seus objetivos.",
    texto:
      "A MCM Partners ajuda você a organizar seus recursos e avaliar caminhos de construção patrimonial. O planejamento considera o que você quer alcançar, em quanto tempo e quais compromissos pode assumir.",
    cta: { label: "Converse sobre seus objetivos", href: "/contato?frente=partners" },
  } satisfies Hero,
  p02: {
    h2: "Seu plano começa com quatro perguntas.",
    perguntas: [
      "O que você quer alcançar?",
      "Quais recursos estão disponíveis?",
      "Quando você pode precisar desse dinheiro?",
      "Quais riscos e compromissos cabem na sua situação?",
    ],
    texto:
      "Essas respostas ajudam a avaliar as alternativas e a preservar os recursos necessários para suas despesas e imprevistos.",
  },
  p03: {
    h2: "Caminhos para construir seu patrimônio.",
    cartoes: [
      {
        titulo: "Mercado financeiro",
        texto:
          "Organização dos objetivos e análise do papel dos investimentos no seu planejamento. Prazo, disponibilidade do dinheiro e risco orientam a avaliação, com participação de profissionais habilitados quando necessária.",
        link: {
          label: "Converse sobre planejamento financeiro",
          href: "/contato?frente=partners&assunto=mercado-financeiro",
        },
      },
      {
        titulo: "Consórcio na construção patrimonial",
        texto:
          "Avaliação do consórcio como parte de uma estratégia de aquisição de bens. O estudo considera parcelas, reajustes, taxas, prazo de contemplação e sua capacidade de manter os compromissos.",
        link: {
          label: "Converse sobre estratégia com consórcio",
          href: "/contato?frente=partners&assunto=consorcio-patrimonial",
        },
      },
      {
        titulo: "Imóveis para renda",
        texto:
          "Análise de imóveis voltados à geração de renda, incluindo locação de curta temporada. Localização, preço de compra, ocupação, despesas e gestão entram na conta.",
        link: {
          label: "Converse sobre imóveis para renda",
          href: "/contato?frente=partners&assunto=imoveis-para-renda",
        },
      },
    ] satisfies Card[],
  },
  p04: {
    h2: "Um estudo precisa mostrar o que pode dar certo e o que pode mudar.",
    texto:
      "As alternativas são comparadas a partir de premissas explícitas. Avaliamos como custos, prazos e resultados diferentes do esperado podem afetar o plano.",
    itens: [
      "Custos e compromissos ao longo do tempo.",
      "Disponibilidade dos recursos quando você precisar deles.",
      "Cenários de atraso, despesas maiores ou receita menor.",
      "Participação de parceiros e responsabilidades de cada etapa.",
    ],
    apoio:
      "Projeções ajudam a comparar possibilidades. Os resultados dependem das condições reais de cada operação.",
  },
  p05: {
    h2: "Precisa de crédito para adquirir um bem?",
    texto:
      "Na MCM Partners, o consórcio é avaliado dentro do plano de construção patrimonial. Na MCM Capital, ele é comparado com outras alternativas para uma aquisição planejada. Seu objetivo define onde a análise começa.",
    link: { label: "Conheça a MCM Capital", href: "/capital" },
  },
  p06: {
    h2: "Dúvidas sobre planejamento patrimonial.",
    faq: [
      {
        pergunta: "Preciso ter um patrimônio formado para conversar?",
        resposta:
          "Você pode entrar em contato na fase de organização ou de expansão do patrimônio. A conversa inicial ajuda a entender se o atendimento da MCM é adequado à sua necessidade.",
      },
      {
        pergunta: "Toda estratégia envolve consórcio ou imóvel?",
        resposta:
          "As alternativas devem ser avaliadas conforme os objetivos, os recursos, o prazo e os riscos de cada pessoa. Uma solução só faz sentido quando cabe no planejamento.",
      },
      {
        pergunta: "O rendimento apresentado em um estudo é garantido?",
        resposta:
          "Não. Um estudo trabalha com premissas e cenários. Rentabilidade, renda de aluguel, ocupação, valorização e prazo de contemplação podem ser diferentes do esperado.",
      },
      {
        pergunta: "Quem participa da execução?",
        resposta:
          "A MCM organiza o acompanhamento dentro do escopo contratado. Quando uma etapa exige uma atividade especializada, os profissionais e as instituições responsáveis devem ser identificados na proposta.",
      },
    ] satisfies Faq[],
  },
  p07: {
    h2: "Qual patrimônio você quer construir?",
    texto:
      "Conte seus objetivos e seu momento atual. A MCM ajuda a organizar as perguntas e avaliar os próximos passos.",
    cta: { label: "Converse sobre seus objetivos", href: "/contato?frente=partners" },
    condicao:
      "Investimentos envolvem riscos. Projeções não garantem resultados futuros. Consórcios dependem das regras de contemplação; renda e valorização de imóveis podem variar.",
  } satisfies Fechamento,
};

/* ----------------------------------------------------------------- Capital */

export const capital = {
  seo: {
    title: "MCM Capital | Financiamento e soluções de crédito",
    description:
      "Conheça financiamento imobiliário, crédito com garantia de imóvel e consórcio para aquisição planejada. Avalie custos, prazos e condições com a MCM Capital.",
  },
  c01: {
    identificador: "MCM Capital",
    h1: "Crédito para seus projetos, com clareza para decidir.",
    texto:
      "Comprar um imóvel ou financiar um projeto exige avaliar mais do que a parcela. A MCM Capital ajuda você a comparar alternativas, entender os custos e conduzir os próximos passos da contratação.",
    cta: { label: "Converse sobre seu projeto", href: "/contato?frente=capital" },
  } satisfies Hero,
  c02: {
    h2: "Conheça as alternativas de crédito.",
    cartoes: [
      {
        titulo: "Financiamento imobiliário",
        texto:
          "Avalie condições para comprar um imóvel. Entrada, prazo, taxa, custo efetivo total e sistema de amortização ajudam a comparar as propostas.",
        link: {
          label: "Converse sobre financiamento",
          href: "/contato?frente=capital&assunto=financiamento-imobiliario",
        },
      },
      {
        titulo: "Crédito com garantia de imóvel",
        texto:
          "Também chamado de home equity, permite solicitar crédito usando um imóvel como garantia. A análise considera o valor do bem, a finalidade do recurso, o prazo e sua capacidade de pagamento.",
        condicao:
          "O imóvel fica vinculado à operação e pode ser perdido em caso de inadimplência, conforme as condições contratuais.",
        link: {
          label: "Converse sobre home equity",
          href: "/contato?frente=capital&assunto=home-equity",
        },
      },
      {
        titulo: "Consórcio para aquisição planejada",
        texto:
          "Uma alternativa para quem pode planejar a aquisição de um bem. A comparação considera taxa de administração, reajustes, parcelas e as regras de sorteio e lance.",
        condicao:
          "A data de contemplação depende das regras do grupo. Não há garantia de disponibilidade imediata do crédito.",
        link: {
          label: "Converse sobre consórcio",
          href: "/contato?frente=capital&assunto=consorcio-aquisicao",
        },
      },
    ] satisfies Card[],
  },
  c03: {
    h2: "Qual alternativa combina com seu objetivo?",
    introducao:
      "O objetivo, o prazo e os compromissos de cada alternativa ajudam a orientar a comparação.",
    colunas: { nome: "Alternativa", finalidade: "Finalidade", atencao: "Pontos de atenção" },
    linhas: [
      {
        nome: "Financiamento imobiliário",
        finalidade: "Aquisição de imóvel, com liberação após as etapas e aprovações exigidas.",
        atencao: "Entrada, custo efetivo total, prazo, amortização e garantia do imóvel.",
      },
      {
        nome: "Home equity",
        finalidade:
          "Obtenção de recursos usando um imóvel como garantia, conforme as condições da instituição.",
        atencao: "Custos, avaliação do imóvel, capacidade de pagamento e risco da garantia.",
      },
      {
        nome: "Consórcio",
        finalidade:
          "Aquisição planejada, com acesso ao crédito após a contemplação e demais condições do grupo.",
        atencao: "Taxas, reajustes, prazo do grupo, sorteios e recursos necessários para eventual lance.",
      },
    ],
  },
  c04: {
    h2: "Como a MCM apoia sua contratação.",
    passos: [
      { texto: "Entendemos a finalidade do crédito e sua situação atual." },
      { texto: "Analisamos as alternativas disponíveis e explicamos os custos e as condições." },
      { texto: "Orientamos a documentação e as etapas de análise da proposta escolhida." },
      { texto: "Acompanhamos o andamento dentro do escopo de atendimento combinado." },
    ] satisfies Passo[],
  },
  c05: {
    h2: "Dúvidas sobre crédito e contratação.",
    faq: [
      {
        pergunta: "A MCM garante a aprovação do crédito?",
        resposta:
          "Não. A aprovação cabe à instituição responsável e depende de análise de crédito, documentação e, quando aplicável, avaliação do imóvel.",
      },
      {
        pergunta: "Como saber qual proposta custa menos?",
        resposta:
          "A comparação deve considerar o custo efetivo total, o prazo, as despesas da operação e a forma de pagamento. Uma parcela menor pode vir acompanhada de um prazo maior.",
      },
      {
        pergunta: "Consórcio tem liberação imediata?",
        resposta:
          "Não há garantia de liberação imediata. É necessário ser contemplado por sorteio ou lance, conforme as regras do grupo, e cumprir as condições para utilização do crédito.",
      },
      {
        pergunta: "Posso usar meu imóvel como garantia?",
        resposta:
          "A possibilidade depende das condições do imóvel, da documentação e da análise da instituição. Antes de contratar, é essencial entender os compromissos e o risco de perda do bem em caso de inadimplência.",
      },
    ] satisfies Faq[],
  },
  c06: {
    h2: "Seu projeto começa com uma análise das possibilidades.",
    texto:
      "Conte o que você deseja realizar. A equipe da MCM ajuda a identificar as alternativas que merecem ser avaliadas.",
    cta: { label: "Converse sobre seu projeto", href: "/contato?frente=capital" },
    condicao:
      "Aprovação, taxas, valores e prazos dependem da análise e das condições da instituição responsável. No consórcio, o acesso ao crédito depende da contemplação e das demais regras do grupo.",
  } satisfies Fechamento,
};

/* ------------------------------------------------------------------- Sobre */

export const sobre = {
  seo: {
    title: "Sobre a MCM | Nossa equipe e forma de trabalhar",
    description:
      "Conheça a MCM, suas três frentes de atuação e a equipe que conduz o atendimento em seguros, planejamento patrimonial e crédito.",
  },
  a01: {
    identificador: "Sobre a MCM",
    h1: "Uma equipe para cuidar das decisões que envolvem seu patrimônio.",
    texto:
      "A MCM atua em seguros, planejamento patrimonial e crédito. Reunimos essas frentes para ajudar você a entender as alternativas e organizar os passos de cada decisão.",
  },
  a02: {
    h2: "Três frentes que acompanham diferentes momentos da sua vida.",
    texto:
      "Proteger a família, construir patrimônio e adquirir um bem são objetivos que podem acontecer ao mesmo tempo. A MCM organiza o atendimento em três frentes, conectadas pelo conhecimento da sua situação e dos seus planos.",
    frentes: [
      { nome: "MCM Seguros", texto: "proteção da saúde, da renda, da família e dos bens.", href: "/seguros" },
      { nome: "MCM Partners", texto: "planejamento e alternativas de construção patrimonial.", href: "/partners" },
      { nome: "MCM Capital", texto: "análise de crédito e aquisição planejada.", href: "/capital" },
    ],
  },
  a03: {
    h2: "Quem conduz a MCM.",
    perfis: [
      {
        nome: "Mário Mello",
        cargo: "Fundador e CEO",
        bio: "Conduz a direção da MCM e participa da construção das estratégias para os clientes. Sua experiência no mercado financeiro contribui para a análise das alternativas em patrimônio, proteção e crédito.",
      },
      {
        nome: "Emilly Mello",
        cargo: "Sócia e Diretora de Operações",
        bio: "Conduz a organização das operações e o acompanhamento das etapas do atendimento. Atua na formalização dos contratos, no financeiro e na coordenação das entregas da MCM.",
      },
    ],
  },
  a04: {
    h2: "O que orienta nosso atendimento.",
    compromissos: [
      {
        titulo: "Clareza para escolher",
        texto: "Explicamos as alternativas, seus custos, condições e pontos de atenção.",
      },
      {
        titulo: "Planejamento com contexto",
        texto: "Consideramos seus objetivos e compromissos ao avaliar cada solução.",
      },
      {
        titulo: "Apoio nos próximos passos",
        texto: "Organizamos o acompanhamento e as responsabilidades dentro do escopo combinado.",
      },
    ],
  },
  a05: {
    h2: "Como o trabalho acontece.",
    etapas: [
      {
        titulo: "Entender",
        texto: "A conversa inicial identifica seu objetivo e as informações necessárias para a análise.",
      },
      {
        titulo: "Planejar",
        texto: "As alternativas são avaliadas com seus custos, prazos, riscos e condições.",
      },
      {
        titulo: "Implementar",
        texto: "Após sua escolha, a equipe orienta as etapas e a documentação da solução.",
      },
      {
        titulo: "Acompanhar",
        texto:
          "O acompanhamento segue o escopo combinado e considera mudanças que possam exigir uma revisão.",
      },
    ] satisfies Passo[],
    apoio:
      "Atividades jurídicas, contábeis e outras especialidades são executadas pelos profissionais habilitados responsáveis por cada serviço.",
  },
  a06: {
    h2: "Conheça a MCM a partir dos seus planos.",
    texto:
      "Entre em contato para apresentar sua necessidade e entender como nossa equipe pode ajudar.",
    cta: { label: "Fale com a MCM", href: "/contato" },
  } satisfies Fechamento,
};

/* ----------------------------------------------------------------- Contato */

export type Frente = "seguros" | "partners" | "capital" | "nao-sei";

export const contato = {
  seo: {
    title: "Contato MCM | Converse sobre seguros, patrimônio e crédito",
    description:
      "Fale com a equipe da MCM sobre seguros, planejamento patrimonial ou crédito. Escolha a frente do seu interesse ou peça ajuda para começar.",
  },
  t01: {
    identificador: "Contato",
    h1: "Conte o que você precisa. Vamos começar por aí.",
    texto:
      "Você pode procurar a MCM para cuidar da sua proteção, planejar seu patrimônio ou avaliar crédito. Se ainda não sabe qual frente escolher, nossa equipe ajuda a identificar o caminho.",
  },
  t02: {
    h2: "Sobre o que você quer conversar?",
    opcoes: [
      { valor: "seguros", label: "MCM Seguros - saúde, vida e bens", resumo: "saúde, vida e bens" },
      {
        valor: "partners",
        label: "MCM Partners - planejamento e patrimônio",
        resumo: "planejamento e patrimônio",
      },
      {
        valor: "capital",
        label: "MCM Capital - crédito e aquisição planejada",
        resumo: "crédito e aquisição planejada",
      },
      { valor: "nao-sei", label: "Ainda não sei - quero orientação", resumo: "orientação para começar" },
    ] as { valor: Frente; label: string; resumo: string }[],
  },
  t03: {
    h2: "Prefere conversar pelo WhatsApp?",
    texto: "Envie uma mensagem para nossa equipe com o assunto que você deseja tratar.",
    cta: "Abra uma conversa no WhatsApp",
  },
  t04: {
    h2: "Ou deixe seu contato.",
    texto: "Preencha os campos abaixo para que a equipe possa retornar sua mensagem.",
    campos: {
      nome: { label: "Nome", exemplo: "Como podemos chamar você?" },
      telefone: { label: "WhatsApp com DDD", exemplo: "(00) 00000-0000" },
      assunto: { label: "Assunto" },
      mensagem: {
        label: "O que você gostaria de conversar? (opcional)",
        exemplo: "Conte brevemente seu objetivo. Deixe documentos e dados financeiros para o atendimento.",
      },
    },
    privacidade: "Usaremos os dados enviados para responder à sua solicitação.",
    privacidadeLink: "Saiba mais na Política de Privacidade.",
    cta: "Envie sua mensagem",
    enderecoTitulo: "Onde estamos",
  },
  t05: {
    h2: "O que acontece na primeira conversa?",
    texto:
      "A equipe entende sua necessidade, identifica a frente adequada e explica quais informações serão necessárias para seguir. Condições, etapas e eventual custo do atendimento são apresentados antes da contratação.",
  },
};

/* Lista permitida de assuntos (CTAs das soluções -> /contato?frente=...&assunto=...). */
export const assuntos: Record<string, { frente: Exclude<Frente, "nao-sei">; solucao: string }> = {
  "plano-de-saude": { frente: "seguros", solucao: "planos de saúde" },
  "seguros-em-vida": { frente: "seguros", solucao: "seguros em vida" },
  "seguro-de-vida": { frente: "seguros", solucao: "seguro de vida" },
  "seguros-patrimoniais": { frente: "seguros", solucao: "seguros patrimoniais" },
  "mercado-financeiro": { frente: "partners", solucao: "mercado financeiro" },
  "consorcio-patrimonial": { frente: "partners", solucao: "consórcio na construção patrimonial" },
  "imoveis-para-renda": { frente: "partners", solucao: "imóveis para renda" },
  "financiamento-imobiliario": { frente: "capital", solucao: "financiamento imobiliário" },
  "home-equity": { frente: "capital", solucao: "crédito com garantia de imóvel (home equity)" },
  "consorcio-aquisicao": { frente: "capital", solucao: "consórcio para aquisição planejada" },
};

export const estados = {
  nomeVazio: "Informe seu nome.",
  telefoneInvalido: "Informe um telefone válido com DDD.",
  assuntoAusente: "Escolha um assunto ou selecione “Ainda não sei”.",
  enviando: "Enviando sua mensagem...",
  sucesso: {
    titulo: "Mensagem enviada.",
    apoio: "A equipe da MCM recebeu seu contato e vai responder pelo canal informado.",
    link: "Volte ao início",
  },
  falha: {
    titulo: "Não foi possível enviar sua mensagem.",
    apoio: "Tente novamente ou fale com a MCM pelo WhatsApp. Os campos preenchidos foram mantidos.",
    botao: "Tente novamente",
    alternativa: "Abra uma conversa no WhatsApp",
  },
  semConexao: "Verifique sua conexão e tente novamente.",
  naoEncontrada: {
    titulo: "Não encontramos esta página.",
    texto: "Você pode voltar ao início ou conhecer uma das três frentes da MCM.",
    links: [
      { label: "Volte ao início", href: "/" },
      { label: "MCM Seguros", href: "/seguros" },
      { label: "MCM Partners", href: "/partners" },
      { label: "MCM Capital", href: "/capital" },
    ] as Link[],
  },
  erroSite: {
    titulo: "Esta página não carregou.",
    texto: "Tente novamente. Se precisar, entre em contato com a MCM pelo WhatsApp.",
    botao: "Tente novamente",
  },
};

export const whatsappTextos = {
  geral: (assunto: string) =>
    `Olá! Gostaria de conhecer as soluções da MCM. Meu interesse é: ${assunto}.`,
  frente: (nome: string, solucao: string) =>
    `Olá! Gostaria de conversar com a ${nome} sobre ${solucao}.`,
};

/* -------------------------------------------------------------- Privacidade */

// MINUTA CONDICIONADA: os campos entre colchetes dependem da operação real e da revisão da MCM.
export const privacidade = {
  seo: {
    title: "Política de Privacidade | MCM",
    description:
      "Saiba como os dados de contato enviados à MCM são utilizados e como solicitar informações sobre o tratamento das suas informações.",
  },
  h1: "Política de Privacidade",
  introducao:
    "Esta política explica como a MCM utiliza as informações enviadas pelos canais de contato deste site.",
  data: "Última atualização: [data de publicação aprovada].",
  secoes: [
    {
      h2: "Quem é responsável pelos seus dados",
      texto:
        "[Razão social da empresa responsável], inscrita no CNPJ sob o número [CNPJ], é responsável pelo tratamento dos dados coletados neste site. Para questões sobre privacidade, entre em contato pelo canal [canal de privacidade confirmado].",
    },
    {
      h2: "Quais informações recebemos",
      texto:
        "Ao preencher o formulário, você informa seu nome, telefone, assunto de interesse e, se desejar, uma mensagem. Ao entrar em contato por outros canais, recebemos as informações que você enviar por esses serviços.",
    },
    {
      h2: "Como utilizamos as informações",
      texto:
        "Utilizamos as informações para responder à sua solicitação, direcionar o atendimento à frente adequada e dar continuidade à conversa iniciada por você. [Informar as bases legais e as demais finalidades efetivamente adotadas.]",
    },
    {
      h2: "Com quem as informações podem ser compartilhadas",
      texto:
        "[Identificar os prestadores que operam o formulário, o armazenamento e o atendimento, as finalidades do compartilhamento e eventual transferência internacional. Descrever quando houver encaminhamento autorizado para instituições parceiras.]",
    },
    {
      h2: "Por quanto tempo mantemos as informações",
      texto:
        "[Descrever os prazos ou critérios reais de conservação, a exclusão e os períodos de retenção necessários para cumprir obrigações aplicáveis.]",
    },
    {
      h2: "Como cuidamos das informações",
      texto:
        "[Descrever as medidas de proteção e controle de acesso efetivamente adotadas, sem prometer segurança absoluta.]",
    },
    {
      h2: "Como fazer uma solicitação sobre seus dados",
      texto:
        "Entre em contato pelo canal [canal de privacidade confirmado] para solicitar informações sobre o tratamento dos seus dados ou exercer os direitos aplicáveis. Poderemos pedir informações para confirmar sua identidade e proteger seus dados.",
    },
    {
      h2: "Cookies e serviços externos",
      texto:
        "[Informar as tecnologias instaladas, seus responsáveis e finalidades, além das opções de escolha quando aplicáveis. Se houver links para WhatsApp, Instagram ou outros serviços, informar que esses serviços possuem suas próprias políticas.]",
    },
    {
      h2: "Atualizações desta política",
      texto:
        "Esta política poderá ser atualizada para refletir mudanças no site ou nas práticas de tratamento de dados. A data da versão vigente estará indicada nesta página.",
    },
  ],
};
