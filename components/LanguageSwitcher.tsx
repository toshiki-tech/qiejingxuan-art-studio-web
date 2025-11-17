'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { getBasePath } from '@/lib/utils/path';

const languages = [
  { code: 'zh', name: '中文', flag: '🇨🇳', label: 'CN' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', label: 'JP' },
  { code: 'en', name: 'English', flag: '🇺🇸', label: 'EN' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    // Next.js 的 usePathname() 返回的路径不包含 basePath
    // router.push() 会自动添加 basePath，所以我们只需要传递不包含 basePath 的路径
    
    // 移除开头的 locale 部分（如 /ja, /zh, /en），获取路径的其余部分
    let pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    
    // 如果路径是根路径，确保有斜杠
    if (pathWithoutLocale === '') {
      pathWithoutLocale = '/';
    }
    
    // 构建新路径：/新locale + 路径其余部分（不包含 basePath，router.push 会自动添加）
    const newPathname = `/${langCode}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white hover:bg-neutral-50 border-2 border-neutral-900 transition-all shadow-md hover:shadow-lg"
        aria-label="Switch language"
      >
        <span className="text-base font-bold text-neutral-900">{currentLanguage.label}</span>
        <svg
          className={`w-4 h-4 text-neutral-900 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-xl border-2 border-neutral-400 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors ${
                locale === lang.code 
                  ? 'bg-primary-700 text-white hover:bg-primary-800' 
                  : 'text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-bold">{lang.name}</span>
              {locale === lang.code && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

