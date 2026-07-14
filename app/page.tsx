import { projects, techs, certificates } from './data';

import Image from 'next/image';
import CardProjectComponent from './components/CardProjectComponent';
import CardCertificateComponent from './components/CardCertificateComponent';
import RoundedImageComponent from './components/RoundedImageComponent';
import s from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={s.container}>
      {/* ========================
          HERO SECTION
          ======================== */}
      <header className={s.header}>
        {/* Avatar */}
        <div className={`${s.headerChildTop} fade-up`}>
          <RoundedImageComponent />
        </div>

        {/* Eyebrow */}
        <p className={`${s.eyebrow} fade-up fade-up-1`}>
          Engenheiro de Software Fullstack
        </p>

        {/* Main Title */}
        <h1 className={`${s.title} fade-up fade-up-2`}>
          Eu sou a <em>solução</em>.
        </h1>

        {/* Subtitle */}
        <h2 className={`${s.subtitle} fade-up fade-up-2`}>
          Curioso, criador e apaixonado pelo que faz.
        </h2>

        {/* Greeting */}
        <h3 className={`${s.greeting} fade-up fade-up-3`}>
          Oi 👋 Sou <strong>Eliezer Assunção de Paulo</strong>
        </h3>

        {/* Description */}
        <p className={`${s.description} fade-up fade-up-3`}>
          Há mais de 6 anos transformo ideias em aplicações reais
          independentemente da tecnologia; Seja atuando como freelance ou
          criando minhas próprias ferramentas. Ainda duvida? Vem conhecer o{' '}
          <strong>Plics SW</strong>, este é um aplicativo de gestão{' '}
          <strong>ERP</strong> que eu desenvolvi pra ajudar pequenos negócios a
          ter um aplicativo seguro, rápido e super fácil de usar.{' '}
          <strong>Tenho clientes</strong> nele, feedbacks e sempre estou dando
          suporte. Construí uma rede de apoio ao redor dele, tudo sem gastar 1
          centavo sequer. Postagens orgânicas e com IA, canal no Youtube,
          comunidades no reddit, canal no Pinterest e etc... O que eu quero
          dizer com isso? Eu quero dizer que eu entendo todo o fluxo de uma
          aplicação, desde o desenvolvimento até o engajamento e divulgação,{' '}
          <strong>eu sei o que funciona</strong> e o que não funciona! Vamos
          juntos transformar o seu negócio.
        </p>

        {/* CTA Buttons */}
        <div className={`${s.actionLinks} fade-up fade-up-4`}>
          <a
            href='https://www.linkedin.com/in/eliezersoftwareenginner/'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'var(--ink)',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              borderRadius: 'var(--radius-md)',
              border: '1px solid transparent',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 12px rgba(46, 58, 110, 0.3)',
            }}
          >
            <i className='fab fa-linkedin'></i> LinkedIn
          </a>

          <a
            href='https://github.com/eliezer-dev-software-enginner'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'transparent',
              color: 'var(--ink)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-strong)',
              transition: 'all 0.2s ease',
            }}
          >
            <i className='fab fa-github'></i> GitHub
          </a>

          <a
            href='https://wa.link/2gsv2z'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'var(--accent)',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              borderRadius: 'var(--radius-md)',
              border: '1px solid transparent',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-accent)',
            }}
          >
            <i className='fab fa-whatsapp'></i> WhatsApp
          </a>

          <a
            href='https://blog-do-eliezer.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'transparent',
              color: 'var(--ink-light)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-strong)',
              transition: 'all 0.2s ease',
            }}
          >
            <i className='fas fa-pen-nib'></i> Meu Blog
          </a>
        </div>
      </header>

      {/* Decorative divider */}
      <div className='art-divider' style={{ margin: '1rem 0 0' }} />

      {/* ========================
          TECHNOLOGIES SECTION
          ======================== */}
      <section className={s.section} style={{ paddingTop: '3.5rem' }}>
        <div>
          <h2 className={s.sectionTitle}>Minhas ferramentas</h2>
          <p className={s.sectionSubtitle}>
            Tecnologias que utilizo, nem sempre uso todas. Umas eu gosto mais,
            outras nem tanto
          </p>

          <div className={s.tecnologias_container}>
            {techs.map((v, i) => (
              <div key={`${v.alt}-${i}`} className={s.techChip}>
                <Image
                  src={v.src}
                  alt={v.alt}
                  width={36}
                  height={36}
                  style={{ objectFit: 'contain' }}
                />
                <span className={s.techChipLabel}>{v.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className='art-divider' />

      {/* ========================
          PROJECTS SECTION
          ======================== */}
      <section
        style={{ width: '100%', paddingTop: '0.5rem', paddingBottom: '2rem' }}
      >
        <h2 className={s.projectsSectionTitle}>
          Obras <em>que criei</em>
        </h2>
        <p className={s.projectsSectionSubtitle}>
          Ferramentas reais, rodando no ar — cada uma tem uma história.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.75rem',
            alignItems: 'start',
          }}
        >
          {projects.map((v, i) => (
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

      {/* ========================
          CERTIFICATES SECTION
          ======================== */}
      <section
        style={{ width: '100%', paddingTop: '0.5rem', paddingBottom: '2rem' }}
      >
        <h2 className={s.projectsSectionTitle}>
          Certificados <em>obtidos</em>
        </h2>
        <p className={s.projectsSectionSubtitle}>
          Cursos e certificações que complementam minha formação.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {certificates.map((v, i) => (
            <CardCertificateComponent
              key={i}
              title={v.title}
              urlSource={v.urlSource}
            />
          ))}
        </div>
      </section>

      {/* ========================
          FOOTER
          ======================== */}
      <footer
        style={{
          width: '100%',
          paddingTop: '3rem',
          paddingBottom: '1rem',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.85rem',
          color: 'var(--ink-faint)',
        }}
      >
        <p>
          Feito com <span style={{ color: 'var(--accent)' }}>✦</span> e café por{' '}
          <strong style={{ color: 'var(--ink-muted)' }}>
            Eliezer Assunção de Paulo
          </strong>
        </p>
        <p
          style={{ marginTop: '4px', fontSize: '0.78rem', fontStyle: 'italic' }}
        >
          &ldquo;Desenvolvendo soluções reais.&rdquo;
        </p>
      </footer>
    </div>
  );
}
