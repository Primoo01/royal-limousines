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

// As fotos do carrossel do sedan moraram aqui (lote curado de 4, em
// src/assets/sedan-preto). Substituídas por um lote maior e mais recente —
// ver src/data/galeria-sedan.js.

export default { fichaSegura, fichaAConfirmar };
