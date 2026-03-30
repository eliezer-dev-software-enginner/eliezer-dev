import Image from 'next/image';
import user from '../assets/eu.jpg';

export default function RoundedImageComponent() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {/* Decorative offset ring */}
      <div
        style={{
          position: 'absolute',
          inset: '-6px',
          borderRadius: '50%',
          border: '2px solid var(--accent)',
          opacity: 0.4,
        }}
      />
      {/* Decorative offset square — "painterly" touch */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10px',
          right: '-10px',
          width: '40px',
          height: '40px',
          background: 'var(--accent-light)',
          border: '1.5px solid var(--accent)',
          borderRadius: '4px',
          zIndex: 0,
          opacity: 0.7,
        }}
      />
      {/* Main avatar */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid var(--surface-raised)',
          boxShadow: 'var(--shadow-card)',
          width: '150px',
          height: '150px',
        }}
      >
        <Image
          src={user}
          alt='Foto de Eliezer Assunção de Paulo'
          fill
          style={{ objectFit: 'cover' }}
          loading='lazy'
        />
      </div>
    </div>
  );
}
