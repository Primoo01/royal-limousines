// Ficha do Chrysler 300C preto (o sedan da frota).
//
// Dois grupos, separados de propósito:
//
// - fichaSegura: fatos que valem pra qualquer versão do 300C. Podem ser
//   publicados agora, e são os únicos que a página renderiza.
//
// - fichaAConfirmar: cada campo aqui varia entre versões do carro ou depende
//   de decisão do cliente. NUNCA renderizar no site. Isto é um checklist do
//   que perguntar ao dono, não conteúdo. O site antigo publicava ano de carro
//   inconsistente e isso foi removido de propósito — não vamos reintroduzir
//   informação incerta num site comercial.
//
// Nada aqui foi deduzido a partir das fotos. Se um campo não foi confirmado
// por escrito, ele mora no grupo de baixo.

export const fichaSegura = [
  { rotulo: 'Modelo', valor: 'Chrysler 300C' },
  { rotulo: 'Carroceria', valor: 'Sedã de porte grande, tração traseira' },
  { rotulo: 'Comprimento', valor: 'Cerca de 5 metros' },
  { rotulo: 'Câmbio', valor: 'Automático' },
  { rotulo: 'Porta-malas', valor: 'Amplo, em torno de 500 litros' },
  { rotulo: 'Desenho', valor: 'Marcante, com grade frontal larga e capô longo' },
];

// NÃO IMPORTAR EM NENHUMA PÁGINA. Existe só como lembrete do que falta
// confirmar. Há um teste no fim da rodada que falha se a string "CONFIRMAR"
// aparecer em qualquer arquivo publicado em dist/.
export const fichaAConfirmar = [
  { rotulo: 'Ano', valor: 'CONFIRMAR' },
  { rotulo: 'Versão', valor: 'CONFIRMAR' },
  { rotulo: 'Motor', valor: 'CONFIRMAR' },
  { rotulo: 'Potência', valor: 'CONFIRMAR' },
  { rotulo: 'Capacidade de passageiros', valor: 'CONFIRMAR' },
  { rotulo: 'Itens de série', valor: 'CONFIRMAR' },
  { rotulo: 'Atendimento fora de São Paulo', valor: 'CONFIRMAR' },
];

// As fotos reais do sedan, em src/assets/sedan-preto.
//
// A ORDEM DO ARRAY É A ORDEM DO CARROSSEL: exteriores primeiro, o interior
// no fim. Cada legenda foi escrita ABRINDO a foto correspondente e olhando.
// Se trocar um arquivo, abra a foto nova e confira a legenda de novo.
//
// Os três exteriores são as versões EDITADAS: a placa original saiu e entrou
// a placa institucional Royal. Nenhuma placa legível permanece.
//
// FALTAM DUAS, seguradas de propósito: "volante e painel" e "teto solar
// visto do banco traseiro" ainda mostram uma garrafa de água no porta-copos.
// Elas voltam pra cá assim que chegar a versão sem o objeto — é só somar
// duas entradas neste array, nada mais muda.
export const fotosSedan = [
  {
    arquivo: 'sedan-frente-tres-quartos.jpg',
    legenda: 'Chrysler 300C preto visto de frente em três quartos, com o teto solar aberto',
  },
  {
    arquivo: 'sedan-traseira-tres-quartos.jpg',
    legenda: 'Chrysler 300C preto visto de traseira em três quartos',
  },
  {
    arquivo: 'sedan-traseira-placa-royal.jpg',
    legenda: 'Chrysler 300C preto visto de traseira, com a placa Royal Limousines',
  },
  {
    arquivo: 'sedan-porta-traseira-aberta.jpg',
    legenda: 'Chrysler 300C preto com a porta traseira aberta, banco em couro claro',
  },
];

export default { fichaSegura, fichaAConfirmar, fotosSedan };
