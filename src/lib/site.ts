export const navegacao = [
  { href: "/", label: "Início" },
  { href: "/seguros", label: "Seguros" },
  { href: "/partners", label: "Partners" },
  { href: "/capital", label: "Capital" },
  { href: "/sobre", label: "Sobre a MCM" },
];

export const frentesFooter = [
  { href: "/seguros", label: "MCM Seguros" },
  { href: "/partners", label: "MCM Partners" },
  { href: "/capital", label: "MCM Capital" },
];

export function whatsappUrl(numero: string, mensagem: string) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
