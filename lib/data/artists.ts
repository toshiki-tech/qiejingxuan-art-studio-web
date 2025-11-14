import { Artist } from '../types';

export const artists: Artist[] = [
  {
    slug: 'zhang-wei',
    name: {
      zh: '张薇',
      ja: 'チョウ・ウェイ',
      en: 'Zhang Wei',
    },
    avatar: 'https://placehold.co/500x500/e5e5e5/737373?text=Zhang+Wei',
    nationality: '中国',
    bio: {
      zh: '张薇是一位当代水墨艺术家，擅长将传统中国画技法与现代抽象表现相结合。她的作品在北京、上海、东京等地多次展出，深受收藏家喜爱。',
      ja: 'チョウ・ウェイは現代水墨画アーティストで、伝統的な中国画技法と現代的な抽象表現を組み合わせることを得意としています。彼女の作品は北京、上海、東京などで何度も展示され、コレクターに愛されています。',
      en: 'Zhang Wei is a contemporary ink artist who specializes in combining traditional Chinese painting techniques with modern abstract expression. Her works have been exhibited in Beijing, Shanghai, Tokyo and are beloved by collectors.',
    },
    artworks: ['artwork-1', 'artwork-2', 'artwork-3'],
  },
  {
    slug: 'takeshi-yamamoto',
    name: {
      zh: '山本武',
      ja: '山本武',
      en: 'Takeshi Yamamoto',
    },
    avatar: 'https://placehold.co/500x500/e5e5e5/737373?text=Takeshi+Yamamoto',
    nationality: '日本',
    bio: {
      zh: '山本武是一位日本雕塑家和装置艺术家。他的作品探索自然与人工的边界，使用再生材料创作出充满生命力的艺术装置。曾在威尼斯双年展和东京艺术三年展参展。',
      ja: '山本武は日本の彫刻家でインスタレーションアーティストです。彼の作品は自然と人工の境界を探求し、再生材料を使用して生命力に満ちたアートインスタレーションを制作しています。ヴェネツィア・ビエンナーレや東京アートトリエンナーレに参加しています。',
      en: 'Takeshi Yamamoto is a Japanese sculptor and installation artist. His work explores the boundary between nature and artifice, creating vibrant art installations using recycled materials. He has participated in the Venice Biennale and Tokyo Art Triennial.',
    },
    artworks: ['artwork-4', 'artwork-5', 'artwork-6'],
  },
  {
    slug: 'emma-chen',
    name: {
      zh: '陈艾玛',
      ja: 'エマ・チェン',
      en: 'Emma Chen',
    },
    avatar: 'https://placehold.co/500x500/e5e5e5/737373?text=Emma+Chen',
    nationality: '美国',
    bio: {
      zh: '陈艾玛是一位美籍华裔艺术家,主要从事数字艺术和新媒体创作。她的作品探讨身份认同、文化交融等主题,在纽约、洛杉矶和香港的多个画廊展出。',
      ja: 'エマ・チェンはアメリカ系中国人アーティストで、主にデジタルアートとニューメディア創作に従事しています。彼女の作品はアイデンティティ、文化の融合などのテーマを探求し、ニューヨーク、ロサンゼルス、香港の複数のギャラリーで展示されています。',
      en: 'Emma Chen is a Chinese-American artist primarily working in digital art and new media. Her work explores themes of identity and cultural fusion, and has been exhibited in galleries in New York, Los Angeles, and Hong Kong.',
    },
    artworks: ['artwork-7', 'artwork-8', 'artwork-9'],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}

export function getAllArtistSlugs(): string[] {
  return artists.map((artist) => artist.slug);
}

