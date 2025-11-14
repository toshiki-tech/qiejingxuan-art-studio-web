import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';
import { Locale } from '@/lib/types';

export default function ContactPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = useTranslations('contact');

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
                  {t('info.email')}
                </h3>
                <p className="text-neutral-600">info@qiejingxuan.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">
                  {t('info.phone')}
                </h3>
                <p className="text-neutral-600">+86 123 4567 8900</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">
                  {t('info.address')}
                </h3>
                <p className="text-neutral-600">
                  {locale === 'zh' && '中国北京市朝阳区艺术区123号'}
                  {locale === 'ja' && '中国北京市朝陽区アート地区123号'}
                  {locale === 'en' && '123 Art District, Chaoyang, Beijing, China'}
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-neutral-200 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500">Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

