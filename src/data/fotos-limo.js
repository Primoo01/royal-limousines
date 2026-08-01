// Fotos reais do Chrysler 300C branco (a limousine), em um lugar só.
//
// Centralizado de propósito (CLAUDE.md > Imagens): trocar uma foto por outra
// é mudar um import aqui, não caçar caminho em oito páginas.
//
// As duas versões "dark" são do MUNDO ESCURO (hero da home, hero da LP,
// painéis escuros do menu). As demais são do MUNDO CLARO. Isso é o conceito
// de dois mundos do projeto, não preferência estética.
import tresQuartosFrontal from '../assets/limo/tres-quartos-frontal.jpg';
import tresQuartosFrontalDark from '../assets/limo/tres-quartos-frontal-dark.jpg';
import tresQuartosFrontalDark2 from '../assets/limo/tres-quartos-frontal-dark-2.jpg';
import tresQuartosTraseira from '../assets/limo/tres-quartos-traseira.jpg';
import lateral from '../assets/limo/lateral.jpg';
import interna from '../assets/limo/interna.jpg';
import frontal from '../assets/limo/frontal.jpg';

// Os alt abaixo foram escritos ABRINDO cada foto e olhando, não deduzidos do
// nome do arquivo. Todas são a limousine ESTICADA (não o sedan).
export const fotosLimo = {
  tresQuartosFrontal: {
    src: tresQuartosFrontal,
    alt: 'Limousine Chrysler 300C branca em três quartos, parada na entrada de um salão de eventos ao anoitecer',
  },
  tresQuartosFrontalDark: {
    src: tresQuartosFrontalDark,
    alt: 'Limousine Chrysler 300C branca à noite, com os faróis acesos, em frente a um prédio histórico iluminado',
  },
  tresQuartosFrontalDark2: {
    src: tresQuartosFrontalDark2,
    alt: 'Limousine Chrysler 300C branca em três quartos, sob iluminação noturna',
  },
  tresQuartosTraseira: {
    src: tresQuartosTraseira,
    alt: 'Limousine Chrysler 300C branca vista de traseira em três quartos',
  },
  lateral: {
    src: lateral,
    alt: 'Limousine Chrysler 300C branca de lateral, com o comprimento inteiro no quadro',
  },
  interna: {
    src: interna,
    alt: 'Interior da limousine Chrysler 300C branca, com bar, taças, bancos em couro claro e iluminação de festa em LED',
  },
  frontal: {
    src: frontal,
    alt: 'Limousine Chrysler 300C branca vista de frente',
  },
};

export default fotosLimo;
