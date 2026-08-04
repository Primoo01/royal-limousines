// Vídeos 360 — um por página (ver CLAUDE.md > Vídeos 360).
//
// Centralizado como o resto da mídia: trocar um vídeo é mudar o caminho
// aqui, não caçar referência em duas páginas.
//
// O MP4 mora em public/ (o astro:assets não processa vídeo, então o arquivo
// é servido como está). O POSTER mora em src/assets pra passar pelo
// astro:assets e sair em WebP, como manda o orçamento de imagem.
//
// `largura` e `altura` são as dimensões REAIS do arquivo. É delas que sai o
// aspect-ratio do corte de 35% do topo — ver Video360.astro.
import posterLimo from '../assets/videos/limo-360-poster.jpg';
import posterSedan from '../assets/videos/sedan-360-poster.jpg';

export const videos360 = {
  limo: {
    src: '/videos/limo-360.mp4',
    poster: posterLimo,
    largura: 1440,
    altura: 720,
    alt: 'Volta de 360 graus em torno da limousine Chrysler 300C branca, com os faróis acesos ao entardecer',
  },
  sedan: {
    src: '/videos/sedan-360.mp4',
    poster: posterSedan,
    largura: 1440,
    altura: 720,
    alt: 'Volta de 360 graus em torno do Chrysler 300C preto, com os faróis acesos ao entardecer',
  },
};

export default videos360;
