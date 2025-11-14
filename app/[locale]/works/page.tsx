import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getAllArtworks } from '@/lib/data/artworks';
import WorksGallery from '@/components/WorksGallery';
import { Locale } from '@/lib/types';

export default async function WorksPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations('works');
  const allArtworks = getAllArtworks();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-300 rounded-full opacity-15 blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-white rounded-2xl shadow-lg mb-6">
              <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">{t('title')}</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
            <p className="text-xl md:text-2xl text-neutral-600">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <WorksGallery artworks={allArtworks} locale={locale} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            {locale === 'zh' && '对某件作品感兴趣？'}
            {locale === 'ja' && '作品にご興味がありますか？'}
            {locale === 'en' && 'Interested in a piece?'}
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            {locale === 'zh' && '联系我们了解更多信息或定制专属艺术作品'}
            {locale === 'ja' && '詳細情報やオーダーメイド作品についてお問い合わせください'}
            {locale === 'en' && 'Contact us for more information or to commission a custom artwork'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-primary-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-primary-700 transition-colors"
          >
            {locale === 'zh' && '联系我们'}
            {locale === 'ja' && 'お問い合わせ'}
            {locale === 'en' && 'Contact Us'}
          </Link>
        </div>
      </section>
    </div>
  );
}
