import { useTranslations } from 'next-intl';
import { getAllArtworks } from '@/lib/data/artworks';
import ArtworkCard from '@/components/ArtworkCard';
import { Locale } from '@/lib/types';

export default function WorksPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = useTranslations('works');
  const allArtworks = getAllArtworks();

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">{t('title')}</h1>
          <p className="text-xl text-neutral-600">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}

