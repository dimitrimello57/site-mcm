# Pendências antes da publicação

Status: preview para validação. Nada aqui foi aprovado pela MCM. Fonte: `conteudo/MCM_Copy_Wireframes_v1.md`.

## Bloqueia a publicação

- **Formulário:** não há destino de entrega. Em produção ele só aparece quando `CONTACT_WEBHOOK_URL` está configurada; sem ela, só o WhatsApp é exibido. Definir o destino, testar o recebimento e definir o tratamento dos dados.
- **Política de Privacidade (`/privacidade`):** minuta com campos entre colchetes (controlador, CNPJ, bases legais, fornecedores, retenção, cookies, canal de privacidade). Só é exibida no preview (`NEXT_PUBLIC_PREVIEW=1`); em produção a rota responde 404 e o link some do rodapé. Completar e aprovar antes de publicar, e antes de ligar o formulário.
- **Domínio de produção:** `NEXT_PUBLIC_SITE_URL` ainda não definido. Sem ele não há canônico nem sitemap.
- **Identificação da empresa:** razão social, CNPJ e registros aplicáveis (Seguros e Crédito) não constam no rodapé; entram depois de confirmados.

## A confirmar com a MCM

- Telefone/WhatsApp (82) 9 9122-3900, e-mail adm@mcmcapital.com.br e endereço: vieram do site antigo.
- Nomes, cargos e biografias de Mário Mello e Emilly Mello.
- Portfólio: todos os produtos citados são oferecidos? Escopo da MCM como intermediária (Seguros e Capital) e da Partners (investimentos, parceiros habilitados).
- Etapas de atendimento, acompanhamento, custos e responsabilidades.
- Identidade visual: azul e dourado são referência, não identidade aprovada. Logos e paleta a confirmar.
- Fotos reais da equipe (Início H06, Sobre A03) e imagens de contexto das frentes: nenhuma foi usada, pois não há imagens aprovadas.
- Aprovação do wireframe (ordem dos blocos, navegação, fluxo celular).

## Não incluído de propósito

R$ 1 bi, 450 famílias, 10 anos, MDRT, depoimentos, parceiros, logos de seguradoras, taxas, projeções e números do estudo patrimonial.

## Variáveis de ambiente

Ver `.env.example`.
