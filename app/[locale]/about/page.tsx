import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import { Locale } from '@/lib/types';
import { withBasePath } from '@/lib/utils/path';

export const dynamic = 'force-static';

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  const milestones = [
    { year: '2024', key: 'milestone1' },
    { year: '2025', key: 'milestone2' },
  ];

  const services = [
    { icon: '🎨', key: 'service1' },
    { icon: '🖼️', key: 'service2' },
    { icon: '✨', key: 'service3' },
    { icon: '🌏', key: 'service4' },
  ];

  const team = [
    { role: 'founder', key: 'founder', image: '/images/team/tosaka-hitomi.jpg' },
    { role: 'curator', key: 'curator', image: '/images/team/chen-siyuan.jpg' },
    { role: 'director', key: 'director', image: '/images/team/tanaka-yuko.jpg' },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section - 使用背景图的Hero区块 */}
      <AboutHero />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  {t('introduction.title')}
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  {t('introduction.content1')}
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {t('introduction.content2')}
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={withBasePath("/images/about/art-space.jpg")}
                  alt={t('introduction.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  {t('mission.title')}
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {t('mission.content')}
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  {t('vision.title')}
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {t('vision.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-xl text-neutral-600">
                {t('services.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div key={service.key} className="text-center p-8 bg-neutral-50 rounded-2xl hover:bg-primary-50 transition-colors group">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-neutral-600">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t('timeline.title')}</h2>
              <p className="text-xl opacity-80">{t('timeline.subtitle')}</p>
            </div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.key} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-2xl font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <h3 className="text-2xl font-bold mb-3">
                      {t(`timeline.${milestone.key}.title`)}
                    </h3>
                    <p className="text-lg opacity-80 leading-relaxed">
                      {t(`timeline.${milestone.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                {t('team.title')}
              </h2>
              <p className="text-xl text-neutral-600">
                {t('team.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member) => (
                <div key={member.key} className="text-center group">
                  <div className="mb-6">
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <Image
                          src={member.image}
                          alt={t(`team.${member.key}.name`)}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {t(`team.${member.key}.name`)}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-3">
                      {t(`team.${member.key}.role`)}
                    </p>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      {t(`team.${member.key}.bio`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-12">
              {t('values.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <p className="text-lg font-bold text-primary-600">{t('values.quality')}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <p className="text-lg font-bold text-primary-600">{t('values.integrity')}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <p className="text-lg font-bold text-primary-600">{t('values.innovation')}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <p className="text-lg font-bold text-primary-600">{t('values.service')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('cta.subtitle')}</p>
          <a
            href={`/${locale}/contact`}
            className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}
