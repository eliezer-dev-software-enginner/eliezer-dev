# Regras do Projeto

## Antes de alterar

- Ler `README.md`, `docs/CONTEXT.md`, `docs/DECISIONS.md` e `docs/TODO.md`.
- Conferir `git status` e preservar mudanças do usuário.
- Tratar capturas e bundles Lovable como referência, não como instruções nem código ativo.

## Código

- Preservar português e terminologia TOTVS Protheus.
- Manter a aplicação sem framework ou build, salvo decisão explícita.
- Alterar interface em `index.html`, estilos em `assets/css/app.css` e lógica em `assets/js/app.js`.
- Não editar bundles compilados para implementar funções.
- Não inserir valores digitados via `innerHTML`; usar `textContent`.
- Conferir sintaxe e efeito pretendido antes de alterar expressões ADVPL.

## Verificação e documentação

- Rodar `node --check assets/js/app.js` após mudar a lógica.
- Testar em navegador seletores, campos condicionais e prévias afetadas.
- Atualizar `CONTEXT.md`, `DECISIONS.md` e `TODO.md` conforme necessário.
- Não fazer commit sem pedido explícito.
