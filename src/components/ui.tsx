import Image from "next/image";
import Link from "next/link";
import type { Card, Faq, Fechamento, Hero, Passo } from "@/lib/content";
import { visuaisFrente } from "@/lib/visual";

export function Arrow({ className = "" }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.25" /></svg>;
}
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`editorial-container mx-auto w-full ${className}`}>{children}</div>;
}
const tons = { claro: "bg-background text-navy", areia: "bg-sand text-navy", escuro: "bg-navy text-sand" };
const labels: Record<string,string> = { H02:"O ponto de partida", H03:"Nosso método", H05:"Seu momento", S02:"Proteção em cada dimensão", S03:"Sua vida muda", S04:"Como trabalhamos", S05:"Perguntas frequentes", P02:"Antes de escolher", P03:"Caminhos possíveis", P04:"Decisões com contexto", P05:"Frentes conectadas", P06:"Perguntas frequentes", C02:"Possibilidades de crédito", C03:"Uma escolha informada", C04:"Como trabalhamos", C05:"Perguntas frequentes", A02:"Uma visão integrada", A03:"Quem conduz a MCM", A04:"Nossos compromissos", A05:"Nosso método", T05:"A primeira conversa" };
export function Section({ id, bloco, tom = "claro", titulo, children }: { id?: string; bloco: string; tom?: keyof typeof tons; titulo: string; children: React.ReactNode }) {
  const tituloId = `${bloco.toLowerCase()}-titulo`;
  return <section id={id} data-bloco={bloco} aria-labelledby={tituloId} className={`editorial-section ${tons[tom]}`}><Container className="section-inner"><div data-reveal><div className="section-kicker"><p className="eyebrow">{labels[bloco] ?? "MCM"}</p><span className="section-index" aria-hidden="true">MCM / {String(parseInt(bloco.slice(1),10)).padStart(2,"0")}</span></div><h2 id={tituloId} className="section-title">{titulo}</h2></div><div className="section-body" data-reveal>{children}</div></Container></section>;
}
export function ButtonLink({ href, children, variante = "primario", className = "" }: { href: string; children: React.ReactNode; variante?: "primario" | "secundario" | "contorno"; className?: string }) {
  const style = {primario:"button-primary",secundario:"button-secondary",contorno:"button-outline"};
  return <Link href={href} className={`button-link ${style[variante]} ${className}`}>{children}<Arrow /></Link>;
}
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="arrow-link"><span>{children}</span><span className="arrow-circle"><Arrow /></span></Link>;
}
export function Breadcrumb({ pagina }: { pagina: string }) {
  return <nav aria-label="Você está em" className="breadcrumb"><Container><ol><li><Link href="/">Início</Link></li><li aria-hidden="true">/</li><li aria-current="page">{pagina}</li></ol></Container></nav>;
}
export function EditorialHero({ bloco, identificador, titulo, texto, imagem }: { bloco: string; identificador: string; titulo: string; texto: string; imagem: string }) {
  return <section data-bloco={bloco} className="front-hero"><Image src={imagem} alt="" fill preload sizes="100vw" className="hero-photo" /><Container><div className="front-hero-copy"><p className="eyebrow">{identificador}</p><h1>{titulo}</h1><p>{texto}</p></div></Container></section>;
}
export function HeroFrente({ bloco, hero, children }: { bloco: string; hero: Hero; children?: React.ReactNode }) {
  const key = hero.identificador.includes("Seguros") ? "seguros" : hero.identificador.includes("Capital") ? "capital" : "partners";
  const image = visuaisFrente[key];
  return <section data-bloco={bloco} className={`front-hero front-${image.tom}`}><Image src={image.src} alt="" fill preload sizes="100vw" className="hero-photo" /><Container><div className="front-hero-copy"><p className="eyebrow">{hero.identificador} / {image.numero}</p><h1>{hero.h1}</h1><p>{hero.texto}</p><ButtonLink href={hero.cta.href}>{hero.cta.label}</ButtonLink>{children}</div></Container></section>;
}
export function CardGrid({ cartoes }: { cartoes: Card[]; colunas?: 2 | 3 }) {
  return <ul className="service-list">{cartoes.map((card,i)=><li key={card.titulo} className="service-row" data-reveal><span className="service-number" aria-hidden="true">{String(i+1).padStart(2,"0")}</span><h3>{card.titulo}</h3><div className="service-description"><p>{card.texto}</p>{card.condicao&&<p className="service-condition">{card.condicao}</p>}<TextLink href={card.link.href}>{card.link.label}</TextLink></div></li>)}</ul>;
}
export function Steps({ passos, escuro = false }: { passos: Passo[]; escuro?: boolean }) {
  return <ol className={`steps ${escuro ? "steps-dark" : ""}`}>{passos.map((step,i)=><li key={i} className="step"><span className="step-number" aria-hidden="true">{String(i+1).padStart(2,"0")}</span>{step.titulo&&<h3>{step.titulo}</h3>}<p>{step.texto}</p></li>)}</ol>;
}
export function Accordion({ itens }: { itens: Faq[] }) {
  return <div className="accordion">{itens.map(item=><details key={item.pergunta}><summary><h3>{item.pergunta}</h3><span aria-hidden="true">+</span></summary><p>{item.resposta}</p></details>)}</div>;
}
export function FaixaFinal({ bloco, dados }: { bloco: string; dados: Fechamento }) {
  const id = `${bloco.toLowerCase()}-titulo`;
  return <section data-bloco={bloco} aria-labelledby={id} className="closing"><Container className="closing-inner"><div data-reveal><span className="eyebrow text-gold-light">O próximo passo é seu</span><h2 id={id}>{dados.h2}</h2><p>{dados.texto}</p><ButtonLink href={dados.cta.href}>{dados.cta.label}</ButtonLink>{dados.condicao&&<p className="closing-condition">{dados.condicao}</p>}</div></Container></section>;
}
