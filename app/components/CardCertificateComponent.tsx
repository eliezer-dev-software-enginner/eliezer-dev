import s from '../styles/Home.module.css';

export interface Certificate {
  title: string;
  urlSource: string;
}

export default function CardCertificateComponent(props: Certificate) {
  return (
    <article className={s.card}>
      <div className={s.certContent}>
        <div className={s.certIcon}>
          <i className='fas fa-award'></i>
        </div>
        <h3 className={s.certTitle}>{props.title}</h3>
        <a
          href={props.urlSource}
          target='_blank'
          rel='noopener noreferrer'
          className={s.certLink}
        >
          <i className='fas fa-external-link-alt'></i> Ver certificado
        </a>
      </div>
    </article>
  );
}
