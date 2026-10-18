import { permanentRedirect } from 'next/navigation';

// Preserva links antigos sem manter o checkout pago acessível.
export default function CompraAntiga() {
  permanentRedirect('/solucoes/plics-sw#baixar');
}
