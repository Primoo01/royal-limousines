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

### Altura de seção

- **Seções de vitrine** (hero da home, hero da LP, seção da limousine branca, seção do 300C preto, painel do menu): ocupam a tela inteira. Use `min-height: 100svh` — **nunca `height`, nunca `100vh`**. `100vh` quebra no mobile por causa da barra do navegador.
- **Páginas de conteúdo** (as 8 de serviço/região, empresa, serviços, contato): fluxo natural de altura. Forçar tela cheia aqui corta texto e cria vazios — é proibido.
- Conteúdo jamais pode ser cortado. Se não couber, a seção cresce.
- Testar em 360px de largura e em tela larga (1920px+).

---

### Botões

Três níveis, todos em Space Grotesk, caixa alta, `letter-spacing: .12em`, tamanho pequeno. Cantos retos ou raio máximo de 2px — arredondado forte destoa do editorial.

- **Primário:** borda fina dourada, fundo transparente. No hover, um preenchimento sobe de baixo para cima e o texto inverte de cor. Transição em `transform`, não em `width`/`height`.
- **Secundário:** texto com um fio fino embaixo, que se estende da esquerda para a direita no hover.
- **Terciário/link:** texto com seta discreta que avança alguns pixels no hover.
- Nos dois mundos: dourado `#A8823C` no claro, `#C6A25E` no escuro.
- Foco de teclado sempre visível.

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

### Barra do topo
- Fina, discreta, glass real. Contém: logo, botão "Menu" e acesso ao WhatsApp.
- **Comportamento no scroll:** some ao descer, reaparece ao subir. `transform: translateY(-100%)`, nunca `display` ou `height`. Sempre visível no topo absoluto da página. Limiar de ~8px para não tremer. Desligado em `prefers-reduced-motion`.
- O logo nunca muda de peso ao ser clicado. Estado ativo = leve queda de opacidade (0.7), nada mais.

### Menu em overlay — painel duplo
Ao clicar em "Menu", abre um painel de tela cheia dividido:

- **Esquerda (~40% no desktop):** painel de mídia. Imagem ou vídeo abstrato, ocupando toda a altura.
- **Direita (~60%):** os links em Cormorant grande, organizados em colunas: **Frota · Serviços · Casamentos por região · A Royal**, com Início solto no topo e Contato em destaque.

Comportamento:
- Entrada escalonada dos itens (~50ms entre eles, apenas opacity/transform).
- **Ao passar o mouse sobre um item, a mídia da esquerda troca em crossfade** (transição de opacidade, ~400ms). Há uma mídia padrão quando nada está sob o cursor.
- Cada grupo/item principal tem sua própria mídia. Elas são **abstratas** — luz, reflexo, tecido, materiais — e se diferenciam por **temperatura e movimento**, nunca por assunto literal. Nada de foto de limousine ou de casamento aqui.
- **Mobile:** sem painel lateral. A mídia vira fundo sutil atrás dos links, com escurecimento suficiente para o texto continuar legível.
- Fecha com Esc, clique fora e botão de fechar. Foco preso enquanto aberto, `aria-expanded` no botão, `body` sem scroll.
- Sem biblioteca.

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
