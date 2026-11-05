# Colunas calculadas do browse

No Protheus Mega Brain, na coluna direita, abaixo de **Utilitário: legendas do browse**, abra **Utilitário: colunas calculadas do browse → Adicionar coluna calculada**. Informe título, campo de origem e conteúdo exibido. O alias vem do prefixo da tabela no topo do gerador, à esquerda. As definições continuam integradas ao fonte MVC completo.

Para reproduzir o cadastro de solicitação de compra, use alias `Z04` e adicione:

| Título | Campo | Conteúdo exibido |
| --- | --- | --- |
| Solicitante | Z04_USER | Nome do usuário |
| Aprovador | Z04_APROVA | Nome do usuário |

O trecho produzido usa o mesmo mecanismo do fonte de referência:

```advpl
oBrowse:SetFields({ ;
    { "Solicitante", {|| FwGetUserName(Z04->Z04_USER)}, 'C', '@!', 1, 60, 0 }, ;
    { "Aprovador", {|| FwGetUserName(Z04->Z04_APROVA)}, 'C', '@!', 1, 60, 0 } ;
})
```

O gerador insere o trecho antes de `oBrowse:Activate()` no fonte completo. É possível copiar somente o trecho, copiar o fonte completo ou baixar o `.prw`; as três saídas usam as mesmas definições. As colunas são salvas com o projeto no navegador e restauradas ao reabrir a página.

## Validação

Em 05/11/2026, o fluxo local no navegador foi validado com Solicitante/Z04_USER e Aprovador/Z04_APROVA: geração antes de Activate, reabertura com persistência, cópia do trecho e equivalência do PRW baixado com a prévia. Também foram conferidos os modos de expressão personalizada e campo direto, a validação de coluna incompleta e a remoção de uma coluna. Não houve compilação no RPO nesta alteração.

Testes de geração: `node tests/protheus-browse-columns.test.cjs` na raiz do site.

## Modos e limites

- **Nome do usuário:** `FwGetUserName(ALIAS->CAMPO)` resolve o nome no ambiente Protheus.
- **Valor do campo:** `cValToChar(ALIAS->CAMPO)` apresenta seu conteúdo como caractere.
- **Expressão personalizada:** informe uma expressão ADVPL que retorne caractere, por exemplo `Posicione(...)`. As funções, tabelas e índices usados devem existir no ambiente; o site gera código e não executa a expressão.

Todas as colunas são geradas como caractere, máscara `@!`, tamanho 60 e zero decimais, conforme o exemplo de referência. Ajuste esses parâmetros no fonte quando necessário. Uma coluna incompleta bloqueia a geração do PRW até ser corrigida ou removida.

`SetFields` adiciona colunas; não remove automaticamente as originais. Para mostrar somente os nomes, desabilite no SX3 a exibição no browse dos campos de código (no exemplo, Z04_USER e Z04_APROVA). O utilitário não altera o SX3, a estrutura do modelo MVC ou o conteúdo gravado. Essa personalização pertence ao browse e não depende da classificação do MVC.

## Possível evolução da CLI

Ainda não existe flag de geração de colunas calculadas no AdvPLab. Uma futura implementação pode receber uma lista com título, campo de origem e modo/expressão, compartilhar a geração de `SetFields` com os modelos e documentar o ajuste de visibilidade no SX3. A sintaxe da flag ainda precisa ser definida.

Critérios: preservar projetos existentes sem colunas extras por padrão; validar entradas; inserir o trecho antes de Activate; manter mock e preview coerentes; exigir retornos simulados para resoluções de usuário e consultas no teste local. O site não deve registrar funções reais do ambiente como dados simulados inventados.
