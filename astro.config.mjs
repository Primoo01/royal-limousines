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
    //
    // TESTADO E REJEITADO: uma folha externa única (`never` mais
    // `vite.build.cssCodeSplit: false`). Ela zera o CLS, mas cobra o
    // first-paint em toda página. Medido com n=10, 390px, Fast 3G + CPU 4x, e
    // COM GZIP nos dois lados:
    //
    //                  inline           1 folha externa
    //   /              FCP  704ms       FCP 1040ms   CLS 0,0000 -> 0,0000
    //   /limousines/   FCP  704ms       FCP 1000ms   CLS 0,0000 -> 0,0000
    //   /lp-limousine/ FCP  708ms       FCP 1024ms   CLS 0,0427 -> 0,0297
    //   /empresa/      FCP  560ms       FCP  940ms   CLS 0,0136 -> 0,0000
    //
    // Trocar ~300-380ms de first-paint em TODA página por 0,013 de CLS numa
    // página noindex é prejuízo. O inline fica.
    //
    // ARMADILHA DE MEDIÇÃO, e é por isso que este bloco existe: sem gzip, o
    // HTML inline vai a 112 KB e chega em ~180 pedaços de 1500 bytes, o
    // navegador faz layout com as seções pela metade, e o CLS da
    // /lp-limousine/ dispara para 0,1653 intermitente. Com gzip ele cai a 24
    // KB e o CLS estabiliza em 0,0427. O `http-server` NÃO comprime; a Vercel
    // e a Cloudflare comprimem. Medir sem gzip aqui inventa um defeito que o
    // visitante nunca vê, e foi exatamente o que aconteceu numa rodada de
    // diagnóstico. Use o servidor com gzip.
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
