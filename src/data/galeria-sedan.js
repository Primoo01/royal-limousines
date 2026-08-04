// Fotos do Chrysler 300C preto (sedan) para o carrossel da seção dele em
// /limousines/ (ver CLAUDE.md > Carrossel de fotos). Fonte: pasta
// Images/300sedan na raiz do projeto — TODAS as fotos de lá entram aqui.
//
// Substitui o lote antigo, curado, que morava em src/assets/sedan-preto
// (ver histórico em sedan.js) — este é mais recente e completo.
//
// Os alt foram escritos ABRINDO cada foto e olhando, não deduzidos do nome
// do arquivo. Ordem: exteriores primeiro, interior por último.
// Resolução por NOME BASE, sem extensão — mesma razão de galeria-limo.js:
// trocar o formato do arquivo na origem não pode quebrar o build.
import { porNome } from './midia.js';

const imagens = import.meta.glob('/Images/300sedan/*.{jpg,jpeg,png,webp}', { eager: true });
const arquivo = (nome) => porNome(imagens, nome, 'Images/300sedan');

export const fotosGaleriaSedan = [
  {
    imagem: arquivo('frontal'),
    alt: 'Chrysler 300C preto visto de frente, com a placa Royal Limousines',
  },
  {
    imagem: arquivo('tres-quartos-frontal'),
    alt: 'Chrysler 300C preto visto de frente em três quartos, estacionado em uma rua residencial',
  },
  {
    imagem: arquivo('tres-quartos-traseira'),
    alt: 'Chrysler 300C preto visto de traseira em três quartos',
  },
  {
    imagem: arquivo('traseira'),
    alt: 'Chrysler 300C preto visto de traseira, com a placa Royal Limousines',
  },
  {
    imagem: arquivo('Interna-fora-direita'),
    alt: 'Interior do Chrysler 300C preto visto pela porta traseira direita aberta, banco em couro claro e teto solar',
  },
  {
    imagem: arquivo('interna-fora-esquerda'),
    alt: 'Interior do Chrysler 300C preto visto pela porta traseira esquerda aberta, banco em couro claro e teto solar',
  },
  {
    imagem: arquivo('Interna-fora-motorista'),
    alt: 'Painel e volante do Chrysler 300C preto, com acabamento em madeira e console central',
  },
  {
    imagem: arquivo('Interna-tras'),
    alt: 'Interior do Chrysler 300C preto visto do banco traseiro, com o teto solar aberto',
  },
];

export default fotosGaleriaSedan;
