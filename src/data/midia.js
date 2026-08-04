// Resolução de mídia por NOME BASE, ignorando a extensão.
//
// Por que não casar o nome do arquivo inteiro: as fotos de origem trocam de
// formato com frequência (um mesmo enquadramento já veio .jpg, .jpeg e .png).
// Casar "tres-quartos-frontal-dark.jpg" quebrava o build inteiro quando o
// arquivo virava .png — que foi exatamente o que aconteceu. Casando só o nome
// base, trocar o formato na pasta de origem não exige tocar em código.
//
// O import.meta.glob PRECISA ficar no arquivo que o usa: o Vite lê o padrão
// estaticamente e não aceita um valor vindo de fora. Por isso só o LOOKUP
// mora aqui, não a varredura.

const semExtensao = (caminho) => caminho.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase();

/**
 * @param {Record<string, { default: ImageMetadata }>} arquivos  resultado do import.meta.glob
 * @param {string} nome   nome do arquivo, com ou sem extensão
 * @param {string} pasta  só para a mensagem de erro
 */
export function porNome(arquivos, nome, pasta) {
  const alvo = semExtensao(nome);
  const chave = Object.keys(arquivos).find((caminho) => semExtensao(caminho) === alvo);
  if (!chave) {
    const existentes = Object.keys(arquivos).map((c) => c.split('/').pop()).join(', ');
    throw new Error(`Mídia não encontrada em ${pasta}: "${nome}". Disponíveis: ${existentes}`);
  }
  return arquivos[chave].default;
}

export default { porNome };
