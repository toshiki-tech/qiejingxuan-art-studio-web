import { getTranslations } from 'next-intl/server';
import { Locale } from '@/lib/types';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations('privacy');

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-neutral-600">
            {t('lastUpdated')}: {t('updateDate')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('introduction.title')}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                {t('introduction.content')}
              </p>
            </div>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('collection.title')}
            </h2>
            <div className="prose prose-neutral max-w-none space-y-4">
              <p className="text-neutral-700 leading-relaxed">
                {t('collection.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                <li>{t('collection.item1')}</li>
                <li>{t('collection.item2')}</li>
                <li>{t('collection.item3')}</li>
                <li>{t('collection.item4')}</li>
              </ul>
            </div>
          </section>

          {/* Use of Information */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('use.title')}
            </h2>
            <div className="prose prose-neutral max-w-none space-y-4">
              <p className="text-neutral-700 leading-relaxed">
                {t('use.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                <li>{t('use.item1')}</li>
                <li>{t('use.item2')}</li>
                <li>{t('use.item3')}</li>
                <li>{t('use.item4')}</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('protection.title')}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                {t('protection.content')}
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('cookies.title')}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                {t('cookies.content')}
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('rights.title')}
            </h2>
            <div className="prose prose-neutral max-w-none space-y-4">
              <p className="text-neutral-700 leading-relaxed">
                {t('rights.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                <li>{t('rights.item1')}</li>
                <li>{t('rights.item2')}</li>
                <li>{t('rights.item3')}</li>
                <li>{t('rights.item4')}</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('contact.title')}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('contact.content')}
              </p>
              <p className="text-neutral-700">
                <strong>{t('contact.email')}:</strong>{' '}
                <a href="mailto:privacy@qiejingxuan.com" className="text-primary-600 hover:text-primary-700">
                  privacy@qiejingxuan.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

