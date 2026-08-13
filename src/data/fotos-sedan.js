// Fotos do Chrysler 300C preto (o sedan) usadas FORA do carrossel, em um
// lugar só. Simétrico a fotos-limo.js — o carrossel continua em
// galeria-sedan.js, e as duas leem a MESMA pasta (src/assets/sedan-preto/).
//
// Regra que vale aqui como lá: não pode existir uma segunda cópia das mesmas
// fotos, porque foi isso que uma vez fez o site servir foto velha depois de a
// origem ser atualizada.
//
// A resolução é por NOME BASE, sem extensão: as fotos de origem trocam de
// formato (.jpg / .jpeg / .png) e isso não pode quebrar o build.
import { porNome } from './midia.js';

const arquivos = import.meta.glob('/src/assets/sedan-preto/*.{jpg,jpeg,png,webp}', { eager: true });
const foto = (nome) => porNome(arquivos, nome, 'src/assets/sedan-preto');

export const fotosSedan = {
  // O SEDAN NO HERO DA HOME, no seletor de dois carros.
  //
  // É a única foto do acervo do sedan que não é retrato: 820x954 (0.86),
  // contra 0.56 das outras oito. Foi ela que tornou o seletor possível — um
  // retrato 0.56 recortado para a caixa 1.30 do desktop perderia 57% da
  // altura e decapitaria o carro.
  //
  // LIMITAÇÃO ACEITA PELO CLIENTE: 820x954 é metade da resolução do resto do
  // acervo (as outras são 1536x2730; a limousine do hero é 1600x720 e
  // 720x1600). Em DPR 2 o navegador amplia ~1.8x, e em DPR 3 ~2.6x — e o slot
  // do mobile é a viewport inteira, que é onde mais aparece. A foto passou por
  // tratamento de cor e filtros que não existem no original de 10 MB, e o
  // cliente preferiu manter esta versão. Não "corrija" trocando pelo original.
  //
  // O alt foi escrito ABRINDO a foto: garagem de concreto, luz de fim de
  // tarde, três quartos traseira.
  heroGaragem: {
    src: foto('tres-quartos-traseira-garagem'),
    alt: 'Chrysler 300C preto visto de trás em três quartos, estacionado em uma garagem de concreto ao fim da tarde',
  },
};

export default fotosSedan;
