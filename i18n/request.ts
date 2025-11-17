import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['zh', 'ja', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // For static export, requestLocale should come from the route params
  // If it's not available, we'll use the default locale
  let locale = await requestLocale;
  
  // If locale is not provided (e.g., during static generation), use default
  if (!locale) {
    locale = 'zh';
  }
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

