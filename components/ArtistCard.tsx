import Link from 'next/link';
import Image from 'next/image';
import { Artist, Locale } from '@/lib/types';

interface ArtistCardProps {
  artist: Artist;
  locale: Locale;
}

export default function ArtistCard({ artist, locale }: ArtistCardProps) {
  return (
    <Link
      href={`/${locale}/artists/${artist.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={artist.avatar}
          alt={artist.name[locale]}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
          {artist.name[locale]}
        </h3>
        <p className="text-sm text-neutral-500 mb-3">{artist.nationality}</p>
        <p className="text-neutral-700 line-clamp-3">{artist.bio[locale]}</p>
      </div>
    </Link>
  );
}

