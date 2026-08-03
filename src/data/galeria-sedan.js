// Fotos do Chrysler 300C preto (sedan) para o carrossel da seção dele em
// /limousines/ (ver CLAUDE.md > Carrossel de fotos). Fonte: pasta
// Images/300sedan na raiz do projeto — TODAS as fotos de lá entram aqui.
//
// Substitui o lote antigo, curado, que morava em src/assets/sedan-preto
// (ver histórico em sedan.js) — este é mais recente e completo.
//
// Os alt foram escritos ABRINDO cada foto e olhando, não deduzidos do nome
// do arquivo. Ordem: exteriores primeiro, interior por último.
const imagens = import.meta.glob('/Images/300sedan/*.{jpg,jpeg,png}', { eager: true });

function arquivo(nome) {
  const chave = Object.keys(imagens).find((caminho) => caminho.endsWith(`/${nome}`));
  if (!chave) throw new Error(`Foto não encontrada em Images/300sedan: ${nome}`);
  return imagens[chave].default;
}

export const fotosGaleriaSedan = [
  {
    imagem: arquivo('frontal.png'),
    alt: 'Chrysler 300C preto visto de frente, com a placa Royal Limousines',
  },
  {
    imagem: arquivo('tres-quartos-frontal.png'),
    alt: 'Chrysler 300C preto visto de frente em três quartos, estacionado em uma rua residencial',
  },
  {
    imagem: arquivo('tres-quartos-traseira.png'),
    alt: 'Chrysler 300C preto visto de traseira em três quartos',
  },
  {
    imagem: arquivo('traseira.png'),
    alt: 'Chrysler 300C preto visto de traseira, com a placa Royal Limousines',
  },
  {
    imagem: arquivo('Interna-fora-direita.jpeg'),
    alt: 'Interior do Chrysler 300C preto visto pela porta traseira direita aberta, banco em couro claro e teto solar',
  },
  {
    imagem: arquivo('interna-fora-esquerda.jpeg'),
    alt: 'Interior do Chrysler 300C preto visto pela porta traseira esquerda aberta, banco em couro claro e teto solar',
  },
  {
    imagem: arquivo('Interna-fora-motorista.jpeg'),
    alt: 'Painel e volante do Chrysler 300C preto, com acabamento em madeira e console central',
  },
  {
    imagem: arquivo('Interna-tras.jpeg'),
    alt: 'Interior do Chrysler 300C preto visto do banco traseiro, com o teto solar aberto',
  },
];

export default fotosGaleriaSedan;
