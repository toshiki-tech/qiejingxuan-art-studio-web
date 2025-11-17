import { getTranslations } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';
import { Locale } from '@/lib/types';

export const dynamic = 'force-static';

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">{t('title')}</h1>
          <p className="text-xl text-neutral-600">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              {t('info.title')}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">
                  {t('info.contact')}
                </h3>
                <p className="text-neutral-600">登坂仁美（Tosaka Hitomi）</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">
                  {t('info.email')}
                </h3>
                <p className="text-neutral-600">info@qiejingxuan.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">
                  {t('info.phone')}
                </h3>
                <p className="text-neutral-600">080-1234-5678</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">
                  {t('info.address')}
                </h3>
                <p className="text-neutral-600">
                  {locale === 'zh' && '日本东京都港区六本木 7-22-6'}
                  {locale === 'ja' && '〒106-0032 東京都港区六本木7-22-6'}
                  {locale === 'en' && '7-22-6 Roppongi, Minato-ku, Tokyo 106-0032, Japan'}
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  locale === 'zh' 
                    ? '日本东京都港区六本木 7-22-6'
                    : locale === 'ja'
                    ? '〒106-0032 東京都港区六本木7-22-6'
                    : '7-22-6 Roppongi, Minato-ku, Tokyo 106-0032, Japan'
                )}&hl=${locale === 'zh' ? 'zh-CN' : locale === 'ja' ? 'ja' : 'en'}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title={locale === 'zh' ? '且静轩位置地图' : locale === 'ja' ? '且静軒の位置地図' : 'Qiejingxuan Location Map'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

