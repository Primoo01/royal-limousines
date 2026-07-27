import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.limousinesroyal.com.br',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // /lp-limousine/ tem canonical apontando para / (é a landing dos
      // anúncios). Não faz sentido pedir pro Google indexar as duas como
      // páginas distintas, então ela fica de fora do sitemap.
      filter: (page) => !page.endsWith('/lp-limousine/'),
    }),
  ],
});
