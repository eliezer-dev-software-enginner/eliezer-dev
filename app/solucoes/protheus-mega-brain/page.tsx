import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Protheus Mega Brain | Eliezer Dev',
  description:
    'Gerador de campos SX3, gatilhos SX7 e código MVC para TOTVS Protheus.',
};

export default function ProtheusMegaBrainPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.navigation} aria-label='Navegação do Protheus Mega Brain'>
        <Link href='/'>← Portfólio</Link>
        <span>Protheus Mega Brain</span>
        <a href='/solucoes/protheus-mega-brain/index.html'>Abrir ferramenta em tela cheia ↗</a>
      </nav>
      <iframe
        className={styles.tool}
        src='/solucoes/protheus-mega-brain/index.html'
        title='Protheus Mega Brain — gerador SX3, SX7 e MVC'
        allow='clipboard-write'
      />
    </main>
  );
}
