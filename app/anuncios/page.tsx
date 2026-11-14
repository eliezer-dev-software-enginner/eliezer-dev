import bannerAndroid from './assets/banner-app-android-sob-medida-1254x1254.png';
import bannerSites from './assets/banner-crio-apps-e-sites-com-ia.png';
import bannerBots from './assets/banner-crio-bots-para-telegram.png';
export default function Page() {
  const redirect = process.env.SUPORTE_CONTATO || '/';
  const ads = [
    {
      title: 'Bots para Telegram',
      image: bannerBots.src,
      urgent: false,
      redirect,
      audience: ['plics-sw', 'minastex-pedidos'],
      description: 'Automatize atendimentos e operações recorrentes.',
    },
    {
      title: 'Aplicativos e sites com IA',
      image: bannerSites.src,
      urgent: true,
      redirect,
      audience: ['plics-sw', 'minastex-pedidos'],
      description: 'Crie novas experiências digitais para sua empresa.',
    },
    {
      title: 'Sua empresa merece um aplicativo próprio!',
      image: bannerAndroid.src,
      urgent: true,
      redirect,
      audience: ['plics-sw'],
      description:
        'Transforme sua ideia em um aplicativo Android sob medida. Você imagina, eu desenvolvo!',
    },
  ];
  return (
    <>
      {ads.map((v) => (
        <span
          key={`${v.audience.join('-')}-${v.image}`}
          data-audiences={v.audience.join(',')}
          data-plics-ad={v.audience.includes('plics-sw') ? 'true' : undefined}
          data-minastex-ad={
            v.audience.includes('minastex-pedidos') ? 'true' : undefined
          }
          data-title={v.title}
          data-description={v.description}
          data-image={v.image}
          data-urgent={String(v.urgent)}
          data-redirect={v.redirect}
        >
          {v.title};{v.image};{String(v.urgent)};{v.redirect}
        </span>
      ))}
    </>
  );
}
