// Mídia do painel esquerdo do menu (ver CLAUDE.md > Navegação).
// Uma entrada por item principal da lista vertical do menu: Início, Frota,
// Serviços, A Royal, Contato (as páginas de casamento por região não têm
// grupo próprio — não aparecem no menu, só no rodapé).
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
