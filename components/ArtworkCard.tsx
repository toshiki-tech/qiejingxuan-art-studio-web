import Image from 'next/image';
import { Artwork, Locale } from '@/lib/types';

interface ArtworkCardProps {
  artwork: Artwork;
  locale: Locale;
}

export default function ArtworkCard({ artwork, locale }: ArtworkCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={artwork.image}
          alt={artwork.title[locale]}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
          {artwork.title[locale]}
        </h3>
        <p className="text-sm text-neutral-600 mb-1">{artwork.medium[locale]}</p>
        <div className="flex justify-between text-sm text-neutral-500">
          <span>{artwork.year}</span>
          <span>{artwork.size}</span>
        </div>
      </div>
    </div>
  );
}

