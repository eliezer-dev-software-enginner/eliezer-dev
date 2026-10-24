# TODO

## Pendente

- [ ] Conferir expressões e parâmetros em uma instalação Protheus representativa, especialmente funções e índices específicos do ambiente.
- [ ] Criar testes automatizados para todos os templates e limites de nomes SX3/SX7.
- [ ] Decidir se os bundles antigos de referência devem ser arquivados fora do projeto ou removidos.
- [ ] Adicionar favicon próprio, se desejado.

## Concluído em 2026-09-22

- [x] Exibidos código e descrição nas opções de Tabela consultada, preservando aliases personalizados e o código nas expressões.
- [x] Limitado o input Nome base ao espaço disponível nos 10 caracteres do campo SX3, inclusive após colagem ou alteração do prefixo.
- [x] Invertida a ordem de Tabelas frequentes e Resumo do gatilho SX7, com rolagens independentes nas duas colunas em telas largas.
- [x] Organizada a estrutura com `index.html`, `assets/` e os cinco documentos em `docs/`.
- [x] Reconstruída a interface em HTML, CSS e JavaScript próprios, baseada nas capturas e bundles fornecidos.
- [x] Removida a dependência dos bundles compilados durante a execução.
- [x] Implementada a troca dos templates de inicialização, validação e gatilho, com prévias e cópia.
- [x] Verificada no navegador a troca de GetSXENum para GetSX8Num e Data atual.

## Concluído em 2026-09-24

- [x] Adicionado card Utilidades ADVPL com inicializadores e validações rápidas copiáveis fora do modal.
- [x] Ampliadas as utilidades ADVPL com 20 atalhos adicionais e descrições de uso.
- [x] Condicionada a exibição de Tabelas frequentes ao uso de gatilho SX7 no campo ativo.
- [x] Movido o prefixo da tabela para o card Campos da tabela, fora do modal, usando-o como alias único do gerador MVC.
- [x] Removido o prefixo duplicado do modal; campos usam automaticamente o prefixo da tabela.
- [x] Tornados condicionais os cards de inicializador, validação e gatilho conforme seus toggles.
- [x] Definidos inicializador e validação como desativados por padrão em novos campos.
- [x] Refatoradas as seções 1–6 para manter uma coleção de campos, com criação, seleção e edição individual.
- [x] Movidas as seções de configuração do campo para um modal com rolagem própria, aberto pela lista ou por Novo campo.
- [x] Tornado o gatilho SX7 opcional por campo, ocultando o resumo quando não houver gatilho.
- [x] Removido o textarea `NOME|TIPO`; o JSON e o `.prw` MVC usam diretamente os campos configurados.
- [x] Adicionado gerador MVC Tipo 1 com JSON compatível com advpl-testlab e fonte `.prw` copiável/baixável.
- [x] Mantido `fVldSalvar()` como esqueleto sem validações de negócio.

## 2026-10-24 — Após a migração

- [ ] Avaliar importação manual de configurações de outros hosts/portas, pois o localStorage antigo não migra automaticamente.
