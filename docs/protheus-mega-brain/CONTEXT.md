# Contexto do Projeto

## Objetivo

O Protheus Mega Brain monta uma prévia de registros SX3 e SX7, com expressões ADVPL copiáveis para apoiar o cadastro no SIGACFG.

## Origem e estado atual

O usuário forneceu uma página extraída do Lovable, capturas visuais e bundles compilados. Em 2026-09-22, a interface foi reconstruída do zero em HTML, CSS e JavaScript nativos, usando esse material como referência de aparência e comportamento. `index.html` carrega somente `assets/css/app.css` e `assets/js/app.js`. Os bundles antigos permanecem em `assets/` como referência e não participam da execução.

## Fluxo da interface

1. Definir o prefixo da tabela e o nome/propriedades do campo SX3.
2. Selecionar inicializador para `X3_RELACAO`.
3. Configurar validação em `X3_VALID` ou `X3_VLDUSER`.
4. Informar domínio, contradomínio e parâmetros do gatilho SX7.
5. Escolher `Posicione` ou regra livre e copiar as saídas.

O JavaScript guarda as três escolhas de template e recalcula as prévias a partir dos controles. O tema usa `localStorage` quando disponível. Não há React, TanStack, Tailwind, npm ou build. Execute `python -m http.server 8000` na raiz. Revise as expressões em um ambiente Protheus real antes de usá-las.

O card Utilidades ADVPL é independente do editor modal e serve para copiar expressões frequentes sem criar um campo. Ele reúne inicializadores, valores fixos e validações compostas, incluindo modelos que recebem parâmetro/lista/limite. Seus valores e métodos selecionados são persistidos no `localStorage` junto do projeto. As expressões que dependem de tabela, campo, tipo ou índice devem ser revisadas no ambiente Protheus antes de uso.

Em telas largas, o editor à esquerda e os resultados à direita têm rolagens verticais independentes. Na coluna direita ficam as utilidades ADVPL e, quando houver gatilho SX7 no campo ativo, as Tabelas frequentes e o Resumo do gatilho SX7. Em telas de até 900 px, a interface volta a uma coluna com rolagem normal da página.

O input Nome base limita a entrada ao espaço restante dos 10 caracteres do nome SX3, sempre combinando o prefixo da tabela com sublinhado. Caracteres excedentes e espaços colados são descartados; ao trocar o prefixo da tabela, os nomes dos campos e as prévias são recalculados automaticamente.

Os seletores Tabela consultada exibem código e descrição das tabelas conhecidas, conforme a lista fornecida na exportação Lovable. As expressões usam apenas o código. A opção Outra tabela permite informar um alias não listado; na regra do gatilho, escolher uma tabela conhecida também sugere o campo de retorno correspondente.

A seção 7 gera artefatos MVC Tipo 1: um JSON de cenário com `tabelas`, `campos` e as coleções padrão do `advpl-testlab`, e um fonte `.prw` com `FWMBrowse`, `MenuDef`, `ModelDef`, `ViewDef` e `fVldSalvar()`. O prefixo da tabela fica no card Campos da tabela, fora do modal, e é a única fonte do alias usado no JSON e no `.prw`. A coleção de campos é mantida pela página: cada item guarda nome, propriedades, inicializador, validação, contradomínio e regra do gatilho. Ao selecionar um item ou criar um novo, as seções 1–6 são abertas em um modal com rolagem própria. O gerador MVC usa essa coleção diretamente e oferece copiar/baixar. `fVldSalvar()` deliberadamente não implementa regras de negócio.

No editor modal, os toggles ficam em uma área de controles própria, fora dos cards. Este campo possui inicializador padrão?, Este campo possui validação? e Possui gatilho SX7 controlam a exibição dos cards correspondentes. Campos novos começam com inicializador e validação desativados, mas sem gatilho.

Cada campo possui a opção `hasTrigger`. Quando desmarcada, a seção de regra do gatilho e o card Resumo do gatilho SX7 ficam ocultos para o campo ativo. Campos novos começam sem gatilho; o usuário pode ativá-lo no modal.

## 2026-10-24 — Ambiente unificado

A ferramenta ativa agora é servida pelo projeto `eliezer-dev` na rota `/solucoes/protheus-mega-brain`. Este documento mantém o contexto funcional do projeto original. A migração está descrita em `MIGRACAO.md`.
