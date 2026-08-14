// Configuração central do site. Contatos e textos globais em um único lugar —
// trocar telefone, WhatsApp, e-mail ou textos de CTA aqui reflete no site inteiro.

export const site = {
  nome: 'Royal Limousines',
  descricaoCurta: 'Aluguel de limousine para casamentos e eventos em São Paulo.',
  url: 'https://www.limousinesroyal.com.br',
  idioma: 'pt-BR',
  localeOg: 'pt_BR',

  contato: {
    telefone: {
      exibicao: '(11) 2295-3870',
      link: 'tel:+551122953870',
    },
    whatsapp: {
      exibicao: '(11) 99913-0498',
      numero: '5511999130498',
      // Sem mensagem pré-preenchida: o WhatsApp Business do cliente já tem
      // robô automático de atendimento.
      link: 'https://wa.me/5511999130498',
    },
    email: 'contato@limousinesroyal.com.br',
    areaAtendida: 'São Paulo e região',
  },

  // Menu enxuto — só as páginas fixas de navegação principal.
  // As páginas de serviço/região ranqueiam via busca orgânica e Google Ads,
  // não precisam estar no menu do topo.
  navegacao: [
    { rotulo: 'Início', href: '/' },
    { rotulo: 'Nossos carros', href: '/limousines/' },
    { rotulo: 'Serviços', href: '/servicos/' },
    { rotulo: 'Empresa', href: '/empresa/' },
    { rotulo: 'Contato', href: '/contato/' },
  ],

  cta: {
    orcamento: 'Solicitar orçamento',
    whatsapp: 'Falar no WhatsApp',
  },

  seo: {
    // OG:IMAGE DO SITE INTEIRO — 1200x630, o formato que Facebook e WhatsApp
    // esperam. Fonte: src/assets/limo/Casamento1.jpg (a foto do hero da home,
    // única paisagem larga do conjunto — as outras são retrato e a caixa
    // 1200x630 decapitaria o carro).
    //
    // MORA EM public/ E NÃO EM src/assets/, de propósito: prévia de link
    // precisa de URL estável. Um derivado do astro:assets carrega hash no
    // nome, e o hash muda quando a foto de origem muda — todo link já
    // compartilhado no WhatsApp passaria a apontar para um arquivo que não
    // existe mais. Em public/ o caminho é literal e sobrevive a rebuilds.
    //
    // Gerada com sharp: fit 'cover', position sharp.strategy.attention,
    // jpeg({ quality: 95, mozjpeg: true }) = 296 KB. O 95 é o teto abaixo de
    // 300 KB; 96 salta para 342 KB. JPEG e não WebP porque o scraper do
    // WhatsApp trata WebP de forma inconsistente.
    //
    // Para REGERAR depois de trocar a foto de origem, repita exatamente esses
    // parâmetros — e confira o recorte com o olho antes de commitar, porque o
    // `attention` decide sozinho onde cortar.
    imagemPadrao: '/og-royal.jpg',
    imagemPadraoLargura: 1200,
    imagemPadraoAltura: 630,
    imagemPadraoTipo: 'image/jpeg',
    // Descreve o RECORTE que foi para o arquivo, não a foto inteira.
    imagemPadraoAlt:
      'Noivos ao lado da limousine Chrysler 300C branca em festa de casamento ao ar livre em São Paulo',
  },
};

export default site;
