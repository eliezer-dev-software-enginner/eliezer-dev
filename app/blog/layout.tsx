import './globals.css';

import { Montserrat } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import styles from './layout.module.css';

// As duas variaveis mantem os nomes antigos (--font-inter, --font-outfit)
// porque dezenas de arquivos .module.css ja referenciam esses nomes para
// texto de corpo vs. titulos - so trocamos qual fonte carrega em cada uma,
// as duas agora sao Montserrat (pesos diferentes pra manter os mesmos
// font-weight ja usados no resto do app).
const inter = Montserrat({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const outfit = Montserrat({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['700', '800'],
});

export const dynamic = 'force-dynamic';

export const metadata = {

  title: 'Blog do Eliezer Dev - Programação Web e Desenvolvimento',
  description:
    'Um blog minimalista e moderno sobre programação web, desenvolvimento de software e tecnologias. Compartilhando ideias, códigos e experiências.',
  keywords: [
    'programação',
    'web',
    'desenvolvimento',
    'javascript',
    'react',
    'next.js',
    'firebase',
    'eliezer',
    'blog',
  ],
  openGraph: {
    title: 'Blog do Eliezer Dev - Programação Web e Desenvolvimento',
    description:
      'Um blog minimalista e moderno sobre programação web, desenvolvimento de software e tecnologias.',
    type: 'website',
    url: '/blog',
    images: [
      {
        url: '/blog/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog do Eliezer Dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog do Eliezer Dev - Programação Web e Desenvolvimento',
    description:
      'Um blog minimalista e moderno sobre programação web, desenvolvimento de software e tecnologias.',
    images: ['/blog/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`blogSite ${inter.variable} ${outfit.variable} ${styles.body}`}>

        <AuthProvider>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </AuthProvider>

    </div>
  );
}
