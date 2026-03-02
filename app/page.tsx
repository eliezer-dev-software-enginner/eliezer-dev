import { projects, techs } from './data';

import Image from 'next/image';
import CardProjectComponent from './components/CardProjectComponent';
import RoundedImageComponent from './components/RoundedImageComponent';
import s from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        {/* Image Container - Using a larger size for the hero image */}
        <div className={s.headerChildTop}>
          <RoundedImageComponent />
        </div>

        <h1 className={s.title}>Engenheiro de Software</h1>

        <h2 className={s.subtitle}>Curioso e criador!</h2>

        <h3 className={s.greeting}>
          Oi, como vai? Sou <strong>Eliezer Assunção de Paulo</strong> 👋
        </h3>

        {/* Professional Description Block - Clean, readable text block */}
        <p className={s.description}>
          Há mais de 6 anos atuo na criação de aplicações web utilizando{' '}
          <strong>React</strong>, tanto em projetos profissionais quanto
          pessoais. Tenho experiência sólida em integrações com APIs, Firebase,
          testes com Jest e depuração de código, sempre com atenção à
          escalabilidade e à qualidade do produto final. Sou uma pessoa
          colaborativa, de fácil convivência, comprometida com entregas bem
          feitas e com o crescimento do time. Atualmente, estou expandindo meu
          conhecimento com <strong>Next.js</strong>, buscando sempre evoluir
          como desenvolvedor e contribuir com soluções modernas e eficientes.
          Tenho confiança de que posso agregar valor ao seu time de
          desenvolvimento e ajudar a superar os desafios com leveza, técnica e
          dedicação.
        </p>

        <div className={s.actionLinks}>
          {/* LinkedIn Button - Professional Blue */}
          <a
            href='https://www.linkedin.com/in/eliezersoftwareenginner/'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-lg bg-blue-700 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-blue-700/50 transition duration-300 hover:bg-blue-600 hover:shadow-blue-600/70'
          >
            <i className='fab fa-linkedin mr-2'></i> LinkedIn
          </a>

          <a
            href='https://www.linkedin.com/in/eliezersoftwareenginner/'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-lg bg-green-600 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-green-600/50 transition duration-300 hover:bg-green-500 hover:shadow-green-500/70'
          >
            <i className='fab fa-whatsapp mr-2'></i> WhatsApp
          </a>

          <a
            href='https://blog-do-eliezer.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-lg px-6 py-3 text-lg font-bold text-white shadow-lg shadow-blue-600/50 transition duration-300 hover:bg-blue-600 hover:shadow-blue-500/70'
          >
            <i className='fas fa-blog mr-2'></i> Meu Blog
          </a>
        </div>
      </header>

      <div className='border-t border-gray-700 w-full' role='separator'></div>

      <section className='flex flex-col lg:flex-row gap-12 lg:gap-24'>
        <div>
          <span
            className='font-bold mb-8 text-indigo-400'
            style={{ fontSize: '1.7em' }}
          >
            Minhas principais tecnologias
          </span>

          <div className={s.tecnologias_container}>
            {techs.map((v, i) => (
              <div
                key={`${v.alt}-${i}`}
                className='flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:shadow-indigo-500/50 transition duration-300'
              >
                {/* Tech Icon - Ensure images are sized correctly */}
                <Image
                  src={v.src}
                  alt={v.alt}
                  className='w-10 h-10 mb-2 object-contain'
                  objectFit='contains'
                />
                {/* Tech Name */}
                <span className='text-xs font-medium text-gray-300 text-center'>
                  {v.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className='border-t border-gray-700 w-full' role='separator'></div>

      {/* 3. Projects Section - Grid of cards */}
      <section>
        <h2 className='text-4xl font-extrabold text-center mb-12 text-gray-50'>
          Ferramentas que criei e estão no ar 🚀
        </h2>

        {/* Grid layout for projects. Responsive: 1 column on mobile, 2 on medium, 3 on large */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((v, i) => (
            // CardProjectComponent will also be updated with Tailwind
            <CardProjectComponent
              key={i}
              cover={v.cover}
              coverAlt={v.coverAlt}
              description={v.description}
              title={v.title}
              btnText={v.btnText}
              href={v.href}
              techs={v.techs}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
