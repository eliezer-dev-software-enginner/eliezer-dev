'use client';

import Image, { StaticImageData } from 'next/image';

export interface Project {
  cover: StaticImageData | string;
  coverAlt: string;
  description: string;
  title: string;
  coverImageIsSquare?: boolean;
  btnText: string;
  href: string;
  techs: string[];
}

export default function CardProjectComponent(props: Project) {
  return (
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'var(--surface-raised)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-soft)',
        transition:
          'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-5px)';
        el.style.boxShadow = 'var(--shadow-card)';
        el.style.borderColor = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'var(--shadow-soft)';
        el.style.borderColor = 'var(--border)';
      }}
    >
      {/* Cover Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          background: 'var(--cream-dark)',
        }}
      >
        <Image
          src={props.cover}
          alt={props.coverAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        {/* Subtle warm overlay on image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, transparent 60%, rgba(26,20,16,0.35) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          padding: '1.25rem',
          gap: '0.75rem',
        }}
      >
        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--ink)',
            lineHeight: 1.2,
          }}
        >
          {props.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.88rem',
            lineHeight: 1.65,
            color: 'var(--ink-muted)',
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {props.description}
        </p>

        {/* Tech tags */}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            listStyle: 'none',
          }}
        >
          {props.techs.map((v, key) => (
            <li
              key={key}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                background: 'var(--accent-light)',
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(200, 82, 42, 0.25)',
              }}
            >
              {v}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={props.href}
          target='_blank'
          rel='noopener noreferrer'
          style={{ display: 'block', marginTop: 'auto' }}
        >
          <button
            style={{
              width: '100%',
              padding: '10px 16px',
              background: 'var(--ink)',
              color: 'var(--cream)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                'var(--accent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                'var(--ink)';
            }}
          >
            {props.btnText} →
          </button>
        </a>
      </div>
    </article>
  );
}
