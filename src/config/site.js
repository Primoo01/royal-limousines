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
    { rotulo: 'Frota', href: '/limousines/' },
    { rotulo: 'Serviços', href: '/servicos/' },
    { rotulo: 'Empresa', href: '/empresa/' },
    { rotulo: 'Contato', href: '/contato/' },
  ],

  cta: {
    orcamento: 'Solicitar orçamento',
    whatsapp: 'Falar no WhatsApp',
  },

  seo: {
    // OVERRIDE MANUAL do og:image de todo o site. `null` NÃO significa mais
    // "sem og:image": o padrão é gerado no BaseLayout, recortando a foto do
    // hero da home para 1200x630 (o formato que Facebook e WhatsApp esperam).
    // Ele não pode morar aqui porque esse recorte exige o astro:assets, que só
    // funciona dentro de componente.
    //
    // Preencha isto apenas para apontar um arquivo pronto — caminho absoluto a
    // partir da raiz do site, ex. '/og-royal.jpg' em public/. Uma página
    // isolada pode passar `ogImage` direto no BaseLayout.
    imagemPadrao: null,
  },
};

export default site;
