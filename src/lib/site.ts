export type Frente = {
  slug: "seguros" | "partners" | "capital";
  nome: string;
  eixo: string;
  resumo: string;
};

export const frentes: Frente[] = [
  {
    slug: "seguros",
    nome: "MCM Seguros",
    eixo: "Proteção",
    resumo: "Proteção da renda, da família e dos bens.",
  },
  {
    slug: "partners",
    nome: "MCM Partners",
    eixo: "Rentabilidade",
    resumo: "Planejamento, investimentos e construção patrimonial.",
  },
  {
    slug: "capital",
    nome: "MCM Capital",
    eixo: "Crédito",
    resumo: "Financiamento imobiliário, home equity e soluções de crédito.",
  },
];

export const navegacao = [
  { href: "/", label: "Início" },
  ...frentes.map((f) => ({ href: `/${f.slug}`, label: f.nome })),
  { href: "/sobre", label: "Sobre a MCM" },
  { href: "/contato", label: "Contato" },
];
