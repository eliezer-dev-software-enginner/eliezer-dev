export function isProductionMode() {
  return process.env.NODE_ENV === 'production';
}

export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL.replace(/\/solucoes\/plics-sw\/?$/, '').replace(/\/$/, '');
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
}

export type UTM = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
};

export function getUtmFromSearchParams(params: {
  userId?: string;
  test?: string;
  paymentId?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}) {
  const source = params.utm_source;
  const medium = params.utm_medium;
  const campaign = params.utm_campaign;
  const content = params.utm_content;

  const utm: UTM = {
    source,
    medium,
    campaign,
    content,
  };

  return utm;
}
