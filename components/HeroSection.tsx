'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

/**
 * Hero Section - 精心设计的艺术工作室首页Hero区块
 * 
 * 设计理念：
 * - 东方美学：雅致、留白、温润、柔和光感
 * - 视觉层次：左侧内容 + 右侧艺术装饰，形成平衡构图
 * - 品牌感：使用Logo图形元素、高端字体、精致间距
 * - 现代感：渐变、纹理、微动画，而非简单色块
 */
export default function HeroSection() {
  const t = useTranslations('home.hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* ========== 背景图片层 ========== */}
      {/* 艺术工作室背景图 - 东方美学风格 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/home-option1.jpg"
          alt="Art Studio Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* 遮罩层 - 确保文字可读性，营造雅致氛围 */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 via-neutral-800/60 to-neutral-900/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/20" />
      </div>


      {/* ========== 主容器 ========== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* ========== 内容区域 - 居中布局 ========== */}
          <div className="text-center space-y-8 lg:space-y-10 animate-fade-in max-w-4xl mx-auto">
            {/* 品牌标签 - 精致小标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-medium text-neutral-800 tracking-wide">
                {locale === 'zh' && '且静轩艺术工作室'}
                {locale === 'ja' && '且静軒アートスタジオ'}
                {locale === 'en' && 'Qiejingxuan Art Studio'}
              </span>
            </div>

            {/* 主标题 - 使用serif字体，大字号，优雅字距 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight drop-shadow-2xl text-center">
              <span className="block mb-2 animate-slide-up">{t('title')}</span>
            </h1>

            {/* 副标题 - 轻量无衬线，合理行距 */}
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-200 leading-relaxed max-w-2xl mx-auto font-light animate-fade-in-delay drop-shadow-lg">
              {t('subtitle')}
            </p>

            {/* CTA按钮组 - 主次分明，居中显示 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-delay justify-center items-center">
              {/* 主按钮 - 主色调，圆角，柔和阴影 */}
              <Link
                href={`/${locale}/artists`}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-medium rounded-full shadow-xl shadow-primary-900/50 hover:shadow-2xl hover:shadow-primary-900/60 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* 按钮内部渐变光效 */}
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{t('cta')}</span>
                <svg 
                  className="relative z-10 w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* 次按钮 - 描边样式，更轻量 */}
              <Link
                href={`/${locale}/works`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-medium rounded-full hover:border-white/70 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                {locale === 'zh' && '浏览作品'}
                {locale === 'ja' && '作品を見る'}
                {locale === 'en' && 'View Works'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 底部装饰线 ========== */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}

