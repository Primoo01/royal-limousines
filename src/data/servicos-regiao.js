// Dados das 8 páginas de serviço/região. Um template só (src/pages/[pagina].astro)
// lê este arquivo pelos slugs exatos do Mapa de páginas do CLAUDE.md.
//
// Todo texto abaixo vem literalmente de src/data/paginas-antigas.json
// (backup do site antigo), só reorganizado em campos para o template renderizar
// como seções (parágrafos de abertura / diferenciais em lista / bloco de fechamento).
// Nada foi reescrito ou inventado. Único ajuste de conteúdo datado: nenhum destes
// textos tinha "Promoção 2017" ou ano antigo — não precisou de limpeza aqui.

export const servicosRegiao = [
  {
    slug: 'aluguel-de-limousines-para-casamentos-em-sp',
    categoria: 'casamento',
    menuLabel: 'Casamentos em SP',
    title:
      'Aluguel de Limousines para Casamentos em SP | Limousines para Casamentos SP |Aluguel de Limousines para Casamentos na Zona Sul | Zona Norte | Zona Leste | Zona Oeste',
    description:
      'Procurando por Aluguel de Limousines para Casamentos em SP? Case com Glamour com a Royal. Aluguel de Limousines para Casamentos em SP é só aqui. Ligue já.',
    h1: 'Aluguel de Limousines para Casamentos em SP',
    h2: 'Aluguel de Limousines para Casamentos SP',
    abertura: [
      'Somos especializados em aluguel de limousines para casamentos.',
      'Para uma data inesquecível, não pode faltar uma apresentação inesquecível. A Royal Limousines possui luxuosas e confortáveis limousines para você celebrar e ter uma entrada deslumbrante.',
      'Deixe o seu casamento ainda mais completo com a Royal Limousines.',
    ],
    disponibilidade: 'Disponível para a noiva desde o salão de beleza até o fim do evento:',
    diferenciais: [
      'Conforto e Segurança',
      'Credibilidade e Garantia',
      'Placa Personalizada',
      'Ambiente personalizado',
      'Decoração diferenciada',
      'Como Cortesia oferecemos água, refrigerante, Champagne sem álcool e bombons finos',
    ],
    fechamento: [
      'Para clientes que exigem modernidade associada ao luxo e conforto que só uma limousine pode oferecer.',
      'Nossa empresa oferece os melhores serviços de aluguel de limousines de SP.',
      'Precisando fazer locação de limousine em SP?',
      'Contrate uma empresa especializada! Entre em contato com a Royal Limousines e confira os nossos serviços e preços!',
      'Com uma equipe de atendimento 24hrs por dia, 7 dias por semana, para que você possa contratar, faça o seu orçamento hoje mesmo!',
    ],
    fraseTelefone: 'Para saber mais sobre aluguel de limousines em SP, ligue para (11) 2295-3870 ou para (11) 99913-0498.',
    imagens: [
      { arquivo: 'Wedding-Limo-Image.jpg', rotulo: 'Limousine Royal na chegada da noiva' },
      { arquivo: '6957459_orig.jpg', rotulo: 'Detalhe do casamento com a Limousine Royal' },
    ],
  },
  {
    slug: 'aluguel-de-limousines-para-casamentos-na-zona-leste',
    categoria: 'casamento',
    menuLabel: 'Zona Leste',
    title:
      'Aluguel de Limousines para Casamentos na Zona Leste | Aluguel de Limousines para Casamentos no Tatuapé | Aluguel de Limousines na Zona Leste, Mooca, Carrão, Penha, Vila Matilde, Tatuapé, Anália Franco',
    description:
      'Aluguel de Limousines para Casamentos na Zona Leste é só na Royal. Carros exclusivos, preço justo. Aluguel de Limousines para Casamentos na Zona Leste,Ligue',
    h1: 'Aluguel de Limousines para Casamentos na Zona Leste',
    h2: 'Aluguel de Limousines para Casamentos Zona Leste',
    abertura: [
      'Somos especializados em aluguel de limousines para casamentos na Zona Leste.',
      'Para uma data inesquecível, não pode faltar uma apresentação inesquecível. A Royal Limousines possui luxuosas e confortáveis limousines para você celebrar e ter uma entrada deslumbrante.',
      'Deixe o seu casamento ainda mais completo com a Royal Limousines.',
    ],
    disponibilidade: 'Disponível para a noiva desde o salão de beleza até o fim do evento:',
    diferenciais: [
      'Conforto e Segurança',
      'Credibilidade e Garantia',
      'Placa Personalizada',
      'Ambiente personalizado',
      'Decoração diferenciada',
      'Como Cortesia oferecemos água, refrigerante, Champagne sem álcool e bombons finos',
    ],
    fechamento: [
      'Para clientes que exigem modernidade associada ao luxo e conforto que só uma limousine pode oferecer.',
      'Nossa empresa oferece os melhores serviços de aluguel de limousines na Zona Leste.',
      'Precisando fazer locação de limousine na Zona Leste?',
      'Contrate uma empresa especializada! Entre em contato com a Royal Limousines e confira os nossos serviços e preços!',
      'Com uma equipe de atendimento 24hrs por dia, 7 dias por semana, para que você possa contratar, faça o seu orçamento hoje mesmo!',
    ],
    fraseTelefone: 'Para saber mais sobre aluguel de limousines na Zona Leste, ligue para (11) 2295-3870 ou para (11) 99913-0498.',
    imagens: [
      { arquivo: 'Wedding-Limo-Image.jpg', rotulo: 'Limousine Royal na chegada da noiva' },
      { arquivo: '6957459_orig.jpg', rotulo: 'Detalhe do casamento com a Limousine Royal' },
    ],
  },
  {
    slug: 'aluguel-de-limousines-para-casamentos-na-zona-norte',
    categoria: 'casamento',
    menuLabel: 'Zona Norte',
    title: 'Aluguel de Limousines para Casamentos na Zona Norte – Limousine Royal',
    // O backup não tinha description aqui. Escrita a partir do texto real
    // desta página (conforto e segurança, placa personalizada, contato).
    description:
      'Aluguel de limousines para casamentos na Zona Norte de SP: conforto, segurança e placa personalizada, com a Royal Limousines. Ligue e solicite orçamento.',
    h1: 'Aluguel de Limousines para Casamentos na Zona Norte',
    h2: 'Aluguel de Limousines para Casamentos Zona Norte',
    abertura: [
      'Somos especializados em aluguel de limousines para casamentos na Zona Norte.',
      'Para uma data inesquecível, não pode faltar uma apresentação inesquecível. A Royal Limousines possui luxuosas e confortáveis limousines para você celebrar e ter uma entrada deslumbrante.',
      'Deixe o seu casamento ainda mais completo com a Royal Limousines.',
    ],
    disponibilidade: 'Disponível para a noiva desde o salão de beleza até o fim do evento:',
    diferenciais: [
      'Conforto e Segurança',
      'Credibilidade e Garantia',
      'Placa Personalizada',
      'Ambiente personalizado',
      'Decoração diferenciada',
      'Como Cortesia oferecemos água, refrigerante, Champagne sem álcool e bombons finos',
    ],
    fechamento: [
      'Para clientes que exigem modernidade associada ao luxo e conforto que só uma limousine pode oferecer.',
      'Nossa empresa oferece os melhores serviços de aluguel de limousines na Zona Norte.',
      'Precisando fazer locação de limousine na Zona Norte?',
      'Contrate uma empresa especializada! Entre em contato com a Royal Limousines e confira os nossos serviços e preços!',
      'Com uma equipe de atendimento 24hrs por dia, 7 dias por semana, para que você possa contratar, faça o seu orçamento hoje mesmo!',
    ],
    fraseTelefone: 'Para saber mais sobre aluguel de limousines na Zona Norte, ligue para (11) 2295-3870 ou para (11) 99913-0498.',
    imagens: [
      { arquivo: 'Wedding-Limo-Image.jpg', rotulo: 'Limousine Royal na chegada da noiva' },
      { arquivo: '6957459_orig.jpg', rotulo: 'Detalhe do casamento com a Limousine Royal' },
    ],
  },
  {
    slug: 'aluguel-de-limousines-para-casamentos-na-zona-oeste',
    categoria: 'casamento',
    menuLabel: 'Zona Oeste',
    title:
      'Aluguel de Limousines para Casamentos na Zona Oeste | Aluguel de Limousines para Casamentos em Perdizes, Pompéia, Sumaré, Pinheiros, Vila Madalena, Butantã. SP',
    description:
      'Aluguel de Limousines para Casamentos na Zona Oeste é na Royal. Case com Glamour! Lmousines Lindas. Aluguel de Limousines para Casamentos na Zona Oeste.',
    h1: 'Aluguel de Limousines para Casamentos na Zona Oeste',
    h2: 'Aluguel de Limousines para Casamentos Zona Oeste',
    abertura: [
      'Somos especializados em aluguel de limousines para casamentos na Zona Oeste.',
      'Para uma data inesquecível, não pode faltar uma apresentação inesquecível. A Royal Limousines possui luxuosas e confortáveis limousines para você celebrar e ter uma entrada deslumbrante.',
      'Deixe o seu casamento ainda mais completo com a Royal Limousines.',
    ],
    disponibilidade: 'Disponível para a noiva desde o salão de beleza até o fim do evento:',
    diferenciais: [
      'Conforto e Segurança',
      'Credibilidade e Garantia',
      'Placa Personalizada',
      'Ambiente personalizado',
      'Decoração diferenciada',
      'Como Cortesia oferecemos água, refrigerante, Champagne sem álcool e bombons finos',
    ],
    fechamento: [
      'Para clientes que exigem modernidade associada ao luxo e conforto que só uma limousine pode oferecer.',
      'Nossa empresa oferece os melhores serviços de aluguel de limousines na Zona Oeste.',
      'Precisando fazer locação de limousine na Zona Oeste?',
      'Contrate uma empresa especializada! Entre em contato com a Royal Limousines e confira os nossos serviços e preços!',
      'Com uma equipe de atendimento 24hrs por dia, 7 dias por semana, para que você possa contratar, faça o seu orçamento hoje mesmo!',
    ],
    fraseTelefone: 'Para saber mais sobre aluguel de limousines na Zona Oeste, ligue para (11) 2295-3870 ou para (11) 99913-0498.',
    imagens: [
      { arquivo: 'Wedding-Limo-Image.jpg', rotulo: 'Limousine Royal na chegada da noiva' },
      { arquivo: '6957459_orig.jpg', rotulo: 'Detalhe do casamento com a Limousine Royal' },
    ],
  },
  {
    slug: 'aluguel-de-limousines-para-casamentos-na-zona-sul',
    categoria: 'casamento',
    menuLabel: 'Zona Sul',
    title:
      'Aluguel de Limousines para Casamentos na Zona Sul | Limousines para Casamentos na Zona Sul, SP | Morumbi,Brooklin, Campo Belo, Moema, Ibirapuera, Vila Nova Conceição, Vila Mariana.',
    description:
      'Procurando por Aluguel de Limousines para Casamentos na Zona Sul? Ligue Já! Somos especializados em Aluguel de Limousines para Casamentos na Zona Sul e região.',
    h1: 'Aluguel de Limousines para Casamentos na Zona Sul',
    h2: 'Aluguel de Limousines para Casamentos Zona Sul',
    abertura: [
      'Somos especializados em aluguel de limousines para casamentos na Zona Sul.',
      'Para uma data inesquecível, não pode faltar uma apresentação inesquecível. A Royal Limousines possui luxuosas e confortáveis limousines para você celebrar e ter uma entrada deslumbrante.',
      'Deixe o seu casamento ainda mais completo com a Royal Limousines.',
    ],
    disponibilidade: 'Disponível para a noiva desde o salão de beleza até o fim do evento:',
    diferenciais: [
      'Conforto e Segurança',
      'Credibilidade e Garantia',
      'Placa Personalizada',
      'Ambiente personalizado',
      'Decoração diferenciada',
      'Como Cortesia oferecemos água, refrigerante, Champagne sem álcool e bombons finos',
    ],
    fechamento: [
      'Para clientes que exigem modernidade associada ao luxo e conforto que só uma limousine pode oferecer.',
      'Nossa empresa oferece os melhores serviços de aluguel de limousines na Zona Sul.',
      'Precisando fazer locação de limousine na Zona Sul?',
      'Contrate uma empresa especializada! Entre em contato com a Royal Limousines e confira os nossos serviços e preços!',
      'Com uma equipe de atendimento 24hrs por dia, 7 dias por semana, para que você possa contratar, faça o seu orçamento hoje mesmo!',
    ],
    fraseTelefone: 'Para saber mais sobre aluguel de limousines na Zona Sul, ligue para (11) 2295-3870 ou para (11) 99913-0498.',
    imagens: [
      { arquivo: 'Wedding-Limo-Image.jpg', rotulo: 'Limousine Royal na chegada da noiva' },
      { arquivo: '6957459_orig.jpg', rotulo: 'Detalhe do casamento com a Limousine Royal' },
    ],
  },
  {
    slug: 'aluguel-de-limousines-para-debutantes-em-sp',
    categoria: 'evento',
    menuLabel: 'Debutantes',
    title:
      'Aluguel de Limousines para Debutantes em SP | Aluguel de Limousines para Debutantes em São Paulo| Limousines para Debutantes em SP | Limousines em São Paulo.',
    description:
      'Procurando por Aluguel de Limousines para Debutantes em SP? Entre e acesse o nosso site. Somos líderes em Aluguel de Limousines para Debutantes em SP.',
    h1: 'Aluguel de Limousines para Debutantes em SP',
    h2: 'Aluguel de Limousines para Debutantes SP',
    abertura: [
      'Somos especializados em aluguel de limousines para debutantes em SP.',
      'Para uma data inesquecível, não pode faltar uma apresentação inesquecível. A Royal Limousines possui luxuosas e confortáveis limousines para você celebrar e ter uma entrada deslumbrante.',
      'Deixe sua festa ainda mais completa com a Royal Limousines.',
    ],
    disponibilidade: null,
    diferenciais: [
      '2 horas de muita alegria e celebração',
      'Pacotes e condições especiais para eventos de segunda a sexta',
      'Infraestrutura de multimídia moderna (áudio e vídeo)',
      'Como cortesia oferecemos água, refrigerante, Champagne sem álcool e bombons finos',
    ],
    fechamento: [
      'Para clientes que exigem modernidade associada ao luxo e conforto que só uma limousine pode oferecer.',
      'Nossa empresa oferece os melhores serviços de aluguel de limousines para debutantes em SP.',
      'Precisando fazer aluguel de limousines para debutantes em SP?',
      'Contrate uma empresa especializada! Entre em contato com a Royal Limousines e confira os nossos serviços e preços!',
      'Com uma equipe de atendimento 24hrs por dia, 7 dias por semana, para que você possa contratar, faça o seu orçamento hoje mesmo!',
    ],
    fraseTelefone: 'Para saber mais sobre aluguel de limousines para debutantes em SP, ligue para (11) 2295-3870 ou para (11) 99913-0498.',
    imagens: [
      { arquivo: 'Women-in-Limo.jpg', rotulo: 'Limousine Royal em festa de debutante' },
      { arquivo: 'limo-girls.jpg', rotulo: 'Limousine Royal com a debutante e as convidadas' },
    ],
  },
  {
    slug: 'limousines-para-aniversarios-em-sp',
    categoria: 'evento',
    menuLabel: 'Aniversários',
    title:
      'Limousines para aniversários em SP | Aluguel de Limousines para aniversários em SP | Alugar Limousines para aniversários | Limousines para aniversários, Eventos em SP | Limousines para aniversários na Zona Sul, Zona Norte, Zona Leste, Zona Oeste, Guarulhos.',
    description:
      'Procurando uma Limousines para aniversários em SP? Entre em contato com a Royal Limousines. 8 anos de Mercado. Limousines para aniversários em SP. Ligue',
    h1: 'Limousines para aniversários em SP',
    h2: 'Limousines para aniversários em SP',
    abertura: [
      'Somos especializados em Limousines para aniversários em SP.',
      'Para uma data inesquecível, não pode faltar uma apresentação inesquecível. A Royal Limousines possui luxuosas e confortáveis limousines para você celebrar e ter uma entrada deslumbrante.',
      'Deixe seu aniversário ainda mais completo com a Royal Limousines.',
    ],
    disponibilidade: null,
    diferenciais: [
      '4 horas inesquecíveis com luxo e sofisticação',
      'Promoções diferenciadas entre segunda e sexta-feira',
      'Ambiente romântico e personalizado',
      'Clima diferenciado',
      'Como cortesia oferecemos água, refrigerante, Champagne sem álcool e bombons finos',
    ],
    fechamento: [
      'Para clientes que exigem modernidade associada ao luxo e conforto que só uma limousine pode oferecer.',
      'Nossa empresa oferece os melhores serviços de Limousines para aniversários em SP.',
      'Precisando fazer Limousines para aniversários em SP?',
      'Contrate uma empresa especializada! Entre em contato com a Royal Limousines e confira os nossos serviços e preços!',
      'Com uma equipe de atendimento 24hrs por dia, 7 dias por semana, para que você possa contratar, faça o seu orçamento hoje mesmo!',
    ],
    fraseTelefone: 'Para saber mais sobre Limousines para aniversários em SP, ligue para (11) 2295-3870 ou para (11) 99913-0498.',
    imagens: [
      { arquivo: 'hgfhf.jpg', rotulo: 'Limousine Royal em aniversário' },
      { arquivo: '4640854_orig.jpg', rotulo: 'Limousine Royal em festa de aniversário' },
    ],
  },
  {
    slug: 'limousines-para-jantares-romanticos-em-sp',
    categoria: 'evento',
    menuLabel: 'Jantares Românticos',
    title:
      'Limousines para Jantares Românticos em SP | Aluguel de Limousines para Jantares Românticos em SP, Zona Sul, Zona Leste, Zona Norte, Zona Oeste, SP.',
    description:
      'Querendo surpreender sua amada? Limousines para Jantares Românticos em SP é a melhor opção. Faça uma surpresa e alugue uma limousine para o seu jantar.',
    h1: 'Limousines para Jantares Românticos em SP',
    h2: 'Aluguel de Limousines para Jantares em SP',
    abertura: [
      'Somos especializados em Aluguel de Limousines para Jantares românticos em SP.',
      'Para uma data inesquecível, não pode faltar uma apresentação inesquecível. A Royal Limousines possui luxuosas e confortáveis limousines para você celebrar e ter uma entrada deslumbrante.',
      'O seu jantar romântico ainda mais completo com a Royal Limousines.',
    ],
    disponibilidade: null,
    diferenciais: [
      '4 horas inesquecíveis com luxo e sofisticação',
      'Promoções diferenciadas entre segunda e sexta-feira',
      'Ambiente romântico e personalizado',
      'Clima diferenciado',
      'Como cortesia oferecemos água, refrigerante, Champagne sem álcool e bombons finos',
    ],
    fechamento: [
      'Para clientes que exigem modernidade associada ao luxo e conforto que só uma limousine pode oferecer.',
      'Nossa empresa oferece os melhores serviços de aluguel de Limousines para Jantares românticos em SP.',
      'Precisando fazer aluguel de Limousines para Jantares românticos em SP?',
      'Contrate uma empresa especializada! Entre em contato com a Royal Limousines e confira os nossos serviços e preços!',
      'Com uma equipe de atendimento 24hrs por dia, 7 dias por semana, para que você possa contratar, faça o seu orçamento hoje mesmo!',
    ],
    fraseTelefone:
      'Para saber mais sobre aluguel de Limousines para Jantares românticos em SP, ligue para (11) 2295-3870 ou para (11) 99913-0498.',
    imagens: [
      { arquivo: '1121.jpg', rotulo: 'Limousine Royal em jantar romântico' },
      { arquivo: 'ir.ashx_808.jpg', rotulo: 'Casal em jantar romântico com a Limousine Royal' },
    ],
  },
];

export default servicosRegiao;
