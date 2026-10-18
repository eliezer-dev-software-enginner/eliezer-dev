import 'react-toastify/dist/ReactToastify.css';
import '../plics-sw/globals.css';

import { Montserrat } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import GoogleAnalytcs from '../plics-sw/components/GoogleAnalytcs';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Impulsionar Instagram',
  description: 'Serviço de impulsionamento de Instagram.',
};

export default function InstagramLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`plicsSite ${montserrat.variable} antialiased`}>
      <GoogleAnalytcs />
      {children}
      <ToastContainer />
    </div>
  );
}
