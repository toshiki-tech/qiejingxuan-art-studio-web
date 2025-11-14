import { getTranslations } from 'next-intl/server';
import { artists } from '@/lib/data/artists';
import ArtistCard from '@/components/ArtistCard';
import { Locale } from '@/lib/types';

export default async function ArtistsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations('artists');

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">{t('title')}</h1>
          <p className="text-xl text-neutral-600">{t('subtitle')}</p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {artists.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

