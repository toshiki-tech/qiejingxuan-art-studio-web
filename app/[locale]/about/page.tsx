import { useTranslations } from 'next-intl';
import { Locale } from '@/lib/types';

export default function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = useTranslations('about');

  const values = [
    { key: 'quality' },
    { key: 'integrity' },
    { key: 'innovation' },
    { key: 'service' },
  ];

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">{t('title')}</h1>
          <p className="text-xl text-neutral-600">{t('subtitle')}</p>
        </div>

        {/* Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            {t('story.title')}
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('story.content')}
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            {t('mission.title')}
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('mission.content')}
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            {t('values.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.key}
                className="text-center p-6 bg-primary-50 rounded-lg"
              >
                <p className="text-lg font-semibold text-primary-700">
                  {t(`values.${value.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

