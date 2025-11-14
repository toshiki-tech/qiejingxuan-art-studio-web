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
    description: {
      zh: '这件作品探索了传统山水画的现代表达。通过抽象的笔触和留白，艺术家创造出一种介于具象与抽象之间的视觉语言，呈现东方美学的当代诠释。',
      ja: 'この作品は、伝統的な山水画の現代的表現を探求しています。抽象的な筆致と余白を通じて、具象と抽象の間の視覚言語を創造し、東洋美学の現代的解釈を提示します。',
      en: 'This work explores modern expressions of traditional landscape painting. Through abstract brushwork and negative space, the artist creates a visual language between figurative and abstract, presenting a contemporary interpretation of Eastern aesthetics.',
    },
    category: 'painting',
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
    description: {
      zh: '水墨在宣纸上晕染开来，如同雾气在山间弥漫。这件作品捕捉了自然的瞬息万变，展现了东方哲学中"虚实相生"的美学理念。',
      ja: '墨が宣紙の上に滲み広がり、霧が山間に立ち込めるかのようです。この作品は自然の移ろいを捉え、東洋哲学における「虚実相生」の美学理念を表現しています。',
      en: 'Ink diffuses on Xuan paper like mist spreading through mountains. This work captures the ephemeral nature of the natural world, embodying the Eastern philosophical concept of "void and substance coexisting."',
    },
    category: 'painting',
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
    description: {
      zh: '将传统水墨与现代材料相结合，创造出时间流动的视觉隐喻。作品通过层叠的墨色和肌理，探讨记忆、时间与存在的关系。',
      ja: '伝統的な水墨と現代素材を組み合わせ、時の流れの視覚的メタファーを創造しています。重なり合う墨色と質感を通じて、記憶、時間、存在の関係を探求します。',
      en: 'Combining traditional ink with modern materials to create a visual metaphor of flowing time. Through layered ink and textures, the work explores relationships between memory, time, and existence.',
    },
    category: 'painting',
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
    description: {
      zh: '利用废弃的木材和金属构建出森林般的装置。这件作品反思人类活动对自然的影响，同时展现废弃物重获新生的可能性。',
      ja: '廃棄された木材と金属を使用して森のようなインスタレーションを構築しています。この作品は人間活動が自然に与える影響を反省し、同時に廃棄物が新たな生を得る可能性を示します。',
      en: 'Constructed from discarded wood and metal into a forest-like installation. This work reflects on the impact of human activity on nature while demonstrating the potential for waste to find new life.',
    },
    category: 'sculpture',
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
    description: {
      zh: '这件大型装置作品创造了一个沉浸式的环境，观众可以在其中体验自然与人工的对话。回收材料发出的声响如同自然的回声，提醒我们与环境的联系。',
      ja: 'この大型インスタレーション作品は没入型の環境を創造し、観客はその中で自然と人工の対話を体験できます。リサイクル素材から発せられる音は自然のこだまのように、環境との繋がりを思い起こさせます。',
      en: 'This large-scale installation creates an immersive environment where viewers can experience the dialogue between nature and artifice. Sounds from recycled materials echo like nature itself, reminding us of our connection to the environment.',
    },
    category: 'installation',
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
    description: {
      zh: '流动的形态象征着物质的循环与转化。雕塑通过废弃金属的重塑，探讨可持续发展和环境保护的主题。',
      ja: '流れる形態は物質の循環と変容を象徴しています。廃棄金属の再形成を通じて、持続可能性と環境保護のテーマを探求します。',
      en: 'The flowing form symbolizes the circulation and transformation of matter. Through reshaping discarded metal, the sculpture explores themes of sustainability and environmental protection.',
    },
    category: 'sculpture',
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
    description: {
      zh: '通过人工智能生成的动态影像，探索梦境与现实的边界。作品融合了中国传统图案与现代数字美学，创造出超现实的视觉体验。',
      ja: 'AIによって生成された動的映像を通じて、夢と現実の境界を探求します。中国伝統文様と現代デジタル美学を融合し、超現実的な視覚体験を創造します。',
      en: 'Through AI-generated dynamic imagery, exploring the boundaries between dreams and reality. The work fuses Chinese traditional patterns with modern digital aesthetics, creating a surreal visual experience.',
    },
    category: 'digital',
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
    description: {
      zh: '互动装置邀请观众参与构建自己的身份叙事。通过多屏幕投影和传感器技术，作品探讨全球化时代个人身份的多元性和流动性。',
      ja: 'インタラクティブインスタレーションは、観客が自身のアイデンティティの物語を構築することに招待します。マルチスクリーン投影とセンサー技術を通じて、グローバル化時代における個人アイデンティティの多様性と流動性を探求します。',
      en: 'This interactive installation invites viewers to participate in constructing their own identity narratives. Through multi-screen projections and sensor technology, the work explores the multiplicity and fluidity of personal identity in the age of globalization.',
    },
    category: 'installation',
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
    description: {
      zh: '这件装置作品将东西方文化符号进行重组和对话。观众的参与会改变作品的呈现，隐喻文化交流的动态过程和相互影响。',
      ja: 'このインスタレーション作品は東西の文化記号を再編成し対話させます。観客の参加が作品の提示を変え、文化交流の動的プロセスと相互影響を暗喩します。',
      en: 'This installation work reorganizes and dialogues Eastern and Western cultural symbols. Viewer participation changes the presentation, metaphorically representing the dynamic process and mutual influence of cultural exchange.',
    },
    category: 'installation',
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

