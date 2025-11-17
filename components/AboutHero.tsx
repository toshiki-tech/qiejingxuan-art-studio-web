'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

/**
 * About Hero Section - 关于我们页面Hero区块
 * 
 * 设计理念：
 * - 使用体现"连接艺术家与世界"主题的背景图
 * - 展示艺术交流、国际合作的场景
 * - 居中布局，突出品牌理念
 * - 与首页、作品集、定制页面Hero保持一致的视觉风格
 */
export default function AboutHero() {
  const t = useTranslations('about.hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* ========== 背景图片层 ========== */}
      {/* 艺术交流/国际合作背景图 - 体现"连接艺术家与世界"主题 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/about-option4.jpg"
          alt="Artists Connecting with the World Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* 遮罩层 - 确保文字可读性，营造国际艺术交流氛围 */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/75 via-neutral-800/65 to-neutral-900/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/30" />
      </div>

      {/* ========== 主容器 ========== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* ========== 内容区域 - 居中布局 ========== */}
          <div className="text-center space-y-8 lg:space-y-10 animate-fade-in max-w-4xl mx-auto">
            {/* 主标题 - 中等字号，优雅字距 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              <span className="block mb-2 animate-slide-up">{t('title')}</span>
            </h1>

            {/* 装饰线 */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto rounded-full" />

            {/* 副标题 - 轻量无衬线，合理行距 */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-delay drop-shadow-lg">
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

