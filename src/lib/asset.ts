// Prefixo de caminho para hospedagens em subpasta (ex.: GitHub Pages em /site-mcm). Vazio no uso normal.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (caminho: string) => `${basePath}${caminho}`;
