"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect,useRef,useState } from "react";
import { compartilhado } from "@/lib/content";
import { navegacao } from "@/lib/site";
import { Arrow } from "@/components/ui";

export function Header() {
  const pathname=usePathname();
  const [abertoEm,setAbertoEm]=useState<string|null>(null);
  const [scrolled,setScrolled]=useState(false);
  const aberto=abertoEm===pathname;
  const buttonRef=useRef<HTMLButtonElement>(null);
  const panelRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>60);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll);},[]);
  useEffect(()=>{
    if(!aberto)return;
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow="hidden";
    const links=()=>Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a[href],button")??[]);
    links()[0]?.focus();
    function onKey(event:KeyboardEvent){
      if(event.key==="Escape"){setAbertoEm(null);buttonRef.current?.focus();return;}
      if(event.key!=="Tab")return;
      const items=[buttonRef.current!,...links()];const first=items[0],last=items[items.length-1];
      const index=items.indexOf(document.activeElement as HTMLElement);
      event.preventDefault();
      const nextIndex=event.shiftKey?(index<=0?items.length-1:index-1):(index+1)%items.length;
      (items[nextIndex]??first??last).focus();
    }
    document.addEventListener("keydown",onKey);
    return()=>{document.body.style.overflow=previousOverflow;document.removeEventListener("keydown",onKey);};
  },[aberto]);
  const current=(href:string)=>href==="/"?pathname==="/":pathname.startsWith(href);
  // Simple utility pages need an opaque header even before scrolling.
  const opaque=pathname==="/privacidade";
  return <header className={`site-header ${scrolled||opaque?"is-scrolled":""} ${aberto?"is-open":""}`}>
    <div className="header-inner"><button ref={buttonRef} className="header-menu-button" type="button" aria-expanded={aberto} aria-controls="menu-mcm" aria-label={aberto?compartilhado.fecharMenu:compartilhado.abrirMenu} onClick={()=>setAbertoEm(aberto?null:pathname)}><span className="menu-icon" aria-hidden="true"/><span>{aberto?"Fechar":"Menu"}</span></button><Link href="/" className="header-brand" aria-label="MCM - Início"><Image src="/logo-mcm-branca.svg" alt="" width={720} height={269} priority unoptimized className="h-auto w-[74px] sm:w-[106px]"/></Link><Link href="/contato" className="header-contact"><span className="contact-desktop">{compartilhado.botaoTopo}</span><span className="contact-mobile sm:hidden">Contato</span><Arrow /></Link></div>
    <div id="menu-mcm" hidden={!aberto} ref={panelRef} className="header-menu-panel"><div className="menu-content"><nav aria-label="Principal"><ul className="menu-links">{navegacao.map(item=><li key={item.href}><Link href={item.href} aria-current={current(item.href)?"page":undefined} onClick={()=>setAbertoEm(null)}>{item.label}<span aria-hidden="true">→</span></Link></li>)}<li><Link href="/contato" onClick={()=>setAbertoEm(null)}>Fale com a MCM<span aria-hidden="true">→</span></Link></li></ul></nav><div className="menu-aside"><p className="eyebrow">Uma visão para cada etapa</p><p>{compartilhado.rodape.empresa}</p></div></div></div>
  </header>;
}

