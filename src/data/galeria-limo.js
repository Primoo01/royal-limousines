// Fotos da limousine Chrysler 300C branca para o carrossel da home
// (ver CLAUDE.md > Carrossel de fotos). Fonte: pasta Images-limo/ na raiz do
// projeto — TODAS as fotos de lá entram aqui, nenhuma fica de fora.
//
// import.meta.glob com caminho absoluto a partir da raiz do Vite resolve
// arquivos fora de src/, do mesmo jeito que limousines.astro já fazia para
// as fotos do sedan em src/assets/sedan-preto.
//
// Os alt foram escritos ABRINDO cada foto e olhando, não deduzidos do nome
// do arquivo. Se trocar um arquivo, abra a foto nova e confira o texto.
const imagens = import.meta.glob('/Images-limo/*.{jpg,jpeg,png}', { eager: true });

function arquivo(nome) {
  const chave = Object.keys(imagens).find((caminho) => caminho.endsWith(`/${nome}`));
  if (!chave) throw new Error(`Foto não encontrada em Images-limo: ${nome}`);
  return imagens[chave].default;
}

export const fotosGaleriaLimo = [
  {
    imagem: arquivo('tres-quartos-frontal.jpg'),
    alt: 'Limousine Chrysler 300C branca em três quartos, parada na entrada de um salão de eventos ao anoitecer',
    posicao: 'center bottom',
  },
  {
    imagem: arquivo('tres-quartos-frontal-dark.jpg'),
    alt: 'Limousine Chrysler 300C branca à noite, com os faróis acesos, em frente a um prédio histórico iluminado',
  },
  {
    imagem: arquivo('tres-quartos-frontal-dark-2.jpg'),
    alt: 'Limousine Chrysler 300C branca em três quartos, sob iluminação noturna',
  },
  {
    imagem: arquivo('IMG_0247.jpg'),
    alt: 'Limousine Chrysler 300C branca estacionada à noite na entrada de um edifício, com manobrista ao fundo',
  },
  {
    imagem: arquivo('Pasted-2.jpg'),
    alt: 'Limousine Chrysler 300C branca em três quartos, estacionada em frente a um edifício histórico',
  },
  {
    imagem: arquivo('frontal.jpg'),
    alt: 'Limousine Chrysler 300C branca vista de frente',
  },
  {
    imagem: arquivo('lateral.jpg'),
    alt: 'Limousine Chrysler 300C branca de lateral, com o comprimento inteiro no quadro',
  },
  {
    imagem: arquivo('tres-quartos-traseira.jpg'),
    alt: 'Limousine Chrysler 300C branca vista de traseira em três quartos',
  },
  {
    imagem: arquivo('tres-quartos-traseira-2.jpg'),
    alt: 'Limousine Chrysler 300C branca vista de traseira em três quartos, ao entardecer, em frente a um espaço de eventos',
  },
  {
    imagem: arquivo('Casamento1.jpeg'),
    alt: 'Noivos ao lado da limousine Chrysler 300C branca durante uma cerimônia de casamento ao ar livre',
  },
  {
    imagem: arquivo('casamento2.jpeg'),
    alt: 'Noivos abraçados em frente à limousine Chrysler 300C branca, momentos antes da cerimônia',
  },
  {
    imagem: arquivo('interna.png'),
    alt: 'Interior da limousine Chrysler 300C branca, com bar, taças, bancos em couro claro e iluminação de festa em LED',
  },
];

export default fotosGaleriaLimo;
