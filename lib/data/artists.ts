import { Artist } from '../types';

export const artists: Artist[] = [
  {
    slug: 'zhang-wei',
    name: {
      zh: '张薇',
      ja: 'チョウ・ウェイ',
      en: 'Zhang Wei',
    },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500',
    nationality: {
      zh: '中国',
      ja: '中国',
      en: 'China',
    },
    birthYear: '1988',
    education: {
      zh: '中央美术学院国画系硕士',
      ja: '中央美術学院中国画学科修士',
      en: 'MFA in Chinese Painting, Central Academy of Fine Arts',
    },
    exhibitions: {
      zh: '2024 北京今日美术馆个展 | 2023 上海当代艺术博物馆群展 | 2022 东京都美术馆亚洲艺术展',
      ja: '2024年 北京今日美術館個展 | 2023年 上海当代芸術博物館グループ展 | 2022年 東京都美術館アジア美術展',
      en: '2024 Solo Exhibition, Today Art Museum Beijing | 2023 Group Show, Power Station of Art Shanghai | 2022 Asian Art Exhibition, Tokyo Metropolitan Art Museum',
    },
    bio: {
      zh: '张薇，1988年生于杭州，现工作生活于北京。她的创作植根于中国传统水墨，却不拘泥于传统形式，通过大胆的笔触和现代构图，探索东方美学在当代语境下的新可能。她的作品被众多私人藏家和艺术机构收藏，2025年荣获亚洲当代艺术奖。张薇认为，艺术应该是传统与创新的对话，是过去与未来的桥梁。',
      ja: 'チョウ・ウェイは1988年杭州生まれ、現在は北京を拠点に活動しています。彼女の創作は中国伝統水墨画に根ざしながらも、大胆な筆致と現代的な構図を通じて、東洋美学の現代における新たな可能性を探求しています。2025年にはアジア現代美術賞を受賞しました。',
      en: 'Born in Hangzhou in 1988, Zhang Wei currently lives and works in Beijing. Her practice is rooted in traditional Chinese ink painting, yet unbound by conventional forms. Through bold brushwork and contemporary compositions, she explores new possibilities for Eastern aesthetics in a modern context. Winner of the 2025 Asian Contemporary Art Award.',
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
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500',
    nationality: {
      zh: '日本',
      ja: '日本',
      en: 'Japan',
    },
    birthYear: '1982',
    education: {
      zh: '东京艺术大学雕塑系博士',
      ja: '東京芸術大学彫刻科博士課程修了',
      en: 'PhD in Sculpture, Tokyo University of the Arts',
    },
    exhibitions: {
      zh: '2024 威尼斯双年展 | 2023 东京都现代美术馆个展 | 2022 横滨三年展',
      ja: '2024年 ヴェネツィア・ビエンナーレ | 2023年 東京都現代美術館個展 | 2022年 横浜トリエンナーレ',
      en: '2024 Venice Biennale | 2023 Solo Exhibition, Museum of Contemporary Art Tokyo | 2022 Yokohama Triennale',
    },
    bio: {
      zh: '山本武，1982年生于京都，现工作于东京。作为一位环保艺术的先驱者，他致力于将废弃材料转化为富有诗意的艺术装置。他的作品常常探讨人类文明与自然环境的关系，通过雕塑和装置艺术形式，呈现出对生态危机的深刻反思。山本的创作理念是"从废墟中寻找重生"，他相信艺术有能力唤起人们对环境保护的意识。',
      ja: '山本武は1982年京都生まれ、現在は東京を拠点に活動しています。環境アートのパイオニアとして、廃棄物を詩的なアートインスタレーションに変えることに専念しています。彼の作品は人類文明と自然環境の関係を探求し、生態系の危機に対する深い反省を表現しています。',
      en: 'Born in Kyoto in 1982, Takeshi Yamamoto is based in Tokyo. As a pioneer of environmental art, he transforms discarded materials into poetic installations. His work examines the relationship between human civilization and the natural environment, offering profound reflections on ecological crises through sculpture and installation art.',
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
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500',
    nationality: {
      zh: '美国',
      ja: 'アメリカ',
      en: 'United States',
    },
    birthYear: '1990',
    education: {
      zh: '纽约视觉艺术学院数字艺术硕士',
      ja: 'ニューヨーク視覚芸術学校デジタルアート修士',
      en: 'MFA in Digital Art, School of Visual Arts, New York',
    },
    exhibitions: {
      zh: '2024 纽约新美术馆个展 | 2023 香港巴塞尔艺术展 | 2022 洛杉矶当代艺术博物馆群展',
      ja: '2024年 ニューヨーク新美術館個展 | 2023年 香港アートバーゼル | 2022年 ロサンゼルス現代美術館グループ展',
      en: '2024 Solo Exhibition, New Museum NYC | 2023 Art Basel Hong Kong | 2022 Group Show, MOCA Los Angeles',
    },
    bio: {
      zh: '陈艾玛，1990年生于旧金山，美籍华裔数字艺术家。她的创作融合了东西方文化元素，通过新媒体技术探索身份、记忆与文化认同的复杂关系。陈艾玛的作品常常运用人工智能、虚拟现实等前沿技术，创造出沉浸式的艺术体验。她认为，在全球化时代，艺术应该成为连接不同文化的桥梁，帮助人们理解彼此的差异与共同点。',
      ja: 'エマ・チェンは1990年サンフランシスコ生まれのアメリカ系中国人デジタルアーティストです。彼女の創作は東洋と西洋の文化要素を融合し、ニューメディア技術を通じてアイデンティティ、記憶、文化的認識の複雑な関係を探求しています。',
      en: 'Born in San Francisco in 1990, Emma Chen is a Chinese-American digital artist. Her work blends Eastern and Western cultural elements, exploring complex relationships between identity, memory, and cultural belonging through new media technologies. She believes art should serve as a bridge connecting different cultures in our globalized era.',
    },
    artworks: ['artwork-7', 'artwork-8', 'artwork-9'],
  },
  {
    slug: 'kim-min-ji',
    name: {
      zh: '金敏智',
      ja: 'キム・ミンジ',
      en: 'Kim Min-ji',
    },
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500',
    nationality: {
      zh: '韩国',
      ja: '韓国',
      en: 'South Korea',
    },
    birthYear: '1992',
    bio: {
      zh: '金敏智是韩国新生代陶艺家，以其独特的现代陶瓷艺术而闻名。',
      ja: 'キム・ミンジは韓国の新世代陶芸家で、独特な現代陶芸で知られています。',
      en: 'Kim Min-ji is a rising Korean ceramic artist known for her contemporary pottery.',
    },
    artworks: [],
  },
  {
    slug: 'david-mueller',
    name: {
      zh: '大卫·穆勒',
      ja: 'デビッド・ミュラー',
      en: 'David Mueller',
    },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500',
    nationality: {
      zh: '德国',
      ja: 'ドイツ',
      en: 'Germany',
    },
    birthYear: '1985',
    bio: {
      zh: '大卫·穆勒是一位德国抽象艺术家，作品探索色彩与空间的关系。',
      ja: 'デビッド・ミュラーはドイツの抽象芸術家で、色彩と空間の関係を探求しています。',
      en: 'David Mueller is a German abstract artist exploring the relationship between color and space.',
    },
    artworks: [],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}

export function getAllArtistSlugs(): string[] {
  return artists.map((artist) => artist.slug);
}

export function getAllArtists(): Artist[] {
  return artists;
}
