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
    // Project Card Container: Dark background, rounded corners, shadow, and hover effect
    <article className='flex h-full transform flex-col overflow-hidden rounded-xl bg-gray-800 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/50'>
      {/* Card Header (Top) */}
      <header className='border-b border-gray-600 bg-gray-700 p-5'>
        <h3 className='text-xl font-bold text-indigo-400'>{props.title}</h3>
      </header>

      {/* Rest of Card Content */}
      <div className='flex flex-grow flex-col p-5'>
        {/* Image Center - Aspect ratio for consistent height */}
<div className='mb-4 aspect-video overflow-hidden rounded-lg border border-gray-600 relative'>
          <Image
            src={props.cover}
            alt={props.coverAlt}
            className='h-full w-full object-cover'
            fill
            priority
          />
        </div>

        {/* Description */}
        <p className='mb-4 flex-grow text-gray-300'>{props.description}</p>

        {/* Tech Tags */}
        <ul className='mb-6 flex flex-wrap gap-2'>
          {props.techs.map((v, key) => (
            <li
              key={key}
              // Styled as clean, small tags
              className='rounded-full bg-gray-600/50 px-3 py-1 text-xs font-medium text-gray-300'
            >
              #{v}
            </li>
          ))}
        </ul>

        {/* Call-to-Action Link/Button */}
        <a
          href={props.href}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-auto'
        >
          <button className='w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white transition duration-200 hover:bg-indigo-500'>
            {props.btnText}
          </button>
        </a>
      </div>
    </article>
  );
}
