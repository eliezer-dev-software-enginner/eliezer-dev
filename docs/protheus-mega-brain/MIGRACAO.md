# Migração do Protheus Mega Brain — 24/10/2026

## Decisão

A ferramenta está disponível em `/solucoes/protheus-mega-brain` dentro de `eliezer-dev`. A página Next incorpora a versão HTML/CSS/JavaScript ativa por meio de um iframe de mesma origem. O iframe isola os estilos globais e preserva o JavaScript nativo, os downloads de `.jsonc` e `.prw`, o modal, os atalhos e o armazenamento local da ferramenta. A versão direta fica em `/solucoes/protheus-mega-brain/index.html`.

Os arquivos ativos são `public/solucoes/protheus-mega-brain/index.html`, `assets/css/app.css` e `assets/js/app.js`. Os bundles Lovable antigos não foram copiados, pois não eram usados pela página. O card no portfólio e o sitemap apontam para a nova rota.

## Histórico e dados locais

`history.bundle` contém todo o histórico Git do projeto antigo, incluindo sete commits locais além de `origin/main`. Para restaurar: `git clone docs/protheus-mega-brain/history.bundle protheus-mega-brain-restaurado`. O `ORIGINAL_README.md` preserva a alteração não commitada no README antigo. Os demais documentos do projeto foram copiados para esta pasta.

O `localStorage` está ligado à origem do navegador. Configurações salvas anteriormente em outro host ou porta não aparecem automaticamente no novo endereço. Revise expressões geradas no Protheus antes de aplicá-las.

## Verificação

- `node --check` no JavaScript migrado.
- Build de produção do `eliezer-dev` concluído; página, CSS e script responderam HTTP 200.
- No navegador, um novo campo foi criado e renomeado para `ZA1_CODIGO`; a prévia JSON MVC refletiu a alteração.
