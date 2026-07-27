# Prompts para o Claude Code — Royal Limousines

Rode **uma etapa por vez**. Confira o resultado antes de passar para a próxima.
Isso é o que evita alucinação: cada etapa entrega algo verificável.

---

## ETAPA 1 — Auditoria e extração do conteúdo

> Não escreva código de site nesta etapa. O objetivo é extrair a verdade do backup.

```
Leia o CLAUDE.md deste projeto antes de qualquer coisa.

Nesta etapa você NÃO vai construir o site. Você vai auditar o backup do site antigo e extrair o conteúdo real dele.

O backup está em:
C:\Users\leayu\OneDrive\Área de Trabalho\PrimoStoneLAB\Projeto Dusdete\www.limousinesroyal.com.br

É um espelho feito com wget: cada página é uma pasta com um index.html dentro. Trate essa pasta como SOMENTE LEITURA — nunca edite nada lá dentro.

Faça o seguinte:

1. Liste todas as páginas HTML reais do backup, ignorando wp-admin, wp-content, wp-includes, wp-json, comments, feed, category, tag e author.

2. Compare a lista encontrada com o "Mapa de páginas" do CLAUDE.md. Me diga:
   - páginas do mapa que NÃO estão no backup
   - páginas no backup que NÃO estão no mapa
   Não resolva sozinho as diferenças: me pergunte.

3. Para cada página, extraia do HTML:
   - a URL exata (o slug, com barra no final)
   - o <title>
   - a meta description
   - o <h1>
   - os títulos de seção (h2/h3)
   - o texto do corpo, limpo de menu, rodapé, scripts e código do WordPress
   - a lista de imagens usadas (caminho e alt)

4. Grave tudo em src/data/paginas-antigas.json, um objeto por página, mantendo o texto original sem reescrever.

5. Faça um relatório curto em português me dizendo:
   - quantas páginas foram extraídas
   - onde encontrou conteúdo datado (ex.: "Promoção 2017", anos antigos, telefone ou preço obsoleto)
   - telefones, WhatsApp e e-mails que aparecem no site antigo
   - se as páginas de casamento por zona são realmente diferentes entre si ou repetem o mesmo texto

Não invente nada. Se algum campo não existir no HTML, marque como null.
```

---

## ETAPA 2 — Fundação do projeto e sistema de design

```
Agora crie a base do projeto Astro em:
C:\Users\leayu\OneDrive\Área de Trabalho\PrimoStoneLAB\Projeto Dusdete\new-site

Siga o CLAUDE.md à risca (stack, paleta, tipografia, orçamento de performance).

1. Inicialize um projeto Astro mínimo, sem framework de UI e sem template pronto.
2. Configure astro.config.mjs com site definido, trailingSlash: 'always' e a integração de sitemap.
3. Instale as fontes via @fontsource (Cormorant Garamond e Space Grotesk), self-hosted, com apenas os pesos usados.
4. Crie o sistema de design em CSS:
   - as variáveis das duas paletas (mundo claro e mundo escuro) e do dourado
   - a escala tipográfica, com serif nos títulos e grotesca no corpo
   - espaçamento, larguras de container e utilitários mínimos
   - o padrão de "glass falso" reutilizável (rgba + borda, sem blur)
   - a regra global de prefers-reduced-motion
5. Crie o layout base com header (glass real), footer, e todas as tags de SEO por página (title, description, canonical, Open Graph).
6. Crie src/config/site.js com contatos, links e textos globais em um lugar só.
7. Crie o componente de placeholder de imagem elegante descrito no CLAUDE.md, com aspect-ratio configurável.

Ao terminar, rode o build e me mostre que ele passa sem erro.
```

---

## ETAPA 3 — As páginas

```
Agora construa as páginas, usando o conteúdo de src/data/paginas-antigas.json.

Regra que não pode ser quebrada: as URLs precisam sair exatamente iguais às do mapa no CLAUDE.md, com barra no final.

1. As 6 páginas fixas como arquivos .astro:
   / , /lp-limousine/ , /empresa/ , /limousines/ , /servicos/ , /contato/

2. As 8 páginas de serviço/região com UM template só, gerado a partir de um arquivo de dados com os slugs exatos. Não crie 8 arquivos.

3. Para cada página, reaproveite title, meta description, h1 e texto do backup. Limpe apenas o conteúdo datado. Não reescreva as palavras-chave.

4. /lp-limousine/ recebe o mesmo conteúdo da home, com canonical apontando para /.

5. Na /contato/, monte o formulário com os campos do CLAUDE.md, integrado a Web3Forms ou Formspree, com a chave em variável de ambiente.

6. Monte a seção de FAQ com <details>/<summary>, usando apenas perguntas que se sustentem no conteúdo real. Se faltar informação, me pergunte em vez de inventar.

7. Adicione o botão flutuante de WhatsApp em todas as páginas, sem mensagem pré-preenchida.

Ao final, rode o build e me mostre a lista de URLs geradas em dist/, para eu conferir uma a uma.
```

---

## ETAPA 4 — Movimento

```
Agora implemente o movimento, seguindo a seção "Movimento" do CLAUDE.md.

Lembre: apenas transform e opacity. Nada de bibliotecas pesadas. Tudo desligado em prefers-reduced-motion.

1. Revelações no scroll com IntersectionObserver e classe CSS.
2. Scroll suave com Lenis, apenas no desktop.
3. O chevron animado no hero, que some quando o usuário começa a rolar.
4. O indicador "estrada": linha fina vertical na lateral, com um marcador que desce conforme o scroll, marcando as seções.
5. A transição dia→noite na página /limousines/: depois do conteúdo do Chrysler 300C branco, o fundo transiciona suavemente do mundo claro para o escuro, revelando o 300C preto. Interpolação das variáveis CSS de cor conforme o progresso do scroll, com requestAnimationFrame. Sem canvas, sem vídeo, sem biblioteca.

Ao terminar, me diga quanto de JavaScript o site está enviando ao navegador, em KB.
```

---

## ETAPA 5 — SEO técnico e fechamento

```
Última etapa: fechar o SEO técnico e validar.

1. Confira que toda página tem title, meta description e canonical corretos e únicos.
2. Adicione o JSON-LD LocalBusiness no site e o FAQPage na seção de dúvidas.
3. Gere sitemap.xml e robots.txt.
4. Confira que todas as imagens têm alt e que existe um único h1 por página.
5. Rode o build e compare a lista de URLs em dist/ com o mapa do CLAUDE.md. Aponte qualquer diferença.
6. Faça uma auditoria final e me diga em português:
   - peso total da página inicial
   - quanto de JS está sendo enviado
   - qualquer ponto que possa derrubar a performance no mobile
   - qualquer coisa que você precisou assumir e que eu deveria confirmar
```

---

## Depois, quando as fotos chegarem

```
Recebi as fotos do cliente. Estão em [pasta].
Substitua os placeholders pelas imagens reais, otimizando com astro:assets (WebP/AVIF, tamanhos responsivos, lazy exceto no hero), mantendo os aspect-ratios para não causar CLS. Me diga quais espaços ficaram sem foto.
```
