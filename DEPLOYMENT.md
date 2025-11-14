# 部署指南

本指南将帮助您将「且静轩」网站部署到生产环境。

## 📋 部署前检查清单

### 必须完成的项目

- [ ] 替换所有占位图片为实际图片
- [ ] 更新艺术家和作品数据
- [ ] 测试所有页面和链接
- [ ] 测试三种语言切换
- [ ] 测试移动端响应式
- [ ] 配置环境变量

### 推荐完成的项目

- [ ] 添加网站图标（favicon）
- [ ] 配置 SEO metadata
- [ ] 添加 Google Analytics
- [ ] 配置错误监控（Sentry）
- [ ] 性能测试（Lighthouse）

## 🚀 部署到 Vercel（推荐）

### 为什么选择 Vercel？

- ✅ Next.js 官方平台，零配置
- ✅ 自动 HTTPS 和 CDN
- ✅ 持续部署（Git 集成）
- ✅ 免费层足够使用

### 部署步骤

#### 1. 准备 Git 仓库

```bash
# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Qiejingxuan Art Studio"

# 连接到 GitHub
git remote add origin https://github.com/your-username/qiejingxuan-art-studio.git
git branch -M main
git push -u origin main
```

#### 2. 导入到 Vercel

1. 访问 https://vercel.com
2. 点击 "New Project"
3. 导入 GitHub 仓库
4. Vercel 会自动检测 Next.js
5. 点击 "Deploy"

#### 3. 配置环境变量（可选）

在 Vercel 项目设置中添加：

```
RESEND_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

#### 4. 配置自定义域名（可选）

1. 在 Vercel 项目设置中找到 "Domains"
2. 添加您的域名
3. 按照指示配置 DNS

## 🌐 部署到 Netlify

### 部署步骤

#### 1. 准备代码

确保 Git 仓库已推送到 GitHub/GitLab

#### 2. 导入到 Netlify

1. 访问 https://netlify.com
2. 点击 "New site from Git"
3. 选择仓库
4. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `.next`

#### 3. 添加配置文件

创建 `netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## 🐳 使用 Docker 部署

### Dockerfile

创建 `Dockerfile`：

```dockerfile
FROM node:20-alpine AS base

# 安装依赖
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# 构建
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 运行
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### 构建和运行

```bash
# 构建镜像
docker build -t qiejingxuan-art-studio .

# 运行容器
docker run -p 3000:3000 qiejingxuan-art-studio
```

## ☁️ 部署到云服务器

### 使用 PM2（适用于 VPS/服务器）

#### 1. 服务器准备

```bash
# 安装 Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 安装 PM2
sudo npm install -g pm2
```

#### 2. 部署代码

```bash
# 克隆代码
git clone https://github.com/your-username/qiejingxuan-art-studio.git
cd qiejingxuan-art-studio

# 安装依赖
npm install

# 构建
npm run build
```

#### 3. 使用 PM2 运行

创建 `ecosystem.config.js`：

```javascript
module.exports = {
  apps: [{
    name: 'qiejingxuan',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

启动应用：

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 4. 配置 Nginx 反向代理

创建 Nginx 配置 `/etc/nginx/sites-available/qiejingxuan`：

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/qiejingxuan /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 5. 配置 SSL（Let's Encrypt）

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 🔧 环境变量配置

### 生产环境变量

创建 `.env.production`（不要提交到 Git）：

```env
# Resend（邮件服务）
RESEND_API_KEY=re_xxxxxxxxxxxx

# Sanity CMS（未来使用）
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token

# 网站 URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Google Analytics（可选）
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 在各平台设置环境变量

#### Vercel
项目设置 → Environment Variables

#### Netlify
Site settings → Build & deploy → Environment

#### 服务器
添加到 `.env.production` 或在 PM2 配置中设置

## 📊 监控和分析

### Google Analytics

1. 创建 GA4 属性
2. 获取测量 ID
3. 添加环境变量 `NEXT_PUBLIC_GA_ID`
4. 在 `app/layout.tsx` 添加跟踪脚本

### Sentry（错误监控）

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

### Vercel Analytics

在 Vercel 项目设置中启用 Analytics（免费）

## 🔄 持续部署

### 设置自动部署

#### Vercel/Netlify
- 推送到 `main` 分支自动部署到生产环境
- 推送到其他分支创建预览环境

#### GitHub Actions

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      # 添加部署步骤
```

## 🧪 部署验证

部署后检查：

### 功能测试

```bash
# 检查所有语言
curl https://yourdomain.com/zh
curl https://yourdomain.com/ja
curl https://yourdomain.com/en

# 检查关键页面
curl https://yourdomain.com/zh/artists
curl https://yourdomain.com/zh/works
```

### 性能测试

使用 Lighthouse 测试：
```bash
npm install -g lighthouse
lighthouse https://yourdomain.com --view
```

目标分数：
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

### SEO 检查

- [ ] 所有页面有正确的 title 和 description
- [ ] 实现 hreflang 标签
- [ ] 生成 sitemap.xml
- [ ] 配置 robots.txt

## 🆘 故障排除

### 构建失败

```bash
# 本地测试构建
npm run build

# 检查日志
# 查看 Vercel/Netlify 构建日志
```

### 404 错误

检查 `middleware.ts` 配置是否正确

### 图片不显示

检查 `next.config.ts` 中的 `images.remotePatterns`

### 环境变量不生效

- 确认变量名正确
- 客户端变量必须以 `NEXT_PUBLIC_` 开头
- 重新部署以应用新的环境变量

## 📈 性能优化建议

### 图片优化

1. 使用 WebP 格式
2. 提供多种尺寸
3. 使用 CDN（Cloudinary/Vercel Image）

### 代码优化

```bash
# 分析包大小
npm run build
npx @next/bundle-analyzer
```

### 缓存策略

在 `next.config.ts` 配置：

```typescript
const nextConfig = {
  headers: async () => [
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
```

## 🔐 安全检查

- [ ] 环境变量不提交到 Git
- [ ] API 密钥使用环境变量
- [ ] HTTPS 已启用
- [ ] 定期更新依赖

```bash
# 检查漏洞
npm audit

# 自动修复
npm audit fix
```

## 📞 技术支持

部署遇到问题？

1. 查看平台文档
   - Vercel: https://vercel.com/docs
   - Netlify: https://docs.netlify.com
   - Next.js: https://nextjs.org/docs

2. 检查构建日志

3. 联系开发团队

---

**祝您部署顺利！** 🚀

