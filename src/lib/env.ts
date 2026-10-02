// NEXT_PUBLIC_PREVIEW=1 marca o deploy como preview: noindex, formulário de demonstração e
// minuta da política de privacidade visíveis. Em produção (sem a variável) nada disso aparece.
export const isPreview = process.env.NEXT_PUBLIC_PREVIEW === "1";

// Domínio de produção confirmado. Sem ele, não geramos canônico nem sitemap.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

// O formulário só existe em produção se houver um destino real configurado (ver /api/contato).
export const formularioConfigurado = Boolean(process.env.CONTACT_WEBHOOK_URL);
export const mostrarFormulario = isPreview || formularioConfigurado;

// A minuta de privacidade tem campos pendentes e não pode ser publicada.
export const mostrarPrivacidade = isPreview;
