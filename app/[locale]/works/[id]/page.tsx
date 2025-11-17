import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { getArtworkById, getAllArtworks } from '@/lib/data/artworks';
import { getArtistBySlug } from '@/lib/data/artists';
import { Locale } from '@/lib/types';
import { withBasePath } from '@/lib/utils/path';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  const allArtworks = getAllArtworks();
  const locales: Locale[] = ['zh', 'ja', 'en'];
  
  return locales.flatMap((locale) =>
    allArtworks.map((artwork) => ({
      locale,
      id: artwork.id,
    }))
  );
}

export default async function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'works' });
  const artwork = getArtworkById(id);

  if (!artwork) {
    notFound();
  }

  const artist = getArtistBySlug(artwork.artistSlug);

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href={`/${locale}/works`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          {locale === 'zh' && '返回作品集'}
          {locale === 'ja' && '作品集に戻る'}
          {locale === 'en' && 'Back to Collection'}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Image */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={withBasePath(artwork.image)}
                alt={artwork.title[locale]}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                {artwork.title[locale]}
              </h1>

              {/* Artist */}
              {artist && (
                <Link
                  href={`/${locale}/artists/${artist.slug}`}
                  className="inline-flex items-center gap-3 mb-6 group"
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={withBasePath(artist.avatar)}
                      alt={artist.name[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">
                      {t('artist')}
                    </p>
                    <p className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {artist.name[locale]}
                    </p>
                  </div>
                </Link>
              )}

              {/* Details */}
              <div className="space-y-4 mb-8 pb-8 border-b border-neutral-200">
                <div className="flex justify-between">
                  <span className="text-neutral-500">{t('year')}</span>
                  <span className="font-semibold text-neutral-900">{artwork.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">{t('medium')}</span>
                  <span className="font-semibold text-neutral-900">{artwork.medium[locale]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">{t('size')}</span>
                  <span className="font-semibold text-neutral-900">{artwork.size}</span>
                </div>
              </div>

              {/* Description */}
              {artwork.description && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-neutral-900 mb-4">
                    {locale === 'zh' && '作品介绍'}
                    {locale === 'ja' && '作品について'}
                    {locale === 'en' && 'About This Work'}
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {artwork.description[locale]}
                  </p>
                </div>
              )}

              {/* CTA */}
              <Link
                href={`/${locale}/contact`}
                className="inline-block w-full text-center bg-primary-600 text-white font-semibold py-4 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {locale === 'zh' && '咨询此作品'}
                {locale === 'ja' && 'この作品についてお問い合わせ'}
                {locale === 'en' && 'Inquire About This Work'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

