# Protheus Mega Brain

Gerador local de campos SX3 e gatilhos SX7 para o TOTVS Protheus. Ajuda a compor inicializador, validação e regra ADVPL para cadastro no SIGACFG.

## Requisitos e execução

É necessário um navegador com JavaScript habilitado. Para servir os arquivos localmente, use Python 3: na pasta deste projeto, rode `python3 -m http.server 8000` e abra `http://localhost:8000/`. Se o comando `python3` não estiver disponível, use o executável do Python 3 instalado no seu computador. Use `Ctrl+F5` se o navegador ainda mostrar a versão anterior em cache.

## Estrutura

- `index.html`: marcação da interface.
- `assets/css/app.css`: estilos próprios e responsivos.
- `assets/js/app.js`: comportamento e geração das expressões.
- `docs/`: contexto, decisões, pendências e instruções de manutenção.

Os antigos bundles compilados do Lovable continuam em `assets/` somente como referência; o HTML atual não os carrega. Não há build nem instalação de pacotes. Revise as expressões geradas no contexto do dicionário e da versão Protheus antes de aplicá-las.

As configurações do projeto são salvas automaticamente no `localStorage` do navegador e restauradas ao reabrir ou atualizar a página no mesmo navegador e endereço.

## Utilidades ADVPL

O card **Utilidades ADVPL** fica disponível fora do modal. Informe um campo e, quando necessário, uma tabela/alias e parâmetro/valor para gerar e copiar rapidamente inicializadores e validações frequentes. Ele inclui atalhos como `GetMv`, `CriaVar`, `xFilial`, `Pertence`, `Empty` e composições opcionais com `ExistCpo`.

## Geração MVC

Na seção **Campos da tabela**, informe o prefixo da tabela e crie/selecione quantos campos forem necessários. Ao clicar em um campo ou em **Novo campo**, o editor abre em um modal com rolagem própria. Ative inicializador, validação e gatilho conforme a necessidade do campo. Em **7. Gerador MVC**, o prefixo informado acima define o alias; complete função, descrição e chave primária. A página usa a coleção de campos para gerar um JSON compatível com o `advpl-testlab` e um fonte `.prw` com `FWMBrowse`, `MenuDef`, `ModelDef`, `ViewDef` e `fVldSalvar()` vazio. Cada saída pode ser copiada ou baixada.

O gatilho SX7 é opcional por campo. Desmarque **Possui gatilho SX7** quando o campo não tiver contradomínio/regra automática; nesse caso, o card Resumo do gatilho SX7 não é exibido.
