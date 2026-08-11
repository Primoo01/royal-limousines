import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.limousinesroyal.com.br',
  trailingSlash: 'always',
  build: {
    // As folhas eram 4 <link rel="stylesheet"> externos e bloqueantes: o CSS
    // ficava pronto em ~455ms, mas o first-paint só vinha em 1300ms no
    // mobile (4G lento, CPU 4x). Inlinadas, o primeiro paint não espera
    // round-trip nenhum. São 63,7 KB no total, e cada página carrega só o
    // subconjunto dela — o custo é perder o cache de CSS entre páginas, o
    // que pesa pouco aqui: o tráfego vem do Google Ads e da busca, quase
    // sempre em visita de uma página só.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // /lp-limousine/ é a landing dos anúncios e nunca foi indexada: leva
      // `noindex, follow`, NÃO leva canonical nenhum, e fica fora do sitemap
      // (CLAUDE.md > Mapa de páginas). Verificado no build: é a única das 14
      // sem <link rel="canonical">, e a única com <meta name="robots">.
      //
      // O comentário anterior aqui dizia que ela tinha canonical apontando
      // para / — nunca teve. Era a descrição que estava errada, não o código.
      filter: (page) => !page.endsWith('/lp-limousine/'),
    }),
  ],
});
