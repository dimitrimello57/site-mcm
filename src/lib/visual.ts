// Fotografias editoriais, não representam clientes, imóveis ou equipe da MCM.
// Origem e créditos: docs/direcao-visual.md.
export const imagens = {
  horizonte: { src: "/images/horizonte.webp", alt: "Falésias verdes e o horizonte do mar, fotografados do alto" },
  familia: { src: "/images/familia.webp", alt: "Família caminhando à beira-mar ao entardecer" },
  arquitetura: { src: "/images/arquitetura.webp", alt: "Arquitetura residencial contemporânea entre árvores" },
};

export const visuaisFrente = {
  seguros: { ...imagens.familia, palavra: "Seguros", numero: "01", tom: "protecao" },
  partners: { ...imagens.horizonte, palavra: "Partners", numero: "02", tom: "patrimonio" },
  capital: { ...imagens.arquitetura, palavra: "Capital", numero: "03", tom: "credito" },
};
