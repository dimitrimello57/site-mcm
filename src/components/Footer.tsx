import Image from "next/image";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { Container } from "@/components/ui";
import { compartilhado,contatoInfo } from "@/lib/content";
import { mostrarPrivacidade } from "@/lib/env";
import { frentesFooter,whatsappUrl } from "@/lib/site";
export function Footer(){return <footer className="site-footer"><Container><div className="footer-top"><div className="footer-brand"><Image src={asset("/logo-mcm-branca.svg")} alt="MCM" width={720} height={269} unoptimized className="h-auto w-[102px]"/><p>{compartilhado.rodape.assinatura}</p></div><nav aria-label="Nossas frentes"><h2>Nossas frentes</h2><ul>{frentesFooter.map(f=><li key={f.href}><Link href={f.href}>{f.label}</Link></li>)}</ul></nav><nav aria-label="A MCM"><h2>A MCM</h2><ul><li><Link href="/sobre">Sobre a MCM</Link></li><li><Link href="/contato">Contato</Link></li>{mostrarPrivacidade&&<li><Link href="/privacidade">Privacidade</Link></li>}</ul></nav><div className="footer-contact"><h2>Uma conversa pode ser o começo.</h2><ul><li><a href={whatsappUrl(contatoInfo.whatsapp,"Olá! Gostaria de conhecer a MCM.")} target="_blank" rel="noopener noreferrer">{contatoInfo.telefone}<span className="sr-only"> (abre em nova aba)</span></a></li><li><a href={`mailto:${contatoInfo.email}`}>{contatoInfo.email}</a></li></ul><address>{contatoInfo.endereco}</address></div></div><div className="footer-bottom"><p>{compartilhado.rodape.aviso}</p><p>© {new Date().getFullYear()} MCM.</p></div></Container></footer>}
