import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Container, FaixaFinal, Section, Steps, TextLink } from "@/components/ui";
import { inicio } from "@/lib/content";
import { imagens, visuaisFrente } from "@/lib/visual";
import { paginaMetadata } from "@/lib/seo";
export const metadata: Metadata = paginaMetadata("/", inicio.seo);

export default function Inicio() {
  const { h01,h02,h03,h04,h05,h06,h07 } = inicio;
  const [primeiraParte, segundaParte] = h01.h1.split(", ");
  const visuals = [visuaisFrente.seguros,visuaisFrente.partners,visuaisFrente.capital];
  return <>
    <section data-bloco="H01" className="home-hero">
      <Image src={imagens.horizonte.src} alt="" fill preload sizes="100vw" className="hero-photo" />
      <div className="home-hero-content">
        <p className="eyebrow">Proteção. Patrimônio. Possibilidades.</p>
        <h1>{primeiraParte},<span>{segundaParte}</span></h1>
        <p className="hero-description">{h01.texto}</p>
        <div className="hero-actions"><TextLink href={h01.ctaPrincipal.href}>{h01.ctaPrincipal.label}</TextLink><Link href={h01.ctaSecundario.href} className="arrow-link">{h01.ctaSecundario.label}<Arrow /></Link></div>
      </div>
      <div className="hero-footer"><p>Um olhar para o que vem depois.</p><nav aria-label="Conheça as frentes" className="hero-footer-center"><Link href="/seguros">Seguros</Link><Link href="/partners">Partners</Link><Link href="/capital">Capital</Link></nav><a className="hero-scroll" href="#ponto-de-partida">Explore a MCM <span aria-hidden="true">→</span></a></div>
    </section>
    <section id="ponto-de-partida" data-bloco="H02" aria-labelledby="h02-titulo" className="editorial-section bg-background">
      <Container className="section-inner"><div className="section-kicker"><p className="eyebrow">O ponto de partida</p><span className="section-index" aria-hidden="true">01 / Seu momento</span></div><div className="problem-layout"><div className="problem-intro" data-reveal><h2 id="h02-titulo">{h02.h2}</h2><p>{h02.texto}</p></div><div data-reveal><ol className="problem-list">{h02.situacoes.map((s,i)=><li key={s.titulo} className="problem-item"><span aria-hidden="true">{String(i+1).padStart(2,"0")}</span><div><h3>{s.titulo}</h3><p>{s.texto}</p></div></li>)}</ol><p className="problem-conclusion">{h02.conclusao}</p></div></div></Container>
    </section>
    <div className="method-scene"><Section bloco="H03" tom="escuro" titulo={h03.h2}><Steps passos={h03.etapas} escuro /></Section></div>
    <section id="frentes" data-bloco="H04" aria-labelledby="h04-titulo" className="editorial-section">
      <div className="fronts-intro" data-reveal><p className="eyebrow">Três frentes. Uma visão.</p><h2 id="h04-titulo">{h04.h2}</h2><p>{h04.introducao}</p></div>
      <ul>{h04.cartoes.map((c,i)=>{const visual=visuals[i];return <li key={c.titulo} className={`front-scene front-${visual.tom} ${i===1?"reverse":""}`}><Image src={visual.src} alt="" fill sizes="100vw" className="hero-photo" /><Container><div className="front-scene-copy" data-reveal><p className="eyebrow">MCM / {visual.numero}</p><h3><span className="sr-only">MCM </span>{visual.palavra}</h3><p className="front-benefit">{c.chamada}</p><p className="front-description">{c.texto}</p><TextLink href={c.link.href}>{c.link.label}</TextLink></div></Container><span className="front-scene-count" aria-hidden="true">{visual.numero} / 03</span></li>})}</ul>
    </section>
    <Section bloco="H05" titulo={h05.h2}><ul className="situation-list">{h05.situacoes.map((s,i)=><li key={s.link.href}><span className="item-number" aria-hidden="true">0{i+1}</span><p className="item-text">{s.texto}</p><TextLink href={s.link.href}>{s.link.label}</TextLink></li>)}</ul><p className="mt-8 max-w-2xl text-sm text-navy/70">{h05.apoio}</p></Section>
    <section data-bloco="H06" aria-labelledby="h06-titulo" className="institutional-scene"><div className="institutional-photo"><Image src={imagens.arquitetura.src} alt={imagens.arquitetura.alt} fill sizes="(max-width: 600px) 100vw, 50vw" /></div><div className="institutional-copy" data-reveal><span className="eyebrow">Pessoas. Propósito. MCM.</span><h2 id="h06-titulo">{h06.h2}</h2><p>{h06.texto}</p><TextLink href={h06.link.href}>{h06.link.label}</TextLink></div></section>
    <FaixaFinal bloco="H07" dados={h07} />
  </>;
}
