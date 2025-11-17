import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getNewsBySlug, getAllNews } from '@/lib/data/news';
import { Locale } from '@/lib/types';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  const allNews = getAllNews();
  const locales: Locale[] = ['zh', 'ja', 'en'];
  
  return locales.flatMap((locale) =>
    allNews.map((item) => ({
      locale,
      slug: item.slug,
    }))
  );
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const newsItem = getNewsBySlug(slug);

  if (!newsItem) {
    notFound();
  }

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Link */}
        <Link
          href={`/${locale}/news`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          {locale === 'zh' && '返回列表'}
          {locale === 'ja' && '一覧に戻る'}
          {locale === 'en' && 'Back to List'}
        </Link>

        {/* Article */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-full">
                {getCategoryLabel(newsItem.category)}
              </span>
              <span className="text-neutral-500">{formatDate(newsItem.date)}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {newsItem.title[locale]}
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed border-l-4 border-primary-600 pl-6">
              {newsItem.excerpt[locale]}
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={newsItem.image}
              alt={newsItem.title[locale]}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {newsItem.content[locale].split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="text-neutral-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors"
          >
            {locale === 'zh' && '联系我们了解更多'}
            {locale === 'ja' && '詳しくはお問い合わせください'}
            {locale === 'en' && 'Contact Us for More Information'}
          </Link>
        </div>
      </div>
    </div>
  );
}

