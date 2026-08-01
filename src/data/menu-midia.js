// Mídia do painel esquerdo do menu (ver CLAUDE.md > Navegação).
// Uma entrada por item principal da lista vertical do menu: Início, Frota,
// Serviços, A Royal, Contato (as páginas de casamento por região não têm
// grupo próprio, não aparecem no menu, só no rodapé), mais o estado padrão.
//
// SÃO FOTOS, NÃO VÍDEO. O vídeo foi descartado: os arquivos disponíveis
// ficavam muito acima do teto de 1,5 MB do CLAUDE.md, e a foto com zoom lento
// entrega o mesmo movimento por alguns KB. O painel é do MUNDO ESCURO, então
// o escurecimento sobre as fotos claras é o que garante o contraste do texto
// (ver MenuMidia.astro > .menu-midia__escrim).
//
// Os enquadramentos foram escolhidos pra serem bem diferentes entre si: o
// crossfade no hover só tem graça se a troca for perceptível.
import { fotosLimo } from './fotos-limo.js';

export const menuMidia = {
  padrao: fotosLimo.tresQuartosFrontalDark,
  inicio: fotosLimo.tresQuartosFrontal,
  frota: fotosLimo.lateral,
  servicos: fotosLimo.interna,
  royal: fotosLimo.tresQuartosTraseira,
  contato: fotosLimo.tresQuartosFrontalDark2,
};

export default menuMidia;
