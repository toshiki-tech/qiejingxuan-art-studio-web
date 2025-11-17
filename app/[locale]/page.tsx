import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { artists } from '@/lib/data/artists';
import { artworks } from '@/lib/data/artworks';
import { getRecentNews } from '@/lib/data/news';
import ArtistCard from '@/components/ArtistCard';
import ArtworkCard from '@/components/ArtworkCard';
import HeroSection from '@/components/HeroSection';
import { Locale } from '@/lib/types';
import { withBasePath } from '@/lib/utils/path';

export const dynamic = 'force-static';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const featuredArtists = artists.slice(0, 5);
  const featuredWorks = artworks.slice(0, 6);
  const recentNews = getRecentNews(3);

  return (
    <div>
      {/* Hero Section - 精心设计的艺术工作室Hero区块 */}
      <HeroSection />

      {/* Recent News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              {locale === 'zh' && '最新动态'}
              {locale === 'ja' && '最新情報'}
              {locale === 'en' && 'Latest News'}
            </h2>
            <p className="text-xl text-neutral-600">
              {locale === 'zh' && '关注我们的展览、活动和艺术新闻'}
              {locale === 'ja' && '展覧会、イベント、アートニュースをフォロー'}
              {locale === 'en' && 'Follow our exhibitions, events and art news'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((item) => (
              <Link
                key={item.id}
                href={`/${locale}/news/${item.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={withBasePath(item.image)}
                    alt={item.title[locale]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-3 py-1 bg-primary-600 text-white rounded-full font-semibold">
                      {item.category === 'exhibition' && (locale === 'zh' ? '展览' : locale === 'ja' ? '展覧会' : 'Exhibition')}
                      {item.category === 'news' && (locale === 'zh' ? '新闻' : locale === 'ja' ? 'ニュース' : 'News')}
                      {item.category === 'event' && (locale === 'zh' ? '活动' : locale === 'ja' ? 'イベント' : 'Event')}
                    </span>
                    <span className="text-xs text-neutral-500">{new Date(item.date).toLocaleDateString(locale)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {item.title[locale]}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {item.excerpt[locale]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
            >
              {locale === 'zh' && '查看所有新闻'}
              {locale === 'ja' && 'すべてのニュースを見る'}
              {locale === 'en' && 'View All News'}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-1 h-32 bg-gradient-to-b from-primary-400 to-transparent" />
        <div className="absolute bottom-10 right-0 w-1 h-32 bg-gradient-to-t from-primary-400 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              {t('home.featuredArtists.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-4" />
            <p className="text-xl text-neutral-600">
              {t('home.featuredArtists.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} locale={locale} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/artists`}
              className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              {t('home.featuredArtists.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 relative">
        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-40 h-40 border-2 border-primary-200 rounded-full opacity-30" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary-100 opacity-20 transform rotate-45" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              {t('home.featuredWorks.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-4" />
            <p className="text-xl text-neutral-600">
              {t('home.featuredWorks.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} locale={locale} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/works`}
              className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              {t('home.featuredWorks.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Quote mark decoration */}
        <div className="absolute top-10 left-10 text-9xl text-primary-100 font-serif leading-none">"</div>
        <div className="absolute bottom-10 right-10 text-9xl text-primary-100 font-serif leading-none">"</div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="text-center bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              {t('home.philosophy.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-neutral-700 leading-relaxed">
              {t('home.philosophy.content')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.cta.title')}</h2>
            <p className="text-xl md:text-2xl mb-6 opacity-95 leading-relaxed">
              {t('home.cta.subtitle')}
            </p>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              {t('home.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href={`/${locale}/contact`}
                className="inline-block bg-white text-primary-600 font-semibold px-10 py-4 rounded-lg hover:bg-neutral-100 transition-colors shadow-lg"
              >
                {t('home.cta.button')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-10 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                {t('home.cta.learnMore')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-80">
                  {locale === 'zh' && '签约艺术家'}
                  {locale === 'ja' && '契約アーティスト'}
                  {locale === 'en' && 'Represented Artists'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-sm opacity-80">
                  {locale === 'zh' && '展出作品'}
                  {locale === 'ja' && '展示作品'}
                  {locale === 'en' && 'Exhibited Works'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-80">
                  {locale === 'zh' && '国际展览'}
                  {locale === 'ja' && '国際展覧会'}
                  {locale === 'en' && 'International Exhibitions'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

