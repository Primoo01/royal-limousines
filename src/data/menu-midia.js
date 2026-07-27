// Mídia do painel esquerdo do menu (ver CLAUDE.md > Navegação).
// Uma entrada por GRUPO do menu (não por cada uma das 8 páginas de
// serviço/região — "grupo" aqui é a coluna: Frota, Serviços, Casamentos por
// região, A Royal, mais Início e Contato).
//
// Enquanto `src` for null, o painel mostra uma textura CSS abstrata (gradiente
// + leve movimento) usando o tom indicado em `tom`. Quando a mídia real
// chegar, preencha `src` (e `poster`, se for vídeo) — nada de markup muda.
//
// tipo: 'imagem' | 'video'
// tom: só usado enquanto `src` for null — controla o gradiente placeholder.

export const menuMidia = {
  padrao: {
    tipo: 'imagem',
    src: null,
    poster: null,
    tom: 'champagne',
    alt: 'Textura abstrata dourada',
  },
  inicio: {
    tipo: 'imagem',
    src: null,
    poster: null,
    tom: 'aurora',
    alt: 'Luz quente abstrata',
  },
  frota: {
    tipo: 'imagem',
    src: null,
    poster: null,
    tom: 'grafite',
    alt: 'Reflexo metálico abstrato, tom frio',
  },
  servicos: {
    tipo: 'imagem',
    src: null,
    poster: null,
    tom: 'linho',
    alt: 'Textura têxtil abstrata, tom claro',
  },
  regiao: {
    tipo: 'imagem',
    src: null,
    poster: null,
    tom: 'ambar',
    alt: 'Luz âmbar abstrata em movimento',
  },
  royal: {
    tipo: 'imagem',
    src: null,
    poster: null,
    tom: 'carvao',
    alt: 'Textura escura abstrata, tom carvão',
  },
  contato: {
    tipo: 'imagem',
    src: null,
    poster: null,
    tom: 'aurora',
    alt: 'Luz quente abstrata',
  },
};

export default menuMidia;
