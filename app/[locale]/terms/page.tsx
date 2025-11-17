import { getTranslations } from 'next-intl/server';
import { Locale } from '@/lib/types';

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

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

          {/* Acceptance */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('acceptance.title')}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                {t('acceptance.content')}
              </p>
            </div>
          </section>

          {/* Use of Website */}
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

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('ip.title')}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                {t('ip.content')}
              </p>
            </div>
          </section>

          {/* User Content */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('userContent.title')}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                {t('userContent.content')}
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('liability.title')}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                {t('liability.content')}
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('changes.title')}
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                {t('changes.content')}
              </p>
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
                <a href="mailto:legal@qiejingxuan.com" className="text-primary-600 hover:text-primary-700">
                  legal@qiejingxuan.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

