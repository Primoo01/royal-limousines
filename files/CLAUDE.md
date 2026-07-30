# Royal Limousines — contexto do projeto

## O que é este projeto

Reconstrução do site da **Royal Limousines** (aluguel de limousine para casamentos e eventos em São Paulo, no ar desde 2008).

O site atual é WordPress, visualmente datado, mas **ranqueia no Google há anos e recebe tráfego pago do Google Ads**. Estamos migrando para **Astro estático**, com dois objetivos que não podem ser negociados:

1. **Preservar 100% do SEO existente** — o valor do negócio está no Google.
2. **Entregar um design premium e leve** — sofisticado, mas rápido no 4G.

O conteúdo das páginas antigas está em um backup local (caminho na seção "Caminhos").

---

## REGRAS INVIOLÁVEIS

Estas regras existem para não destruir o SEO do cliente. Nunca as quebre, mesmo que pareça uma melhoria.

1. **URLs são congeladas.** As URLs listadas em "Mapa de páginas" devem sair **byte a byte idênticas**. Nunca renomeie, encurte, "melhore" ou traduza um slug. Uma letra errada = ranking perdido.
2. **Barra no final sempre.** `trailingSlash: 'always'` no `astro.config.mjs`. O WordPress serve `/contato/`, e é assim que o Google tem indexado.
3. **Não consolide páginas.** Migração é 1:1. Juntar páginas parecidas é decisão de estratégia de SEO, feita por outra pessoa depois — não faça por conta própria.
4. **Não crie páginas novas.** Nada além do mapa. Sem páginas de bairro extras, sem blog, sem landing inventada.
5. **Não invente conteúdo.** Textos, títulos e meta descriptions vêm do backup. Não escreva depoimentos, números, prêmios, anos de experiência ou nomes de clientes que não existam na fonte.
6. **Não invente imagens de produto.** Os carros do site precisam ser os carros reais do cliente. Enquanto não houver fotos, use os placeholders descritos em "Imagens".
7. **Preserve os sinais de SEO de cada página:** `<title>`, meta description, `<h1>` e o texto com as palavras-chave. Manter a URL mas esvaziar o conteúdo também derruba o ranking.
8. **Limpe apenas o datado.** Ex.: "Promoção 2017", anos antigos, telefone/preço obsoleto. Mantenha as palavras-chave intactas.

---

## Já funciona — não regrida

Os itens abaixo estão confirmados funcionando. Qualquer alteração no projeto precisa preservá-los:

- Sistema de botões (3 níveis, com hover e foco visível)
- Header que some ao descer e reaparece ao subir
- Formulário de orçamento na /contato/
- Scroll suave, sem solavancos
- Transição dia→noite na /limousines/
- As 14 URLs idênticas ao mapa
- JS abaixo de 25 KB
- Overlay do menu abrindo e fechando, com o ícone se transformando
- Sistema de botões (moldura em colchete e barra de fim de seção)
- Nenhuma barra de rolagem visível em lugar nenhum

Ao terminar qualquer tarefa, confirme item por item que nada disso regrediu. Se algo precisar ser alterado para a tarefa funcionar, pare e me pergunte antes.

---

## Caminhos

- **Projeto (onde construir):** `C:\Users\leayu\OneDrive\Área de Trabalho\PrimoStoneLAB\Projeto Dusdete\new-site`
- **Backup do site antigo (somente leitura, fonte da verdade do conteúdo):** `C:\Users\leayu\OneDrive\Área de Trabalho\PrimoStoneLAB\Projeto Dusdete\www.limousinesroyal.com.br`

O backup é um espelho feito com wget. Cada página virou uma pasta com um `index.html` dentro. Ignore tudo que começa com `wp-`, e também `comments`, `feed`, `category`, `tag`, `author`.

**Nunca edite nada dentro da pasta de backup.**

---

## Stack

- **Astro** (site estático puro, sem SSR)
- **Sem framework de UI** — nada de React/Vue/Svelte. Componentes `.astro` e HTML/CSS. Peso é requisito.
- **`@astrojs/sitemap`** para o sitemap
- **`astro:assets`** para otimização de imagem
- **Fontes self-hosted** via `@fontsource` (nunca link do Google Fonts em produção — evita FOUT e request externo)
- **Deploy:** Cloudflare Pages (build estático, pasta `dist/`)
- **Animação:** ver "Movimento". Não instale GSAP, Framer Motion, AOS ou similar sem necessidade real.

### Orçamento de performance (requisito, não meta)

- JS total enviado ao navegador: **abaixo de 25 KB** (gzip)
- Lighthouse mobile: **90+** em Performance, 100 em SEO e Best Practices
- Nenhuma imagem servida acima de 1600px de largura
- Formato de imagem: WebP/AVIF via `astro:assets`

---

## Mapa de páginas

14 URLs no total. **Copie os slugs exatamente como estão abaixo.**

### Páginas fixas

| URL | O que é |
|---|---|
| `/` | Home — é a landing page principal, recebe o tráfego do Google Ads e da busca |
| `/lp-limousine/` | | `/lp-limousine/` | Landing dos anúncios do Google Ads. **Não pode quebrar.** Tem conteúdo e layout próprios — nunca espelhe a home. Nunca foi indexada: leva `noindex, follow`, fica fora do sitemap e **não leva canonical**. Foco total em conversão. |. |
| `/empresa/` | Sobre a empresa |
| `/limousines/` | Frota — página única com os dois veículos e a transição dia→noite (ver "Signature") |
| `/servicos/` | Serviços oferecidos |
| `/contato/` | Contato + formulário |

### Páginas de serviço/região (as que ranqueiam)

Geradas por **um template só** + arquivo de dados. Não crie 8 arquivos `.astro`.

| URL |
|---|
| `/aluguel-de-limousines-para-casamentos-em-sp/` |
| `/aluguel-de-limousines-para-casamentos-na-zona-leste/` |
| `/aluguel-de-limousines-para-casamentos-na-zona-norte/` |
| `/aluguel-de-limousines-para-casamentos-na-zona-oeste/` |
| `/aluguel-de-limousines-para-casamentos-na-zona-sul/` |
| `/aluguel-de-limousines-para-debutantes-em-sp/` |
| `/limousines-para-aniversarios-em-sp/` |
| `/limousines-para-jantares-romanticos-em-sp/` |

---

## Design

### Carrossel de fotos

Um componente só, reutilizado em todos os lugares.

**Entrada:** a primeira foto começa à esquerda ocupando cerca de 45% da largura e **cresce conforme o scroll** até ~92% da tela. Terminada a entrada, o carrossel horizontal começa.

**Desktop:** avanço horizontal conduzido pelo scroll vertical.
**Mobile:** rolagem horizontal nativa com `scroll-snap`. Nunca sequestre o scroll no mobile — quebra a expectativa do toque e é ruim de usar.

- Legenda própria por foto, trocando junto.
- As fotos precisam aparecer grandes e fáceis de ver.
- Proporção de slide fixa, com `object-fit: cover`, para aceitar foto de qualquer orientação sem quebrar o layout.
- Acessível por teclado (setas) e com `aria-label` nos controles.
- Barra de rolagem invisível, como no resto do site.

---

### Cabeçalho das páginas de conteúdo

Vale para as 8 páginas de serviço/região, `/empresa/`, `/servicos/` e `/contato/`.

- `min-height: 60svh` — deliberadamente menor que o hero da home, para não competir com ele.
- `<h1>` grande entrando com o vocabulário de entrada.
- Uma linha de apoio curta abaixo.
- A linha que se desenha, com o ponto no fim.
- Mundo claro.

Isso resolve o vazio no topo dessas páginas com uma solução única, e sem inventar conteúdo.

---


### Hero da home — dois estágios

**Estágio 1 (mundo escuro).** `min-height: 100svh`.
- Fundo: cortina de luz + véu.
- Canto superior esquerdo: eyebrow, `<h1>` grande em Cormorant, e um parágrafo de no máximo duas linhas.
- Mídia: à direita/centro, em tamanho moderado (placeholder até chegar a foto real da limousine).
- Canto inferior esquerdo: **marquee grande** — cerca de 30% da altura da tela e 50% da largura, atravessando por cima da borda da mídia.
- Canto inferior direito: um texto pequeno e refinado.
- Chevron ancorado à base, sem sobrepor conteúdo.

**A passagem.** Conforme o scroll avança: a mídia cresce (a chegada), e o fundo transiciona do mundo escuro para o mundo claro. Mesma máquina da transição dia→noite da /limousines/, mas mais rápida e por trás do conteúdo — ali ela é protagonista e dura três telas; aqui dura uma seção.

**Estágio 2 (mundo claro).** A assinatura: o wordmark e, entrando depois dele, `Desde 2008 · São Paulo`. É a procedência que sustenta a marca, e por isso entra por último.

Narrativa: **noite (expectativa) → a chegada (espetáculo) → dia (celebração).** A /limousines/ faz o caminho inverso, e as duas páginas se espelham.

---

### Altura de seção

- **Seções de vitrine** (hero da home, hero da LP, seção da limousine branca, seção do 300C preto, painel do menu): ocupam a tela inteira. Use `min-height: 100svh` — **nunca `height`, nunca `100vh`**. `100vh` quebra no mobile por causa da barra do navegador.
- **Páginas de conteúdo** (as 8 de serviço/região, empresa, serviços, contato): fluxo natural de altura. Forçar tela cheia aqui corta texto e cria vazios — é proibido.
- Conteúdo jamais pode ser cortado. Se não couber, a seção cresce.
- Testar em 360px de largura e em tela larga (1920px+).

---

### Botões

Todos em Space Grotesk, caixa alta, letter-spacing .14em, 12px. Cantos retos.
Easing padrão: cubic-bezier(.2,.7,.3,1).

**Primário — moldura em colchete.** Botão isolado, dentro de seções.
- Repouso: quatro colchetes de 11px nos cantos (borda de 1px na cor dourada do mundo), fundo transparente, texto na cor de texto do mundo.
- Hover: os quatro colchetes crescem ao mesmo tempo até se encontrarem, fechando a moldura completa (450ms), E um preenchimento dourado sobe de baixo para cima (450ms). O texto inverte para a cor de fundo do mundo.
- Clique: scale(.98) com retorno imediato.
- Implementação obrigatória: colchetes crescem com transform: scaleX/scaleY sobre linhas finas, com transform-origin no canto. O preenchimento é uma camada com transform: scaleY(0) → scaleY(1), origin bottom. **Nunca width/height.**

**Barra de fim de seção.** Largura total, fecha seções.
- Repouso: fio fino acima e abaixo, texto à esquerda, seta à direita na cor dourada.
- Hover: preenchimento dourado varre da esquerda para a direita (550ms, transform: scaleX, transform-origin: left). Texto e seta invertem para a cor de fundo.
- Clique: scale(.995).

**Terciário — link em texto.** Dentro de parágrafos.
- Texto com seta discreta que avança ~6px no hover (transform: translateX).

Em todos: foco de teclado visível. Em prefers-reduced-motion, as transições são removidas e o estado final permanece legível.

---

### Conceito

Base estrutural editorial (foto grande, muito espaço, tipografia grande, scroll calmo), com toques pontuais de sofisticação e movimento. Minimalista, com luxo — **sem neon, sem estética de festa, sem brilho excessivo**.

A frota são dois Chrysler 300C: o **branco** (limousine esticada) e o **preto** (sedan). Isso vira o conceito visual do site inteiro: **dois mundos**, um claro e um escuro, unidos pelo dourado champagne.

### Paleta

**Mundo claro (300C branco):**

```
--claro-bg:        #F4F1EB
--claro-surface:   #E7E0D4
--claro-linha:     #CFC6B5
--claro-texto:     #1A1815
--claro-texto-mut: #8A8578
```

**Mundo escuro (300C preto):**

```
--escuro-bg:        #141210
--escuro-surface:   #211E18
--escuro-linha:     #3A342A
--escuro-texto:     #EDE7DB
--escuro-texto-mut: #8C857A
```

**Dourado (une os dois mundos):**

```
--ouro-claro:  #A8823C   /* usar sobre fundo claro */
--ouro-escuro: #C6A25E   /* usar sobre fundo escuro */
```

Use o dourado com **restrição**: fio divisor, eyebrow, borda de botão, detalhe de foco. Nunca em grandes áreas preenchidas.

### Tipografia

- **Títulos:** `Cormorant Garamond` (serif), peso 500/600
- **Corpo, botões, navegação, eyebrows:** `Space Grotesk`, peso 400/500
- Eyebrows/labels: Space Grotesk, caixa alta, `letter-spacing: .18em`, tamanho pequeno, na cor dourada
- Títulos grandes: `line-height` apertado (1.0–1.1)
- Corpo: `line-height` 1.6–1.7

### Vidro (glass)

O cliente gosta do efeito translúcido tipo iOS, **mas o site precisa ser leve**. Regra:

- **Glass real** (`backdrop-filter: blur(10px)`) em no máximo **dois lugares**: a barra de navegação fixa no topo e o botão flutuante de WhatsApp. São elementos pequenos e de área constante.
- **Em todo o resto, glass falso:** fundo `rgba(...)` semi-transparente + borda de 1px sutil, **sem blur**. Visualmente parecido, custo próximo de zero.
- Nunca aplique `backdrop-filter` em área grande, em elemento que se move no scroll, ou em vários elementos ao mesmo tempo.

---

## Movimento

### Fundos animados

Dois fundos, um por mundo. Nunca os dois na mesma tela.

**Cortina de luz — hero da home (mundo escuro).**
- 8 linhas verticais, 1,4px, dourado a ~34% de opacidade, distribuídas na largura.
- Cada linha anima `scaleY` entre .25 e 1, `transform-origin: top`, `transform-box: fill-box`, com atrasos escalonados de ~700ms entre elas.
- Duração base exposta na variável `--cortina-dur` (padrão `3.5s`) para ajuste fino num lugar só.
- Um véu radial escuro por cima mantém o centro limpo para o texto e a mídia.

**Faróis atravessando — seção escura da /limousines/.**
- Rastros de base fixos e apagados (~7% de opacidade) e, por cima, traços de luz percorrendo o caminho com `stroke-dashoffset`.
- Três caminhos com durações `1.25s`, `1.875s` e `2.375s` e atrasos negativos para dessincronizar. Expor em `--farois-dur`.
- O brilho é simulado com dois traços sobrepostos (um largo e translúcido atrás, um fino e claro na frente). **Nunca use `filter: blur`** — é caro para a GPU.

Os dois desligam em `prefers-reduced-motion`.


---


### Vocabulário de entrada

Existe **um único** efeito de entrada no site, usado em todos os títulos, cabeçalhos de seção e legendas. Um efeito repetido com disciplina cria identidade; vários efeitos criam ruído.

**Como funciona:** um bloco sólido dourado varre o texto da esquerda para a direita e sai pela direita, revelando o texto — que ao mesmo tempo entra vindo da esquerda e de cima.

- Bloco: `scaleX(0)→1` com origem à esquerda (~280ms), depois a origem passa para a direita e `scaleX(1)→0` (~280ms).
- Texto: `opacity 0→1` e `translate(-24px,-16px)→(0,0)`, atraso de ~180ms, duração ~550ms.
- Easing: `cubic-bezier(.2,.7,.3,1)`.
- Disparado por `IntersectionObserver` com threshold ~0.35.

**Regra de segurança que não pode ser quebrada:** o conteúdo é **visível por padrão** no CSS. O JavaScript é quem adiciona a classe que prepara o elemento para animar, e só em elementos que ainda não entraram na viewport. Elementos já visíveis no carregamento aparecem imediatamente, sem animação. Se o JS falhar, todo o conteúdo continua visível.

### Linha que se desenha

Curva única e suave, terminando num ponto marcado.

- SVG com `stroke-dasharray`/`stroke-dashoffset` animados. O comprimento é medido com `getTotalLength()` no JS, nunca chutado.
- Duração ~1,6s, atraso ~200ms depois do título.
- O ponto no fim aparece em fade só depois de a linha completar (~1,5s).
- Dourado do mundo correspondente.

---


### Filosofia

Movimento discreto e elegante. **Só `transform` e `opacity`** (o navegador acelera na GPU). Nunca anime `width`, `height`, `top`, `left`, `margin`, `filter` ou `box-shadow`.

`prefers-reduced-motion: reduce` deve desligar todas as animações e mostrar o conteúdo em seu estado final. Isso é obrigatório.

### Implementação

- **Revelações no scroll:** `IntersectionObserver` + classe CSS (custo zero de biblioteca)
- **Scroll suave:** `Lenis` (~3 KB) — **apenas no desktop**. Desligado no mobile e com reduced-motion.
- Não instale GSAP/ScrollTrigger a menos que algo se prove impossível sem — e avise antes.

### Signature — a transição dia→noite (o elemento memorável do site)

Na página `/limousines/`:

- A página abre no **mundo claro**, apresentando o Chrysler 300C branco.
- Conforme o usuário rola, depois que todo o conteúdo do carro branco foi mostrado, o fundo **transiciona suavemente do claro para o escuro**, como um entardecer: o fundo escurece, o texto clareia, e pequenos pontos de luz acendem.
- Terminada a transição, estamos no **mundo escuro**, apresentando o Chrysler 300C preto.
- Conceito: **branco = dia = casamento; preto = noite = evento**.

Implementação leve: interpolar as variáveis CSS de cor conforme o progresso do scroll da seção de transição (`requestAnimationFrame` + uma única leitura de posição). Não use canvas, não use vídeo, não use biblioteca.

### Indicador de scroll — "a estrada"

- **No hero:** um chevron fino, animado sutilmente (sobe e desce), que desaparece assim que o usuário começa a rolar.
- **Depois do hero:** aparece na lateral um indicador vertical em forma de **estrada** — uma linha fina, com um marcador que desce por ela conforme o scroll avança. Cada seção é uma "parada" na estrada.
- Minimalista, fino, discreto. Escondido no mobile se atrapalhar.

---

## Componentes obrigatórios

- **Barra de navegação** fixa no topo, com glass real. Menu enxuto.
- **Botão flutuante de WhatsApp**, presente em todas as páginas, com glass real.
  - Link simples `https://wa.me/55DDDNUMERO` — **sem mensagem pré-preenchida** (o WhatsApp Business do cliente já tem robô automático de atendimento).
- **Formulário de contato** na página `/contato/`.
  - Site estático não tem backend: use um serviço externo sem servidor (Web3Forms ou Formspree), com a chave em variável de ambiente.
  - Campos: nome, telefone/WhatsApp, e-mail, data do evento, tipo de evento, mensagem.
  - Validação nativa do HTML. Sem biblioteca.
- **Seção de dúvidas frequentes (FAQ)** — `<details>/<summary>` nativo, sem JS.
  - As perguntas e respostas reais estão na /lp-limousine/ do backup (4 itens, já em <details>/<summary>). Use-as como fonte — não invente outras. O bloco de FAQ com JSON-LD FAQPage precisa ficar em página indexável (home e/ou serviços); na LP ele não vale nada, porque ela é noindex.

---

## Navegação


---


### Botão de menu (abre e fecha)

Um único botão no header controla os dois estados.

- Ícone de duas linhas horizontais paralelas: largura ~30px, espessura 1px, espaçadas ~9px.
- Fechado: as duas linhas paralelas.
- Aberto: a linha de cima gira +45° e a de baixo -45°, ambas convergindo ao centro e formando um X.
- Transição de 350ms, apenas transform (rotate e translate).
- Não existe rótulo textual. Apenas o ícone, no mesmo tratamento visual do X. `aria-label` alterna entre "Abrir menu" e "Fechar menu".
- O botão fica acima do overlay no z-index e permanece sempre clicável.
- aria-label alterna entre "Abrir menu" e "Fechar menu"; aria-expanded acompanha o estado.
- **Não existe mais um segundo botão de fechar dentro do overlay.**

### Escala de z-index

O botão de menu mora dentro do `<header>` e precisa ficar clicável com o overlay aberto. Todo elemento `position: fixed` cria seu próprio contexto de empilhamento — então nenhum z-index no botão o colocaria acima do overlay se o header, como um todo, estivesse abaixo dele. Solução: o header fica acima do overlay na escala, e quando o menu abre, o fundo do header vira transparente (ver abaixo) para não parecer uma barra flutuando por cima do menu.

Ordem, do mais baixo pro mais alto:

1. Conteúdo e decorações de página (sem z-index — nível 0/auto)
2. Indicador "estrada" / chevron do hero
3. Botão flutuante de WhatsApp
4. Overlay do menu
5. Header (bar fixa do topo, incluindo o botão de menu)

Documentado como `--z-indicadores` / `--z-whatsapp` / `--z-menu` / `--z-header` em `global.css` — não hardcode número de z-index em componente novo.

### Barra do topo
- Fina, discreta, glass real. Contém: logo, botão "Menu" e acesso ao WhatsApp.
- **Comportamento no scroll:** some ao descer, reaparece ao subir. `transform: translateY(-100%)`, nunca `display` ou `height`. Sempre visível no topo absoluto da página. Limiar de ~8px para não tremer. Desligado em `prefers-reduced-motion`.
- **Com o menu aberto:** o header fica travado em visível (a regra de esconder ao descer não se aplica) e o fundo glass vira transparente, com a transição acompanhando a abertura — só o logo e o botão de menu continuam aparentes, agora na cor do mundo escuro (o overlay está por baixo, mas visualmente contínuo).
- O logo nunca muda de peso ao ser clicado. Estado ativo = leve queda de opacidade (0.7), nada mais.

### Menu em overlay — painel duplo

Mídia à esquerda (~40vw), conteúdo à direita (~60vw). No mobile, sem painel lateral: a mídia vira fundo com escurecimento.

**Itens — lista vertical única, um abaixo do outro. Sem colunas.**

- Início
- Frota
- Serviços
  - Casamentos em SP
  - Debutantes
  - Aniversários
  - Jantares românticos
- A Royal
- Contato (destaque)

As páginas de casamento por região (Zona Leste, Norte, Oeste, Sul) **não aparecem no menu**. Ficam apenas no rodapé — e o rodapé continua com todas as 8 páginas de serviço/região, sem exceção.

**Hierarquia tipográfica:**
- Itens principais (Início, Frota, Serviços, A Royal, Contato): Cormorant, clamp(1.9rem, 3.2vw, 3rem).
- Subitens de Serviços: Cormorant, clamp(1.05rem, 1.5vw, 1.4rem) — visivelmente menores que o item pai, recuados à esquerda.
- **Não existem mais cabeçalhos de grupo pequenos em dourado.** "Serviços" é um item principal normal, do mesmo tamanho dos outros, e também é link para /servicos/.
- Contato recebe destaque visual, mas mantém o mesmo tamanho dos demais itens principais.

**Barra de rolagem:** se o conteúdo exceder a altura da tela, o menu rola — mas a barra fica invisível, com a mesma técnica usada no documento. O scroll precisa funcionar por roda, toque e teclado.

Entrada escalonada dos itens — precisa parecer instantâneo, não uma sequência lenta: 40ms entre os itens principais, 25ms entre os 4 subitens de Serviços, atraso total abaixo de ~250ms. Hover trocando a mídia da esquerda em crossfade de 400ms, fecha com Esc, clique fora e pelo botão. Foco preso enquanto aberto. Sem biblioteca.

**Acordeão de Serviços:**
- "Serviços" é um link normal para `/servicos/` e continua clicável.
- Ao lado dele, uma **seta separada** abre e fecha o acordeão, **por clique** (nunca por hover — hover empurrando o layout faz o item fugir do cursor, e no mobile hover não existe).
- Ao abrir, os 4 subitens surgem abaixo e empurram os itens seguintes para baixo.
- Os subitens são **pouco menores** que "Serviços", não muito: `clamp(1.4rem, 2.4vw, 2.2rem)` contra `clamp(1.9rem, 3.2vw, 3rem)`. A diferença precisa ser visível, mas discreta.
- Mesmo comportamento no desktop e no mobile.
- A seta gira ao abrir. `aria-expanded` acompanha o estado.


---

## SEO técnico

Implementar em todas as páginas:

- `<title>` e meta description **extraídos do backup**, um por página
- `<link rel="canonical">` absoluto
- Open Graph + Twitter card
- `sitemap.xml` via `@astrojs/sitemap`
- `robots.txt` permitindo tudo e apontando para o sitemap
- **JSON-LD `LocalBusiness`** no site todo (nome, telefone, e-mail, área atendida: São Paulo e região) — o site antigo não tem isso, é ganho real
- **JSON-LD `FAQPage`** na seção de FAQ
- `lang="pt-BR"` no `<html>`
- Um `<h1>` por página, contendo a palavra-chave da página
- Todas as imagens com `alt` descritivo
- `/lp-limousine/` leva <meta name="robots" content="noindex, follow"> e fica fora do sitemap. Nunca aplique noindex em nenhuma outra página.

---

## Links internos

As 8 páginas de serviço/região não podem ficar órfãs. No site antigo o menu do WordPress apontava para elas; se ninguém linkar, elas perdem força no Google.

- **Rodapé:** links para todas as 8 páginas, agrupados por tipo (casamentos por zona / outros eventos).
- **Menu:** overlay em tela cheia com todas elas (ver "Navegação").
- **Links cruzados:** cada página de casamento por zona linka para as outras zonas ("Atendemos também: Zona Sul, Zona Leste…").
- Todo link interno usa URL com barra no final.

---

## Imagens

**Ainda não há fotos do cliente.** Construa o site inteiro com placeholders e deixe a troca trivial.

- Centralize as imagens em um único arquivo de dados/config, para que trocar por foto real seja mudar um caminho.
- Placeholder deve ser **elegante**, não uma caixa cinza: bloco na cor de superfície da paleta, com o dourado sutil e um rótulo discreto do que vai ali (ex.: "Chrysler 300C branco — three-quarter frontal").
- Todo container de imagem já deve ter `aspect-ratio` definido, para que a foto real entre sem quebrar o layout e sem causar CLS.
- Quando as fotos chegarem: `astro:assets`, WebP/AVIF, `loading="lazy"` (menos no hero), `width`/`height` explícitos.

---

## Mídia pesada (vídeo)

O site tem orçamento de JS de 25 KB e não pode ser traído por mídia.

- **Vídeo no menu é permitido** porque só carrega quando o menu abre. Use `preload="none"`, e inicie o carregamento apenas na primeira abertura.
- Todo vídeo: `muted`, `loop`, `playsinline`, sem controles, sem áudio, com `poster` de imagem leve.
- Pausar o vídeo quando o menu fecha (não deixar rodando em segundo plano).
- Em `prefers-reduced-motion`, nunca reproduzir vídeo: mostrar só o poster.
- **Vídeo no hero da home ainda não está decidido.** Não implemente até haver definição. Deixe a estrutura preparada para receber.
- Teto por arquivo de vídeo: 1,5 MB. Formato: MP4 (H.264) + WebM quando possível.

---


## Contatos (placeholder — confirmar com o cliente)

Usar como valor provisório, extraído do site atual:

- WhatsApp: `(11) 99913-0498`
- Telefone: `(11) 2295-3870`
- E-mail: `contato@limousinesroyal.com.br`

Centralizar em **um único arquivo de configuração** para que a troca seja feita em um lugar só.

---

## Conteúdo e escrita

- Português do Brasil.
- Tom: sóbrio, elegante, direto. Sem exagero publicitário, sem exclamação, sem "simplesmente", "incrível", "inesquecível" repetido em toda seção.
- Botões nomeiam a ação: "Solicitar orçamento", "Falar no WhatsApp". Nunca "Clique aqui" ou "Enviar".
- Preserve as palavras-chave das páginas de serviço/região. Elas parecem repetitivas de propósito — é assim que o site ranqueia.
- Quando o backup tiver duas versões do mesmo conteúdo, prefira a da /lp-limousine/ — é mais sóbria e atual. Mas isso vale só para o texto do corpo. <title>, meta description e <h1> das páginas indexadas continuam intocados: são eles que ranqueiam.
- Em página indexada, **toda palavra-chave que existia no backup precisa continuar existindo**. Melhorar a escrita nunca pode reduzir a cobertura de termos nem encurtar o texto relevante.

---

## Qualidade mínima

- Responsivo, testado a partir de 360px de largura
- Foco de teclado visível em todos os elementos interativos
- `prefers-reduced-motion` respeitado
- Contraste de texto acessível nos dois mundos (claro e escuro)
- HTML semântico (`header`, `nav`, `main`, `section`, `footer`)

---

## O que NÃO fazer

- Não altere nenhuma URL
- Não crie página que não esteja no mapa
- Não instale bibliotecas pesadas (React, jQuery, Bootstrap, Tailwind não é necessário aqui, GSAP só com aviso)
- Não use `backdrop-filter` fora dos dois lugares permitidos
- Não anime propriedades que causam layout (width, height, top, left, margin)
- Não invente texto, depoimento, prêmio, número ou estatística
- Não use imagem gerada por IA representando os carros do cliente
- Não mexa na pasta de backup
- Não faça deploy nem altere DNS — isso é feito manualmente e só no final
