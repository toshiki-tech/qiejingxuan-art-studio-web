import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import CommissionsHero from '@/components/CommissionsHero';
import { Locale } from '@/lib/types';

export default async function CommissionsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'commissions' });

  const steps = [
    { number: 1, key: 'step1', icon: '💬' },
    { number: 2, key: 'step2', icon: '✏️' },
    { number: 3, key: 'step3', icon: '📄' },
    { number: 4, key: 'step4', icon: '🎨' },
    { number: 5, key: 'step5', icon: '🎁' },
  ];

  const benefits = [
    { key: 'quality', icon: '⭐', color: 'from-amber-400 to-amber-600' },
    { key: 'professional', icon: '🎯', color: 'from-blue-400 to-blue-600' },
    { key: 'unique', icon: '💎', color: 'from-purple-400 to-purple-600' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero - 使用背景图的Hero区块 */}
      <CommissionsHero />

      {/* Process - Artistic Flow */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-600" />
            <path d="M0,70 Q25,40 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-400" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {t('process.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 -translate-y-1/2" style={{ top: '80px' }} />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {steps.map((step, index) => (
                  <div key={step.key} className="relative">
                    {/* Step Card */}
                    <div className="relative group">
                      {/* Decorative circle behind */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                      
                      {/* Main circle */}
                      <div className="relative">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                          <div className="text-center">
                            <div className="text-3xl mb-1">{step.icon}</div>
                            <div className="text-2xl font-bold">{step.number}</div>
                          </div>
                        </div>
                        
                        {/* Connecting arrow for mobile */}
                        {index < steps.length - 1 && (
                          <div className="lg:hidden flex justify-center my-4">
                            <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Text */}
                      <div className="mt-6 text-center">
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">
                          {t(`process.${step.key}.title`)}
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {t(`process.${step.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                {t('benefits.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.key} className="relative group">
                  {/* Background decoration */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    {/* Icon */}
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                      {benefit.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 text-center">
                      {t(`benefits.${benefit.key}.title`)}
                    </h3>
                    <p className="text-neutral-600 text-center leading-relaxed">
                      {t(`benefits.${benefit.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary-200 rounded-full opacity-20 blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block p-4 bg-primary-100 rounded-2xl mb-6">
                <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">{t('cta')}</h2>
            <p className="text-xl text-neutral-600 mb-10">
              {locale === 'zh' && '让我们一起创造属于您的艺术作品'}
              {locale === 'ja' && 'あなただけのアート作品を一緒に創造しましょう'}
              {locale === 'en' && "Let's create your unique artwork together"}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold px-12 py-5 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
