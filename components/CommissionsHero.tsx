'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

/**
 * Commissions Hero Section - 艺术定制页面Hero区块
 * 
 * 设计理念：
 * - 使用艺术工作室/创作空间背景图，突出定制服务的专业性
 * - 居中布局，强调个性化定制主题
 * - 深色遮罩确保文字可读性
 * - 与首页和作品集Hero保持一致的视觉风格
 */
export default function CommissionsHero() {
  const t = useTranslations('commissions');
  const locale = useLocale();

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* ========== 背景图片层 ========== */}
      {/* 艺术工作室/创作空间背景图 - 突出定制服务的专业性 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/commissions-option1.jpg"
          alt="Art Studio Creative Workspace Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* 遮罩层 - 确保文字可读性，营造专业创作氛围 */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/75 via-neutral-800/65 to-neutral-900/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/30" />
      </div>

      {/* ========== 主容器 ========== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* ========== 内容区域 - 居中布局 ========== */}
          <div className="text-center space-y-8 lg:space-y-10 animate-fade-in max-w-4xl mx-auto">
            {/* 主标题 - 大字号，优雅字距 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              <span className="block mb-2 animate-slide-up">{t('title')}</span>
            </h1>

            {/* 装饰线 */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto rounded-full" />

            {/* 副标题 - 轻量无衬线，合理行距 */}
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-200 leading-relaxed max-w-2xl mx-auto font-light animate-fade-in-delay drop-shadow-lg">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* ========== 底部装饰线 ========== */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}

