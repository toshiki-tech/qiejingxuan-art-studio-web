'use client';

import { useState } from 'react';
import { Artwork, Locale } from '@/lib/types';
import ArtworkCard from './ArtworkCard';

interface WorksGalleryProps {
  artworks: Artwork[];
  locale: Locale;
}

export default function WorksGallery({ artworks, locale }: WorksGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // 按类别分组
  const paintingWorks = artworks.filter(w => w.category === 'painting');
  const sculptureWorks = artworks.filter(w => w.category === 'sculpture');
  const digitalWorks = artworks.filter(w => w.category === 'digital');
  const installationWorks = artworks.filter(w => w.category === 'installation');

  const categories = [
    { 
      key: 'all', 
      works: artworks,
      label: { zh: '全部作品', ja: 'すべて', en: 'All Works' }
    },
    { 
      key: 'painting', 
      works: paintingWorks,
      label: { zh: '绘画', ja: '絵画', en: 'Painting' }
    },
    { 
      key: 'sculpture', 
      works: sculptureWorks,
      label: { zh: '雕塑', ja: '彫刻', en: 'Sculpture' }
    },
    { 
      key: 'installation', 
      works: installationWorks,
      label: { zh: '装置', ja: 'インスタレーション', en: 'Installation' }
    },
    { 
      key: 'digital', 
      works: digitalWorks,
      label: { zh: '数字艺术', ja: 'デジタル', en: 'Digital' }
    },
  ];

  const currentWorks = categories.find(cat => cat.key === activeCategory)?.works || artworks;

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-neutral-100 rounded-lg p-1 flex-wrap gap-1">
          {categories.map((category) => (
            category.works.length > 0 && (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition-colors ${
                  activeCategory === category.key
                    ? 'bg-primary-600 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {category.label[locale]}
                <span className="ml-2 text-xs opacity-75">({category.works.length})</span>
              </button>
            )
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {currentWorks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} locale={locale} />
          ))}
        </div>
      </div>
    </>
  );
}

