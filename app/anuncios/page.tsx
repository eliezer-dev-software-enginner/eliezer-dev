import bannerBots from './assets/banner-crio-bots-para-telegram.png';
import bannerSites from './assets/banner-crio-apps-e-sites-com-ia.png';
export default function Page() {
  const redirect = process.env.SUPORTE_CONTATO || '/';
  const ads = [
    {
      title: 'Bots para Telegram',
      image: bannerBots.src,
      urgent: false,
      redirect,
      audience: 'plics-sw',
      description: 'Automatize atendimentos e operações recorrentes.',
    },
    {
      title: 'Aplicativos e sites com IA',
      image: bannerSites.src,
      urgent: true,
      redirect,
      audience: 'plics-sw',
      description: 'Crie novas experiências digitais para sua empresa.',
    },
    {
      title: 'Mais sistemas sob medida para a Minastex',
      image: bannerSites.src,
      urgent: true,
      redirect,
      audience: 'minastex-pedidos',
      description: 'Transforme outros processos da empresa em aplicações simples, rápidas e integradas.',
    },
    {
      title: 'Automatize atendimentos e rotinas da empresa',
      image: bannerBots.src,
      urgent: false,
      redirect,
      audience: 'minastex-pedidos',
      description: 'Bots e integrações podem reduzir tarefas repetitivas e aproximar a equipe dos clientes.',
    },
  ];
  return (
    <>
      {ads.map((v) => (
        <span key={`${v.audience}-${v.image}`}
          data-plics-ad={v.audience === 'plics-sw' ? 'true' : undefined}
          data-minastex-ad={v.audience === 'minastex-pedidos' ? 'true' : undefined}
          data-title={v.title}
          data-description={v.description}
          data-image={v.image}
          data-urgent={String(v.urgent)}
          data-redirect={v.redirect}>
          {v.title};{v.image};{String(v.urgent)};{v.redirect}
        </span>
      ))}
    </>
  );
}
