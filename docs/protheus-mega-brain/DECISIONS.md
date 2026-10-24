# Decisões Arquiteturais

## 2026-09-24 — utilidades ADVPL fora do editor de campo

**Decisão:** disponibilizar um card permanente de utilidades na coluna de resultados, com campo, tabela/alias e atalhos de inicializadores e validações copiáveis.

**Motivo:** expressões como `GetSXENum` e `Positivo()` são úteis isoladamente e não devem exigir criar ou editar um campo para serem copiadas.

**Consequência:** as utilidades têm estado próprio, persistido no `localStorage`, sem alterar as configurações do campo em edição.

## 2026-09-24 — prefixo da tabela fora do modal

**Decisão:** manter o prefixo da tabela no card Campos da tabela, acima da lista, e não dentro do editor modal de cada campo. O gerador MVC lê esse valor para definir o alias do JSON e do fonte `.prw`.

**Motivo:** o prefixo identifica a tabela inteira, enquanto o modal representa apenas um campo. Um único controle evita repetir ou divergir o alias entre campos.

**Consequência:** o prefixo fica visível na página principal e o modal continua reservado às configurações específicas do campo.

## 2026-09-24 — prefixo aplicado automaticamente aos campos

**Decisão:** remover do modal o input de prefixo específico do campo. Todo nome SX3 é composto automaticamente pelo prefixo da tabela, um sublinhado e o nome base.

**Motivo:** o prefixo é uma propriedade da tabela, não de cada campo; manter uma segunda entrada permitia inconsistências entre campos da mesma tabela.

**Consequência:** trocar o prefixo no card Campos da tabela recalcula os nomes completos, limites e prévias de todos os campos.

## 2026-09-24 — cards condicionais no editor de campo

**Decisão:** manter os toggles de inicializador, validação e gatilho em uma área de controles fora dos cards, ocultando os cards correspondentes quando estiverem desativados. O toggle de gatilho oculta tanto a relação quanto a regra SX7.

**Motivo:** o modal deve mostrar somente as configurações aplicáveis ao campo atual, evitando que seções desnecessárias pareçam obrigatórias.

**Consequência:** cada campo salva as flags de inicializador e validação junto das demais configurações; os controles continuam disponíveis mesmo quando um card está oculto, e o gatilho continua controlando também o resumo SX7.

Inicializador e validação começam desativados para evitar gerar regras que o usuário não solicitou.

## 2026-09-24 — gatilho SX7 opcional por campo

**Decisão:** adicionar a opção Possui gatilho SX7 em cada campo. Quando desmarcada, ocultar a seção de regra do gatilho e o Resumo do gatilho SX7 para o item ativo; novos campos começam sem gatilho.

**Motivo:** nem todo campo de uma tabela atualiza um contradomínio. O resumo não deve sugerir um gatilho inexistente.

**Consequência:** a relação do campo continua disponível para reativar o gatilho. A coleção salva essa escolha junto das demais configurações.

## 2026-09-24 — editor de campo em modal

**Decisão:** retirar as seções 1–6 do fluxo visual principal e movê-las para um modal com rolagem própria. A lista de campos permanece na página; clicar em um campo ou em Novo campo abre o editor correspondente.

**Motivo:** evitar que a página fique verticalmente extensa quando houver muitos campos e deixar explícito que as configurações pertencem ao item selecionado.

**Consequência:** o botão Salvar e fechar registra o estado atual e fecha o editor; a coleção e as saídas MVC continuam na página principal.

## 2026-09-24 — coleção de campos com configuração própria

**Contexto:** as seções de propriedades, inicializador, validação e gatilho descreviam um único campo, enquanto um MVC precisa de vários campos da mesma tabela.

**Decisão:** criar uma coleção de campos na página. O botão Novo campo cria um item, a lista permite selecionar o item ativo e cada registro guarda as configurações das seções 1–6. O gerador MVC deriva o JSON e o `.prw` dos itens salvos, sem textarea separado para campos.

**Motivo:** manter a configuração do campo junto de suas regras e evitar divergência entre o formulário visual e os artefatos gerados.

**Consequência:** o campo selecionado continua sendo editado pelas seções 1–6; é necessário selecionar outro item para editá-lo. O primeiro campo é criado com os valores iniciais da página.

## 2026-09-24 — geração de JSON e fonte MVC Tipo 1

**Decisão:** incluir um gerador nativo para o modelo Tipo 1 (`FWMBrowse` + `MPFormModel`) com alias, função, descrição, chave primária e campos editáveis. A saída JSON segue a estrutura observada em `caminho-protheus/Fontes/mvc/desafio1/advpl-testlab.jsonc`; a saída ADVPL segue o formato de `ZA1MVC.prw`.

**Motivo:** permitir que a página produza artefatos prontos para copiar ou baixar, sem manter exemplos estáticos e sem depender do Lovable.

**Consequência:** o JSON começa com registros vazios e sem cenários, e o fonte deixa `fVldSalvar()` como ponto de extensão com `aErros := {}`. Validações específicas continuam sendo responsabilidade do usuário.

## 2026-09-22 — rolagem independente por coluna

**Decisão:** limitar a área de trabalho à altura disponível abaixo do cabeçalho e permitir rolagem vertical separada no editor e nos resultados. Em telas de até 900 px, manter uma única rolagem da página para não criar áreas estreitas de rolagem aninhadas.

**Motivo:** consultar as tabelas e o resumo enquanto se percorrem os formulários, sem perder a posição de nenhuma coluna.

## 2026-09-22 — reconstrução independente da exportação Lovable

**Contexto:** a primeira versão executava bundles extraídos com adaptação da inicialização TanStack/React. O usuário esclareceu que os dados fornecidos deveriam servir de base para criar um HTML do zero. No servidor local dele, a seleção do inicializador continuava congelada.

**Decisão:** implementar a página em `index.html`, `assets/css/app.css` e `assets/js/app.js`, sem framework e sem carregar os bundles extraídos. Recriar layout, templates e prévias conforme capturas e comportamento observado.

**Motivo:** o aplicativo passa a ter fonte legível e editável, sem depender de um runtime compilado ou de hidratação parcial.

**Consequência:** bundles antigos ficam apenas como referência em `assets/`. Mudanças funcionais vão nos três arquivos ativos. A equivalência das expressões ADVPL ainda precisa ser conferida em Protheus real.

## 2026-09-22 — saídas recalculadas a partir dos controles

**Decisão:** manter em memória apenas a escolha de cada grupo (`init`, `valid`, `trigger`). Os demais valores são lidos dos campos e todas as saídas são atualizadas em um único fluxo usando `textContent`.

**Motivo:** evitar divergência entre seleção, campos condicionais e resumo, sem interpretar HTML digitado pelo usuário.

## Histórico substituído

A versão inicial preservava o DOM exportado e carregava bundles Lovable com ajustes de CSS e inicialização React. Essas decisões foram substituídas pela reconstrução acima.

## 2026-10-24 — Página dedicada no eliezer-dev

A aplicação nativa foi incorporada em uma página Next por iframe de mesma origem, preservando comportamento e isolando estilos. Os arquivos ativos estão em `public/solucoes/protheus-mega-brain` e o histórico Git foi salvo em `history.bundle`. Veja `MIGRACAO.md`.
