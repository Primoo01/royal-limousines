// Fotos reais do Chrysler 300C branco (a limousine), em um lugar só.
//
// Centralizado de propósito (CLAUDE.md > Imagens): trocar uma foto por outra
// é mudar um nome aqui, não caçar caminho em oito páginas.
//
// FONTE ÚNICA: lê direto da pasta Images-limo/ na raiz, a mesma que o
// carrossel usa (ver galeria-limo.js). Antes havia uma segunda cópia em
// src/assets/limo — e foi ela que fez o site continuar servindo foto velha
// depois que a origem foi atualizada. Cópia paralela sempre desanda; agora
// não existe mais.
//
// A resolução é por NOME BASE, sem extensão: as fotos de origem trocam de
// formato (.jpg / .jpeg / .png) e isso não pode quebrar o build.
//
// As duas versões "dark" são do MUNDO ESCURO (hero da home, hero da LP,
// painéis escuros do menu). As demais são do MUNDO CLARO. Isso é o conceito
// de dois mundos do projeto, não preferência estética.
import { porNome } from './midia.js';

const arquivos = import.meta.glob('/Images-limo/*.{jpg,jpeg,png,webp}', { eager: true });
const foto = (nome) => porNome(arquivos, nome, 'Images-limo');

// Os alt abaixo foram escritos ABRINDO cada foto e olhando, não deduzidos do
// nome do arquivo. Todas são a limousine ESTICADA (não o sedan).
export const fotosLimo = {
  // `posicao: 'center bottom'` em quase todas: o recorte central cortava a
  // base do carro (rodas e frente ficavam fora). Ancorando embaixo, a base
  // da foto encosta na base do contêiner e o carro aparece inteiro. A
  // propriedade viaja COM a foto, não com o espaço — vale em todos os
  // lugares onde ela entra, inclusive no carrossel e na /servicos/.
  tresQuartosFrontal: {
    src: foto('tres-quartos-frontal'),
    alt: 'Limousine Chrysler 300C branca em três quartos, parada na entrada de um salão de eventos ao anoitecer',
    posicao: 'center bottom',
  },
  tresQuartosFrontalDark: {
    src: foto('tres-quartos-frontal-dark'),
    alt: 'Limousine Chrysler 300C branca à noite, com os faróis acesos, em frente a um prédio histórico iluminado',
    posicao: 'center bottom',
  },
  // Foto do hero da home. É a única PAISAGEM larga do conjunto (1600x720,
  // proporção 2.22) entrando num contêiner retrato de 4/5 — o `cover`
  // preserva só 36% da largura, então o recorte NÃO pode ser central.
  //
  // Os 17% foram medidos, não estimados: com o casal em x≈175–500 e a
  // frente do carro em x≈420–870, é o único valor em que os dois cabem
  // inteiros nas três larguras. Em 25% o buquê da noiva começa a sair;
  // em 10% perde-se o farol direito.
  casamentoNoivos: {
    src: foto('Casamento1'),
    alt: 'Noivos ao lado da limousine Chrysler 300C branca em festa de casamento ao ar livre em São Paulo',
    posicao: '17% center',
  },
  tresQuartosFrontalDark2: {
    src: foto('tres-quartos-frontal-dark-2'),
    alt: 'Limousine Chrysler 300C branca em três quartos, sob iluminação noturna',
    posicao: 'center bottom',
  },
  tresQuartosTraseira: {
    src: foto('tres-quartos-traseira'),
    alt: 'Limousine Chrysler 300C branca vista de traseira em três quartos',
    posicao: 'center bottom',
  },
  lateral: {
    src: foto('lateral'),
    alt: 'Limousine Chrysler 300C branca de lateral, com o comprimento inteiro no quadro',
    posicao: 'center bottom',
  },
  interna: {
    src: foto('interna'),
    alt: 'Interior da limousine Chrysler 300C branca, com bar, taças, bancos em couro claro e iluminação de festa em LED',
  },
  frontal: {
    src: foto('frontal'),
    alt: 'Limousine Chrysler 300C branca vista de frente',
  },
};

export default fotosLimo;
