# Colunas calculadas do browse

No Protheus Mega Brain, na coluna direita, abaixo de **Utilitário: legendas do browse**, abra **Utilitário: colunas calculadas do browse → Adicionar coluna calculada**. Informe título, campo de origem e conteúdo exibido. O alias vem do campo **Alias** do painel direito, no utilitário de legendas; o card mostra o alias efetivamente usado. As definições continuam integradas ao fonte MVC completo.

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
- **Descrição de produto — Posicione (SB1):** gera `Posicione("SB1", 1, xFilial("SB1") + ALIAS->CAMPO, "B1_DESC")`. Para o patrimônio, use alias ZA4 e campo ZA4_PROD. Pressupõe o índice 1 padrão da SB1 e tamanhos de filial/produto compatíveis com o dicionário. Esse modo não usa FwGetUserName, que serve apenas para códigos de usuários.
- **Valor do campo:** `cValToChar(ALIAS->CAMPO)` apresenta seu conteúdo como caractere.
- **Expressão personalizada:** informe uma expressão ADVPL que retorne caractere, por exemplo `Posicione(...)`. As funções, tabelas e índices usados devem existir no ambiente; o site gera código e não executa a expressão.

Todas as colunas são geradas como caractere, máscara `@!`, tamanho 60 e zero decimais, conforme o exemplo de referência. Ajuste esses parâmetros no fonte quando necessário. Uma coluna incompleta bloqueia a geração do PRW até ser corrigida ou removida.

Novas colunas começam em **Valor do campo**, evitando aplicar uma resolução de usuário sem escolha explícita. Para uma coluna de produto já salva no modo Nome do usuário, selecione o novo modo de produto. O alias do painel direito também é persistido com as colunas.

O trecho isolado sempre usa o Alias da direita. Para inserir as colunas no fonte MVC completo, esse alias e o prefixo da tabela à esquerda devem coincidir. Se divergirem, o site mostra orientação e bloqueia o PRW completo, preservando a cópia do trecho isolado; não gera um browse de uma tabela com code blocks apontando silenciosamente para outra.

Correção de 05/11/2026: adicionados o preset de produto, o alias do painel direito, o bloqueio de divergência e testes específicos. Os cinco testes do gerador passaram. No navegador, o preset gerou `Posicione` com alias `ZA4`, integrou o trecho ao PRW completo, manteve o aviso do SX3 visível e persistiu alias e coluna após recarregar.

`SetFields` adiciona colunas; não remove automaticamente as originais. Para mostrar somente os nomes, desabilite no SX3 a exibição no browse dos campos de código (no exemplo, Z04_USER e Z04_APROVA). O utilitário não altera o SX3, a estrutura do modelo MVC ou o conteúdo gravado. Essa personalização pertence ao browse e não depende da classificação do MVC.

Essa orientação aparece em um aviso destacado no card do navegador, com o exemplo ZA4_PROD e a distinção entre ocultar a coluna no browse e manter o campo no formulário. Para exibir código e descrição, a coluna original deve continuar habilitada.

Em telas acima de 900px, a coluna direita dos utilitários recebe mais espaço (proporção 1:1,25 entre editor e utilitários). Em telas menores, permanece a disposição em uma coluna. O navegador confirmou a grade em aproximadamente 487 px para o editor e 609 px para os utilitários no viewport de teste.

## Possível evolução da CLI

Ainda não existe flag de geração de colunas calculadas no AdvPLab. Uma futura implementação pode receber uma lista com título, campo de origem e modo/expressão, compartilhar a geração de `SetFields` com os modelos e documentar o ajuste de visibilidade no SX3. A sintaxe da flag ainda precisa ser definida.

Critérios: preservar projetos existentes sem colunas extras por padrão; validar entradas; inserir o trecho antes de Activate; manter mock e preview coerentes; exigir retornos simulados para resoluções de usuário e consultas no teste local. O site não deve registrar funções reais do ambiente como dados simulados inventados.
