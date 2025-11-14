import { News } from '../types';

export const news: News[] = [
  {
    id: 'news-1',
    slug: 'autumn-exhibition-2024',
    title: {
      zh: '2025春季艺术展：东方印象',
      ja: '2025年春季アート展：東洋の印象',
      en: '2025 Spring Art Exhibition: Oriental Impressions',
    },
    excerpt: {
      zh: '且静轩荣幸呈现"东方印象"主题展览，展出三位签约艺术家的2025年最新力作，探索东方美学与当代艺术的融合。',
      ja: '且静軒は「東洋の印象」をテーマとした展覧会を開催し、契約アーティスト3名の2025年最新作品を展示します。',
      en: 'Qiejingxuan proudly presents "Oriental Impressions", featuring the latest 2025 works of three represented artists.',
    },
    content: {
      zh: '本次展览将于2025年2月20日至3月20日在东京六本木艺术中心举行。展览汇集了张薇的水墨新作、山本武的装置艺术以及陈艾玛的数字艺术作品，共计30余件。这些作品以独特的视角诠释了东方美学在当代艺术语境下的新可能。开幕式将于2月20日晚7点举行，届时艺术家将亲临现场与观众交流。',
      ja: '本展覧会は2025年2月20日から3月20日まで、東京六本木アートセンターで開催されます。チョウ・ウェイの水墨画新作、山本武のインスタレーション、エマ・チェンのデジタルアート作品など、計30点以上を展示します。',
      en: 'The exhibition will be held from February 20 to March 20, 2025, at the Roppongi Art Center in Tokyo. It features over 30 works including Zhang Wei\'s new ink paintings, Takeshi Yamamoto\'s installations, and Emma Chen\'s digital artworks.',
    },
    image: '/images/news/exhibition-2024-autumn.jpg',
    date: '2025-02-01',
    category: 'exhibition',
  },
  {
    id: 'news-2',
    slug: 'artist-zhang-wei-award',
    title: {
      zh: '张薇荣获亚洲当代艺术奖',
      ja: 'チョウ・ウェイ、アジア現代美術賞受賞',
      en: 'Zhang Wei Wins Asian Contemporary Art Award',
    },
    excerpt: {
      zh: '我们的签约艺术家张薇凭借作品《山水之间》系列荣获2025亚洲当代艺术奖，这是对她多年艺术探索的高度认可。',
      ja: '契約アーティストのチョウ・ウェイが作品「山水の間」シリーズで2025年アジア現代美術賞を受賞しました。',
      en: 'Our represented artist Zhang Wei has been awarded the 2025 Asian Contemporary Art Award for her series "Between Mountains and Waters".',
    },
    content: {
      zh: '张薇的获奖作品《山水之间》系列，将传统中国水墨技法与现代抽象表现主义完美融合，创造出独特的视觉语言。评委会称赞她"在继承传统的同时，开创了水墨艺术的新方向"。颁奖典礼将于2025年2月5日在新加坡国家美术馆举行。且静轩对张薇的成就感到无比骄傲，并将继续支持她的艺术创作。',
      ja: '受賞作品「山水の間」シリーズは、伝統的な中国水墨画技法と現代的な抽象表現主義を完璧に融合させ、独特な視覚言語を創造しました。授賞式は2025年2月5日、シンガポール国立美術館で開催されます。',
      en: 'Zhang Wei\'s award-winning series "Between Mountains and Waters" perfectly blends traditional Chinese ink techniques with modern abstract expressionism. The award ceremony will be held on February 5th, 2025 at the National Gallery of Singapore.',
    },
    image: '/images/news/zhang-wei-award.jpg',
    date: '2025-01-15',
    category: 'news',
  },
  {
    id: 'news-3',
    slug: 'workshop-yamamoto',
    title: {
      zh: '山本武工作坊：再生艺术的可能性',
      ja: '山本武ワークショップ：再生アートの可能性',
      en: 'Takeshi Yamamoto Workshop: Possibilities of Recycled Art',
    },
    excerpt: {
      zh: '山本武将于2025年2月举办为期两天的工作坊，探讨如何利用回收材料创作艺术装置，名额有限。',
      ja: '山本武が2025年2月に2日間のワークショップを開催し、リサイクル素材を使用したアートインスタレーションの制作について探求します。',
      en: 'Takeshi Yamamoto will host a two-day workshop in February 2025 exploring the creation of art installations using recycled materials.',
    },
    content: {
      zh: '工作坊时间：2025年2月14-15日\n地点：东京港区创意工作室\n\n艺术家山本武将亲自指导参与者如何从废弃材料中发现美的可能性，并动手创作属于自己的艺术装置。工作坊适合所有艺术爱好者，无需专业背景。报名费用：28,000日元/人，包含所有材料。名额限20人，报名从速。',
      ja: 'ワークショップ日程：2025年2月14-15日\n場所：東京都港区クリエイティブスタジオ\n\nアーティスト山本武が参加者に、廃棄物から美の可能性を発見し、自分だけのアートインスタレーションを創作する方法を直接指導します。参加費：28,000円/人（材料費込み）。定員20名。',
      en: 'Workshop Schedule: February 14-15, 2025\nLocation: Creative Studio, Minato-ku, Tokyo\n\nArtist Takeshi Yamamoto will personally guide participants in discovering beauty in discarded materials and creating their own art installations. Fee: ¥28,000/person (materials included). Limited to 20 participants.',
    },
    image: '/images/news/workshop-yamamoto.jpg',
    date: '2025-01-20',
    category: 'event',
  },
  {
    id: 'news-4',
    slug: 'new-artist-li-ming',
    title: {
      zh: '欢迎新艺术家：李明加入且静轩',
      ja: '新しいアーティスト：リー・ミンが且静軒に加入',
      en: 'Welcome New Artist: Li Ming Joins Qiejingxuan',
    },
    excerpt: {
      zh: '我们很高兴宣布，知名雕塑艺术家李明正式签约且静轩，成为我们艺术家家族的新成员。',
      ja: '著名な彫刻家リー・ミンが正式に且静軒と契約し、アーティストファミリーの新メンバーになりました。',
      en: 'We are delighted to announce that renowned sculptor Li Ming has officially joined Qiejingxuan as our new represented artist.',
    },
    content: {
      zh: '李明，1985年生于四川成都，现工作生活于北京。他的雕塑作品以探索人与自然的关系而闻名，曾在中国美术馆、上海当代艺术博物馆等重要机构展出。李明表示："很荣幸加入且静轩这个充满活力的平台，期待与更多国际观众分享我的创作理念。"我们期待与李明共同开启新的艺术篇章。',
      ja: 'リー・ミンは1985年四川省成都生まれ、現在は北京を拠点に活動しています。彼の彫刻作品は人間と自然の関係を探求することで知られ、中国美術館や上海当代芸術博物館などの重要な機関で展示されています。',
      en: 'Li Ming, born in 1985 in Chengdu, Sichuan, currently lives and works in Beijing. His sculptural works are renowned for exploring the relationship between humans and nature, and have been exhibited at prestigious institutions including the National Art Museum of China.',
    },
    image: '/images/news/new-artist-li-ming.jpg',
    date: '2025-01-10',
    category: 'news',
  },
];

export function getNewsBySlug(slug: string): News | undefined {
  return news.find((item) => item.slug === slug);
}

export function getAllNews(): News[] {
  return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentNews(limit: number = 3): News[] {
  return getAllNews().slice(0, limit);
}

