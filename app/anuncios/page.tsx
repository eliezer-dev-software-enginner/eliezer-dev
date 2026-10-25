const bannerBots = './assets/banner-crio-bots-para-telegram.png';
const bannerSites = './assets/banner-crio-sites-para-telegram.png';
export default function Page() {
  const ads = [
    {
      title: null,
      image: bannerBots,
      urgent: false,
      redirect: '' + process.env.SUPORTE_CONTATO,
    },
    {
      title: null,
      image: bannerSites,
      urgent: true,
      redirect: '' + process.env.SUPORTE_CONTATO,
    },
  ];
  return (
    <>
      {ads.map((v, i) => (
        <span key={i}>
          {v.title};{v.image};{v.urgent};{v.redirect}
        </span>
      ))}
    </>
  );
}
