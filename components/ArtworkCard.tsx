import Link from 'next/link';
import Image from 'next/image';
import { Artwork, Locale } from '@/lib/types';
import { getArtistBySlug } from '@/lib/data/artists';

interface ArtworkCardProps {
  artwork: Artwork;
  locale: Locale;
}

export default function ArtworkCard({ artwork, locale }: ArtworkCardProps) {
  const artist = getArtistBySlug(artwork.artistSlug);

  return (
    <Link
      href={`/${locale}/works/${artwork.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <Image
          src={artwork.image}
          alt={artwork.title[locale]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
          {artwork.title[locale]}
        </h3>
        
        {/* Artist Info */}
        {artist && (
          <div className="flex items-center gap-2 mb-3">
            <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={artist.avatar}
                alt={artist.name[locale]}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-neutral-600 truncate">{artist.name[locale]}</p>
          </div>
        )}

        <p className="text-sm text-neutral-500 mb-2">{artwork.medium[locale]}</p>
        <div className="flex justify-between text-xs text-neutral-400">
          <span>{artwork.year}</span>
          <span>{artwork.size}</span>
        </div>
      </div>
    </Link>
  );
}
