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
    },
    {
      title: 'Aplicativos e sites com IA',
      image: bannerSites.src,
      urgent: true,
      redirect,
    },
  ];
  return (
    <>
      {ads.map((v) => (
        <span key={v.image}
          data-plics-ad="true"
          data-title={v.title}
          data-image={v.image}
          data-urgent={String(v.urgent)}
          data-redirect={v.redirect}>
          {v.title};{v.image};{String(v.urgent)};{v.redirect}
        </span>
      ))}
    </>
  );
}
