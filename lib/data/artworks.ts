import { Artwork } from '../types';

export const artworks: Artwork[] = [
  // Zhang Wei's artworks
  {
    id: 'artwork-1',
    title: {
      zh: '山水之间',
      ja: '山水の間',
      en: 'Between Mountains and Waters',
    },
    image: '/images/artworks/artwork-1.jpg',
    year: '2023',
    medium: {
      zh: '纸本水墨',
      ja: '紙本墨絵',
      en: 'Ink on Paper',
    },
    size: '120 × 80 cm',
    artistSlug: 'zhang-wei',
  },
  {
    id: 'artwork-2',
    title: {
      zh: '雾隐',
      ja: '霧隠れ',
      en: 'Hidden in Mist',
    },
    image: '/images/artworks/artwork-2.jpg',
    year: '2023',
    medium: {
      zh: '宣纸水墨',
      ja: '宣紙墨絵',
      en: 'Ink on Xuan Paper',
    },
    size: '100 × 100 cm',
    artistSlug: 'zhang-wei',
  },
  {
    id: 'artwork-3',
    title: {
      zh: '流动的时光',
      ja: '流れる時',
      en: 'Flowing Time',
    },
    image: '/images/artworks/artwork-3.jpg',
    year: '2024',
    medium: {
      zh: '混合媒介',
      ja: 'ミクストメディア',
      en: 'Mixed Media',
    },
    size: '150 × 90 cm',
    artistSlug: 'zhang-wei',
  },
  // Takeshi Yamamoto's artworks
  {
    id: 'artwork-4',
    title: {
      zh: '再生森林',
      ja: '再生の森',
      en: 'Regeneration Forest',
    },
    image: '/images/artworks/artwork-4.jpg',
    year: '2023',
    medium: {
      zh: '再生木材与金属',
      ja: '再生木材と金属',
      en: 'Recycled Wood and Metal',
    },
    size: '200 × 150 × 100 cm',
    artistSlug: 'takeshi-yamamoto',
  },
  {
    id: 'artwork-5',
    title: {
      zh: '自然的回声',
      ja: '自然のこだま',
      en: 'Echo of Nature',
    },
    image: '/images/artworks/artwork-5.jpg',
    year: '2023',
    medium: {
      zh: '装置艺术',
      ja: 'インスタレーション',
      en: 'Installation',
    },
    size: '300 × 200 × 150 cm',
    artistSlug: 'takeshi-yamamoto',
  },
  {
    id: 'artwork-6',
    title: {
      zh: '循环',
      ja: '循環',
      en: 'Circulation',
    },
    image: '/images/artworks/artwork-6.jpg',
    year: '2024',
    medium: {
      zh: '雕塑',
      ja: '彫刻',
      en: 'Sculpture',
    },
    size: '180 × 80 × 80 cm',
    artistSlug: 'takeshi-yamamoto',
  },
  // Emma Chen's artworks
  {
    id: 'artwork-7',
    title: {
      zh: '数字梦境',
      ja: 'デジタルドリーム',
      en: 'Digital Dreams',
    },
    image: '/images/artworks/artwork-7.jpg',
    year: '2023',
    medium: {
      zh: '数字艺术',
      ja: 'デジタルアート',
      en: 'Digital Art',
    },
    size: '4K Video, 5:30',
    artistSlug: 'emma-chen',
  },
  {
    id: 'artwork-8',
    title: {
      zh: '身份的碎片',
      ja: 'アイデンティティの破片',
      en: 'Fragments of Identity',
    },
    image: '/images/artworks/artwork-8.jpg',
    year: '2024',
    medium: {
      zh: '新媒体装置',
      ja: 'ニューメディアインスタレーション',
      en: 'New Media Installation',
    },
    size: '可变尺寸',
    artistSlug: 'emma-chen',
  },
  {
    id: 'artwork-9',
    title: {
      zh: '文化交织',
      ja: '文化の交差',
      en: 'Cultural Intersection',
    },
    image: '/images/artworks/artwork-9.jpg',
    year: '2024',
    medium: {
      zh: '互动装置',
      ja: 'インタラクティブインスタレーション',
      en: 'Interactive Installation',
    },
    size: '400 × 300 cm',
    artistSlug: 'emma-chen',
  },
];

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.id === id);
}

export function getArtworksByArtist(artistSlug: string): Artwork[] {
  return artworks.filter((artwork) => artwork.artistSlug === artistSlug);
}

export function getAllArtworks(): Artwork[] {
  return artworks;
}

