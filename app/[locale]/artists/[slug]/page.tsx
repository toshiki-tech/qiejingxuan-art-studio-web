import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getArtistBySlug, getAllArtistSlugs } from '@/lib/data/artists';
import { getArtworksByArtist } from '@/lib/data/artworks';
import ArtworkCard from '@/components/ArtworkCard';
import { Locale } from '@/lib/types';

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

export default function ArtistDetailPage({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}) {
  const t = useTranslations('artists');
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  const artistArtworks = getArtworksByArtist(slug);

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Artist Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={artist.avatar}
                  alt={artist.name[locale]}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                {artist.name[locale]}
              </h1>
              <p className="text-lg text-neutral-600 mb-6">
                {t('nationality')}: {artist.nationality}
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

