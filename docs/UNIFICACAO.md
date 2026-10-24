# Unificação Next.js — 18/10/2026

## Estrutura

`eliezer-dev` é a única aplicação Next.js. O portfólio permanece em `/`, o blog em `/blog` e PLICS SW em `/solucoes/plics-sw`. Páginas, API, assets e server actions foram copiados para suas áreas. Os repositórios de origem foram preservados para comparação e não são mais a fonte do deploy unificado.

## Endpoints e clientes PLICS SW

- Página: `https://<domínio>/solucoes/plics-sw`
- Download gratuito: `/solucoes/plics-sw#baixar` (a antiga rota de compra redireciona para cá)
- Atualizações: `/solucoes/plics-sw/atualizacao`
- Política: `/solucoes/plics-sw/politica-de-privacidade`
- Webhook Mercado Pago para o serviço separado de Instagram: `https://<domínio>/solucoes/plics-sw/api/webhook`

Configure `NEXT_PUBLIC_APP_URL` com a **origem**, sem o caminho `/solucoes/plics-sw`. O código também aceita o caminho antigo no valor e o remove antes de construir o webhook. Atualize no Mercado Pago, no aplicativo desktop e em outros clientes qualquer URL absoluta que aponte para o domínio antigo. O código desses clientes não está neste workspace.

## Deploy

Use `.env.example` como lista de configuração, sem copiar segredos ao Git. Preserve as variáveis dos projetos de origem: Firebase (blog), `PRISMA_URL` (Prisma), Mercado Pago, SMM, PIX, suporte e URLs públicas. Rode `npm install`, `npx prisma generate` e `npm run build` em `eliezer-dev`. Use o schema Prisma de `eliezer-dev/prisma/schema.prisma` sem recriar tabelas em produção. Valide o serviço de Instagram e os downloads em um ambiente de teste antes de trocar DNS ou tráfego de clientes.

## Compatibilidade

O alias antigo de anúncio `/solucoes/plics-sw/comprar-inscritos-instagram` e a rota anterior `/solucoes/plics-sw/impulsionar-instagram` redirecionam para `/solucoes/impulsionar-instagram`. Para o domínio antigo do PLICS e o domínio antigo do blog, configure redirects no provedor dos respectivos domínios para o novo domínio; o app unificado não controla requisições recebidas por domínios que não apontem para ele.

## Pendências de validação

Instalação de dependências, `prisma generate`, TypeScript e build de produção passaram em 18/10/2026. Sem as variáveis Firebase neste checkout, a home do blog não pode responder corretamente. Em ambiente de teste configurado, verificar login, leitura dos posts, pagamento PIX e webhook do serviço de Instagram antes do corte de produção. O lint identifica 22 erros preexistentes de estilo no código PLICS migrado; não foram alterados nesta leva.

## Plics SW gratuito — 18/10/2026

A compra do ERP, a concessão de acesso por pagamento e o formulário de licença para download foram removidos. A home e a página de atualização oferecem links diretos para os instaladores publicados no GitHub; a Microsoft Store permanece como alternativa para Windows. A antiga URL `/solucoes/plics-sw/comprar-plics-sw` redireciona para `#baixar`. O webhook PIX atende somente ao produto separado `instagram-followers`. O modelo `UserPurchase` permanece no schema para preservar registros históricos, sem uso no fluxo atual. A distribuição gratuita do site não altera o executável desktop; qualquer verificação de licença embutida nele precisa ser removida no repositório do aplicativo.

## Ambiente local do blog — 18/10/2026

As variáveis Firebase existentes em `meu-blog-app/.env.local` foram copiadas para `eliezer-dev/.env.local` localmente. O arquivo é ignorado pelo Git. Em novos ambientes, configure as chaves `NEXT_PUBLIC_FIREBASE_*` e `ADMIN_API_SECRET` a partir de um gerenciador de segredos; reinicie o servidor Next após alterá-las. O erro `auth/invalid-api-key` em `/blog` indica ausência ou valor incorreto de `NEXT_PUBLIC_FIREBASE_API_KEY`. A mensagem `Failed to benchmark file I/O` do Turbopack é separada desse erro.

## Rota do impulsionamento — 18/10/2026

A página do serviço separado de impulsionamento está em `/solucoes/impulsionar-instagram`. Os links internos, sitemap e redirecionamentos apontam para esse caminho. As ações PIX e o webhook mantêm a lógica e o endpoint de pagamento existentes; apenas a rota pública da página mudou.

## Protheus Mega Brain — 24/10/2026

A ferramenta foi incorporada em `/solucoes/protheus-mega-brain`. O HTML, CSS e JavaScript ativos ficam em `public/solucoes/protheus-mega-brain`; o histórico e as decisões da migração estão em `docs/protheus-mega-brain/MIGRACAO.md`. O repositório antigo foi arquivado em um bundle antes da remoção local.
