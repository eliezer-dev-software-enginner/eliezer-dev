import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eliezer Dev - Programador e engenheiro de software',
  description: 'Programar é a minha arte',
  keywords:
    'Desenvolvedor Web, Desenvolvedor Frontend, Desenvolvedor React, Engenheiro de Software, Portfólio, Next.js, JavaScript, TypeScript, Tailwind CSS, Eliezer, Eliezer Dev, Eliezer Software Enginner, Programador Fullstack, Programador Full Stack, Programador Web, Freelancer',
  authors: [{ name: 'Eliezer Assunção de Paulo', url: 'https://nextjs.org' }],
  openGraph: {
    type: 'website',
    siteName: 'Eliezer Dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
