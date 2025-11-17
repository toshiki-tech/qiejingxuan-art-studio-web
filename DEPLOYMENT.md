# 部署指南 | Deployment Guide

本项目支持两种部署方式：

## 方案一：Vercel 部署（推荐）⭐

Vercel 是 Next.js 官方推荐的部署平台，与 Next.js 完美集成，支持 SSR、ISR 和 Edge Functions。

### 步骤：

1. **访问 [Vercel](https://vercel.com)** 并登录（可使用 GitHub 账号）

2. **导入项目**
   - 点击 "Add New Project"
   - 选择你的 GitHub 仓库 `qiejingxuan-art-studio-web`
   - Vercel 会自动检测 Next.js 项目

3. **配置项目**
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `./`（默认）
   - Build Command: `npm run build`（默认）
   - Output Directory: `.next`（默认）
   - Install Command: `npm install`（默认）

4. **环境变量**（如果需要）
   - 目前项目无需额外环境变量

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 2-3 分钟）
   - 部署成功后，Vercel 会提供一个 URL，例如：`https://qiejingxuan-art-studio-web.vercel.app`

6. **自定义域名**（可选）
   - 在项目设置中可以添加自定义域名

### 优势：
- ✅ 零配置，自动部署
- ✅ 支持 SSR、ISR、Edge Functions
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 每次 push 自动重新部署
- ✅ 免费套餐足够使用

---

## 方案二：GitHub Pages 部署

GitHub Pages 只支持静态网站，需要将 Next.js 项目配置为静态导出。

### 前置条件：

1. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source: 选择 "GitHub Actions"

2. **配置静态导出**

   需要修改 `next.config.ts` 以支持静态导出：

   ```typescript
   import type { NextConfig } from 'next';
   import createNextIntlPlugin from 'next-intl/plugin';

   const withNextIntl = createNextIntlPlugin();

   const nextConfig: NextConfig = {
     output: 'export', // 启用静态导出
     basePath: process.env.NODE_ENV === 'production' ? '/qiejingxuan-art-studio-web' : '', // 替换为你的仓库名
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
   ```

3. **更新 package.json**

   添加导出脚本：

   ```json
   {
     "scripts": {
       "export": "next build"
     }
   }
   ```

4. **GitHub Actions 工作流**

   已创建 `.github/workflows/deploy.yml`，会自动：
   - 构建项目
   - 生成静态文件
   - 部署到 GitHub Pages

5. **访问网站**

   部署完成后，访问：
   ```
   https://[你的用户名].github.io/qiejingxuan-art-studio-web/
   ```

### 注意事项：

- ⚠️ GitHub Pages 只支持静态导出，不支持 SSR
- ⚠️ 图片优化功能会被禁用
- ⚠️ 某些 Next.js 功能可能不可用
- ⚠️ 需要配置 `basePath` 以匹配仓库名

---

## 推荐方案对比

| 特性 | Vercel | GitHub Pages |
|------|--------|--------------|
| 配置难度 | ⭐ 简单 | ⭐⭐⭐ 复杂 |
| 功能支持 | ✅ 完整 Next.js 功能 | ⚠️ 仅静态导出 |
| 性能 | ✅ 全球 CDN | ✅ 全球 CDN |
| 自动部署 | ✅ 是 | ✅ 是（需配置） |
| 免费额度 | ✅ 充足 | ✅ 充足 |
| 自定义域名 | ✅ 支持 | ✅ 支持 |

**建议：优先使用 Vercel 部署，体验最佳！**

---

## 本地预览生产构建

在部署前，可以在本地预览生产构建：

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

访问 `http://localhost:3000` 查看效果。
