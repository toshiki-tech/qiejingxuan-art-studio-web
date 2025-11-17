import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { getArtistBySlug, getAllArtistSlugs } from '@/lib/data/artists';
import { getArtworksByArtist } from '@/lib/data/artworks';
import ArtworkCard from '@/components/ArtworkCard';
import { Locale } from '@/lib/types';
import { withBasePath } from '@/lib/utils/path';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getAllArtistSlugs();
  const locales: Locale[] = ['zh', 'ja', 'en'];
  
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'artists' });
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  const artistArtworks = getArtworksByArtist(slug);

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Artist Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full blur-3xl" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent z-10" />
                  <Image
                    src={withBasePath(artist.avatar)}
                    alt={artist.name[locale]}
                    fill
                    className="object-cover grayscale-[10%]"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text">
                {artist.name[locale]}
              </h1>
              <p className="text-lg text-primary-600 mb-6 font-semibold">
                {t('nationality')}: {artist.nationality[locale]}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {artist.bio[locale]}
              </p>
            </div>
          </div>
        </div>

        {/* Artist's Artworks */}
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            {t('artworks')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

