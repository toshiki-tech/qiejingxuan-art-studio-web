import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getAllArtworks } from '@/lib/data/artworks';
import WorksGallery from '@/components/WorksGallery';
import WorksHero from '@/components/WorksHero';
import { Locale } from '@/lib/types';

export function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'ja' }, { locale: 'en' }];
}

export default async function WorksPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'works' });
  const allArtworks = getAllArtworks();

  return (
    <div className="min-h-screen">
      {/* Hero - 使用背景图的Hero区块 */}
      <WorksHero />

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
