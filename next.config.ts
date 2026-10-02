import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirecionamentos para a substituição do site antigo.
  async redirects() {
    return [
      { source: "/o-que-executamos", destination: "/", permanent: true },
      { source: "/a-primeira-conversa", destination: "/contato", permanent: true },
      { source: "/de-onde-viemos", destination: "/sobre", permanent: true },
    ];
  },
};

export default nextConfig;
