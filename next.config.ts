import type { NextConfig } from "next";

// GITHUB_PAGES=1: exportação estática para o GitHub Pages (subpasta /site-mcm, sem servidor).
// O workflow remove src/app/api antes do build, pois rotas de API não existem em site estático.
const pages = process.env.GITHUB_PAGES === "1";
const basePath = pages ? "/site-mcm" : "";

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(pages
    ? { output: "export", basePath, trailingSlash: true, images: { unoptimized: true } }
    : {
        // Redirecionamentos para a substituição do site antigo.
        async redirects() {
          return [
            { source: "/o-que-executamos", destination: "/", permanent: true },
            { source: "/a-primeira-conversa", destination: "/contato", permanent: true },
            { source: "/de-onde-viemos", destination: "/sobre", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
