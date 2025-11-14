import Link from 'next/link';
import Image from 'next/image';
import { getAllNews } from '@/lib/data/news';
import { Locale } from '@/lib/types';

export default async function NewsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const allNews = getAllNews();

  const getCategoryLabel = (category: string) => {
    const labels = {
      exhibition: { zh: '展览', ja: '展覧会', en: 'Exhibition' },
      news: { zh: '新闻', ja: 'ニュース', en: 'News' },
      event: { zh: '活动', ja: 'イベント', en: 'Event' },
    };
    return labels[category as keyof typeof labels]?.[locale] || category;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (locale === 'zh') {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    } else if (locale === 'ja') {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    } else {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  };

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">
            {locale === 'zh' && '新闻与活动'}
            {locale === 'ja' && 'ニュース＆イベント'}
            {locale === 'en' && 'News & Events'}
          </h1>
          <p className="text-xl text-neutral-600">
            {locale === 'zh' && '了解我们的最新动态、展览和艺术活动'}
            {locale === 'ja' && '最新情報、展覧会、アートイベントをご覧ください'}
            {locale === 'en' && 'Stay updated with our latest exhibitions and art events'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {allNews.map((item) => (
            <Link
              key={item.id}
              href={`/${locale}/news/${item.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title[locale]}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                    {getCategoryLabel(item.category)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-neutral-500 mb-2">{formatDate(item.date)}</p>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title[locale]}
                </h3>
                <p className="text-neutral-700 line-clamp-3 leading-relaxed">
                  {item.excerpt[locale]}
                </p>
                <div className="mt-4 flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  {locale === 'zh' && '阅读更多'}
                  {locale === 'ja' && '続きを読む'}
                  {locale === 'en' && 'Read More'}
                  <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

