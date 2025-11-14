import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { artists } from '@/lib/data/artists';
import { artworks } from '@/lib/data/artworks';
import ArtistCard from '@/components/ArtistCard';
import ArtworkCard from '@/components/ArtworkCard';
import { Locale } from '@/lib/types';

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = useTranslations();

  const featuredArtists = artists.slice(0, 3);
  const featuredWorks = artworks.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <Link
            href={`/${locale}/artists`}
            className="inline-block bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors"
          >
            {t('home.hero.cta')}
          </Link>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              {t('home.featuredArtists.title')}
            </h2>
            <p className="text-xl text-neutral-600">
              {t('home.featuredArtists.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} locale={locale} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/artists`}
              className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              {t('home.featuredArtists.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              {t('home.featuredWorks.title')}
            </h2>
            <p className="text-xl text-neutral-600">
              {t('home.featuredWorks.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} locale={locale} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/works`}
              className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              {t('home.featuredWorks.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              {t('home.philosophy.title')}
            </h2>
            <p className="text-xl text-neutral-700 leading-relaxed">
              {t('home.philosophy.content')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('home.cta.subtitle')}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}

