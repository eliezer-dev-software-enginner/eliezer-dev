import Image from 'next/image';
import user from '../assets/user_4.png';

export default function RoundedImageComponent() {
  return (
    // Container for the image, applying a border
    <div className='rounded-full border-4 border-indigo-500/70 p-1 shadow-2xl shadow-indigo-500/50'>
      {/* Image with rounded full corners, and a large fixed size */}
      <Image
        src={user}
        alt='Foto de Eliezer Brasilian'
        className='h-50 w-40 rounded-full object-cover'
        loading='lazy'
      />
    </div>
  );
}
