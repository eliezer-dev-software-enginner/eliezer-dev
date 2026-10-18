import { Store } from 'lucide-react';

import { DownloadButtons } from '@/app/solucoes/plics-sw/components/DownloadButtons';
import { getLatestRelease } from '@/app/solucoes/plics-sw/lib/githubRelease';
import styles from '@/app/solucoes/plics-sw/styles/download.module.css';

const MICROSOFT_STORE_URL =
  'https://apps.microsoft.com/store/detail/9P20X36J46TM?cid=DevShareMCLPCS';

export async function DownloadApp() {
  const release = await getLatestRelease();

  return (
    <section className={styles.section} id='baixar'>
      <div className={styles.inner}>
        <div className={styles.label}>Download do Plics SW</div>
        <h2 className={styles.title}>Baixe o Plics SW</h2>
        <p className={styles.subtitle}>
          Gratuito e sem chave de licença. Instale pela Microsoft Store ou baixe o instalador para Windows e Linux.
        </p>

        <div className={styles.grid}>
          <a
            href={MICROSOFT_STORE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className={`${styles.button} ${styles.storeButton}`}
          >
            <div className={styles.iconWrap}>
              <Store size={20} />
            </div>
            <div className={styles.buttonText}>
              <span className={styles.buttonLabel}>Disponível na</span>
              <span className={styles.buttonPlatform}>Microsoft Store</span>
            </div>
          </a>
        </div>

        {release && (release.downloadWindows || release.downloadLinux) && (
          <div className={styles.directDownload}>
            <p className={styles.downloadHeading}>Instaladores diretos</p>
            <DownloadButtons release={release} />
          </div>
        )}

        {release?.version && (
          <p className={styles.version}>Versão {release.version}</p>
        )}
      </div>
    </section>
  );
}
