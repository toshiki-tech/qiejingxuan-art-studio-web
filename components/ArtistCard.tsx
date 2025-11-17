import Link from 'next/link';
import Image from 'next/image';
import { Artist, Locale } from '@/lib/types';
import { withBasePath } from '@/lib/utils/path';

interface ArtistCardProps {
  artist: Artist;
  locale: Locale;
}

export default function ArtistCard({ artist, locale }: ArtistCardProps) {
  return (
    <Link
      href={`/${locale}/artists/${artist.slug}`}
      className="group block text-center"
    >
      {/* Avatar Container */}
      <div className="relative mb-4">
        <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:border-primary-200">
          <Image
            src={withBasePath(artist.avatar)}
            alt={artist.name[locale]}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 grayscale-[15%] group-hover:grayscale-0"
          />
        </div>
      </div>
      
      {/* Info */}
      <div className="px-2">
        <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
          {artist.name[locale]}
        </h3>
        <p className="text-sm text-neutral-500 mb-2">{artist.nationality[locale]}</p>
        {artist.birthYear && (
          <p className="text-xs text-neutral-400">
            {locale === 'zh' && `${artist.birthYear}年生`}
            {locale === 'ja' && `${artist.birthYear}年生まれ`}
            {locale === 'en' && `b. ${artist.birthYear}`}
          </p>
        )}
      </div>
    </Link>
  );
}
