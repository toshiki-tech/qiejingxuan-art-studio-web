import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

// 获取仓库名（从环境变量或默认值）
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'qiejingxuan-art-studio-web';
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  // 只在生产环境启用静态导出（用于 GitHub Pages）
  ...(isProduction && { output: 'export' }),
  basePath, // 配置基础路径
  assetPrefix: basePath, // 确保静态资源也使用 basePath
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js Image 优化
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath, // 在客户端也可以访问 basePath
  },
};

export default withNextIntl(nextConfig);

