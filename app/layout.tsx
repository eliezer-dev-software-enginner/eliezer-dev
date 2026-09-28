import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eliezer Dev | Analista Desenvolvedor Pleno + IA',
  description:
    'Portfólio de Eliezer Assunção de Paulo, Analista Desenvolvedor Pleno + IA com experiência em Java, Spring Boot, TypeScript, React, automação e produtos de software.',
  keywords:
    'Analista Desenvolvedor Pleno, Inteligência Artificial, Desenvolvedor Java, Spring Boot, React, TypeScript, TOTVS Protheus, AdvPL, Engenheiro de Software, Portfólio, Eliezer Dev',
  authors: [{ name: 'Eliezer Assunção de Paulo' }],
  openGraph: {
    type: 'website',
    siteName: 'Eliezer Dev',
    title: 'Eliezer Dev | Analista Desenvolvedor Pleno + IA',
    description:
      'Software de ponta a ponta com Java, web, automação e inteligência artificial aplicada ao produto.',
    images: 'https://avatars.githubusercontent.com/u/93846923?v=4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        />
      </head>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
