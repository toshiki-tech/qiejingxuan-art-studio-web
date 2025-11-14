import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Locale } from '@/lib/types';

export default function CommissionsPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = useTranslations('commissions');

  const steps = [
    { number: 1, key: 'step1' },
    { number: 2, key: 'step2' },
    { number: 3, key: 'step3' },
    { number: 4, key: 'step4' },
    { number: 5, key: 'step5' },
  ];

  const benefits = [
    { key: 'quality', icon: '✓' },
    { key: 'professional', icon: '★' },
    { key: 'unique', icon: '◆' },
  ];

  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">{t('title')}</h1>
          <p className="text-xl text-neutral-600">{t('subtitle')}</p>
        </div>

        {/* Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            {t('process.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.key} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200" />
                )}
                <div className="relative z-10 mb-4">
                  <div className="w-24 h-24 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {t(`process.${step.key}.title`)}
                </h3>
                <p className="text-neutral-600">
                  {t(`process.${step.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            {t('benefits.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.key} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-5xl text-primary-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {t(`benefits.${benefit.key}.title`)}
                </h3>
                <p className="text-neutral-600">
                  {t(`benefits.${benefit.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-primary-600 text-white font-semibold px-12 py-4 rounded-lg hover:bg-primary-700 transition-colors text-lg"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}

