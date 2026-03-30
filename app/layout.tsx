import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eliezer Dev — Programação como Arte',
  description:
    'Programar é a minha arte. Engenheiro de software com mais de 6 anos criando aplicações web com React e Next.js.',
  keywords:
    'Desenvolvedor Web, Desenvolvedor Frontend, Desenvolvedor React, Engenheiro de Software, Portfólio, Next.js, JavaScript, TypeScript, Eliezer, Eliezer Dev, Eliezer Software Enginner, Programador Fullstack, Programador Web, Freelancer',
  authors: [{ name: 'Eliezer Assunção de Paulo' }],
  openGraph: {
    type: 'website',
    siteName: 'Eliezer Dev',
    title: 'Eliezer Dev — Programação como Arte',
    description:
      'Engenheiro de software que trata código como expressão artística.',
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
