'use client';

import { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import s from '../styles/Home.module.css';

export interface Project {
  cover: StaticImageData | string;
  coverAlt: string;
  description: string;
  title: string;
  btnText: string;
  href: string;
  techs: string[];
}

export default function CardProjectComponent(props: Project) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [baseHeight, setBaseHeight] = useState(0);

  useEffect(() => {
    if (!expanded && cardRef.current) {
      setBaseHeight(cardRef.current.offsetHeight);
    }
  }, [expanded]);

  return (
    <div style={{ position: 'relative', minHeight: baseHeight || undefined }}>
      <article
        ref={cardRef}
        className={`${s.card} ${expanded ? s.cardExpanded : ''}`}
      >
        <div className={s.cardCover}>
          <Image
            src={props.cover}
            alt={props.coverAlt}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={s.cardOverlay} />
        </div>

        <div className={s.cardContent}>
          <h3 className={s.cardTitle}>{props.title}</h3>
          <p
            className={`${s.cardDescription} ${expanded ? s.cardDescriptionExpanded : ''}`}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {props.description}
            <span className={s.cardDescriptionToggle}>
              {expanded ? 'menos' : 'mais'}
            </span>
          </p>

          <ul className={s.techList}>
            {props.techs.map((tech, i) => (
              <li key={i} className={s.techItem}>
                {tech}
              </li>
            ))}
          </ul>

          <a href={props.href} target='_blank' rel='noopener noreferrer'>
            <button className={s.cardButton}>{props.btnText} →</button>
          </a>
        </div>
      </article>
    </div>
  );
}
