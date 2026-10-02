import { estados, type Frente } from "./content";

export type DadosContato = { nome: string; telefone: string; assunto: Frente | ""; mensagem: string };
export type ErrosContato = Partial<Record<"nome" | "telefone" | "assunto", string>>;

const frentesValidas: Frente[] = ["seguros", "partners", "capital", "nao-sei"];

// Aceita DDD + número (10 ou 11 dígitos), com ou sem +55.
export function telefoneValido(valor: string) {
  let digitos = valor.replace(/\D/g, "");
  if (digitos.length >= 12 && digitos.startsWith("55")) digitos = digitos.slice(2);
  if (digitos.length !== 10 && digitos.length !== 11) return false;
  if (Number(digitos.slice(0, 2)) < 11) return false;
  if (digitos.length === 11 && digitos[2] !== "9") return false;
  return true;
}

export function validarContato(d: DadosContato):
  | { ok: true; valores: DadosContato }
  | { ok: false; erros: ErrosContato } {
  const erros: ErrosContato = {};
  const nome = d.nome.trim();
  const mensagem = d.mensagem.trim().slice(0, 1000);
  if (!nome || nome.length > 120) erros.nome = estados.nomeVazio;
  if (!telefoneValido(d.telefone)) erros.telefone = estados.telefoneInvalido;
  if (!frentesValidas.includes(d.assunto as Frente)) erros.assunto = estados.assuntoAusente;
  if (Object.keys(erros).length > 0) return { ok: false, erros };
  return { ok: true, valores: { nome, telefone: d.telefone.trim(), assunto: d.assunto, mensagem } };
}
