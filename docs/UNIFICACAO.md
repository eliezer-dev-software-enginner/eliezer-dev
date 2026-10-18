# Unificação Next.js — 18/10/2026

## Estrutura

`eliezer-dev` é a única aplicação Next.js. O portfólio permanece em `/`, o blog em `/blog` e PLICS SW em `/solucoes/plics-sw`. Páginas, API, assets e server actions foram copiados para suas áreas. Os repositórios de origem foram preservados para comparação e não são mais a fonte do deploy unificado.

## Endpoints e clientes PLICS SW

- Página: `https://<domínio>/solucoes/plics-sw`
- Compra: `/solucoes/plics-sw/comprar-plics-sw`
- Atualizações: `/solucoes/plics-sw/atualizacao`
- Política: `/solucoes/plics-sw/politica-de-privacidade`
- Webhook Mercado Pago: `https://<domínio>/solucoes/plics-sw/api/webhook`

Configure `NEXT_PUBLIC_APP_URL` com a **origem**, sem o caminho `/solucoes/plics-sw`. O código também aceita o caminho antigo no valor e o remove antes de construir o webhook. Atualize no Mercado Pago, no aplicativo desktop e em outros clientes qualquer URL absoluta que aponte para o domínio antigo. O código desses clientes não está neste workspace.

## Deploy

Use `.env.example` como lista de configuração, sem copiar segredos ao Git. Preserve as variáveis dos projetos de origem: Firebase (blog), `DATABASE_URL` (Prisma), Mercado Pago, SMM, PIX, suporte e URLs públicas. Rode `npm install`, `npx prisma generate` e `npm run build` em `eliezer-dev`. Use o schema Prisma de `eliezer-dev/prisma/schema.prisma` sem recriar tabelas em produção. Valide pagamento PIX e entrega de licença num ambiente de teste antes de trocar DNS ou tráfego de clientes.

## Compatibilidade

O alias antigo de anúncio `/solucoes/plics-sw/comprar-inscritos-instagram` redireciona para `/solucoes/plics-sw/impulsionar-instagram`. Para o domínio antigo do PLICS e o domínio antigo do blog, configure redirects no provedor dos respectivos domínios para o novo domínio; o app unificado não controla requisições recebidas por domínios que não apontem para ele.

## Pendências de validação

Instalação de dependências, `prisma generate`, TypeScript e build de produção passaram em 18/10/2026. Sem as variáveis Firebase e de preços neste checkout, a home do blog não pode responder corretamente e a compra do PLICS fica indisponível. Em ambiente de teste configurado, verificar login, leitura dos posts, pagamento PIX, webhook e entrega de licença antes do corte de produção. O lint identifica 22 erros preexistentes de estilo no código PLICS migrado; não foram alterados nesta leva.
