import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

// 获取仓库名（从环境变量或默认值）
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'qiejingxuan-art-studio-web';
const basePath = process.env.NODE_ENV === 'production' ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export', // 启用静态导出
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
};

export default withNextIntl(nextConfig);

