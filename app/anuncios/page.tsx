const bannerBots = './assets/banner-crio-bots-para-telegram.png';
const bannerSites = './assets/banner-crio-sites-para-telegram.png';
export default function Page() {
  const ads = [
    {
      title: null,
      image: bannerBots,
      urgent: false,
      redirect: '',
    },
    {
      title: null,
      image: bannerSites,
      urgent: true,
      redirect: '',
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
