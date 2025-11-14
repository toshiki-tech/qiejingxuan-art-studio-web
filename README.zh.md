# 且静轩艺术工作室 - 开发文档

## 项目概述

这是为艺术工作室「且静轩」创建的多语言官网 Demo 版本。网站核心功能包括：

- ✅ 艺术家展示
- ✅ 作品展示
- ✅ 定制咨询
- ✅ 品牌理念传播
- ❌ 不包含在线交易功能

## 技术选型说明

### 为什么选择 Next.js 15？

1. **App Router**：更好的路由组织和布局系统
2. **SSR/SSG**：对 SEO 友好，适合作品展示
3. **图片优化**：自动优化图片加载
4. **国际化支持**：与 next-intl 完美配合

### 为什么选择 next-intl？

1. **类型安全**：完整的 TypeScript 支持
2. **简单易用**：基于 JSON 的翻译文件
3. **性能优秀**：服务端渲染时加载翻译
4. **维护活跃**：社区支持良好

## 开发规范

### 文件命名

- 组件：`PascalCase.tsx`（如 `ArtistCard.tsx`）
- 工具函数：`camelCase.ts`（如 `placeholders.ts`）
- 类型定义：`types.ts`
- 数据文件：`artists.ts`, `artworks.ts`

### 组件编写

```typescript
// 1. 导入依赖
import { useTranslations } from 'next-intl';
import { Locale } from '@/lib/types';

// 2. 定义 Props 接口
interface ComponentProps {
  locale: Locale;
}

// 3. 导出组件
export default function Component({ locale }: ComponentProps) {
  const t = useTranslations('namespace');
  
  return (
    <div>{t('key')}</div>
  );
}
```

### 多语言内容

所有用户可见的文本都应该通过翻译系统：

```typescript
// ❌ 错误
<h1>欢迎</h1>

// ✅ 正确
const t = useTranslations('home');
<h1>{t('welcome')}</h1>
```

### 数据获取

```typescript
// 从 mock 数据获取
import { artists } from '@/lib/data/artists';
import { getArtistBySlug } from '@/lib/data/artists';

// 使用
const artist = getArtistBySlug('zhang-wei');
```

## 常见问题

### Q: 如何添加新的艺术家？

A: 编辑 `lib/data/artists.ts`，在数组中添加新对象：

```typescript
{
  slug: 'new-artist',
  name: { zh: '新艺术家', ja: '新しいアーティスト', en: 'New Artist' },
  avatar: '/images/artists/new-artist.jpg',
  nationality: '国家',
  bio: { zh: '简介...', ja: '略歴...', en: 'Bio...' },
  artworks: ['artwork-10', 'artwork-11'],
}
```

### Q: 如何添加新的页面？

A: 在 `app/[locale]/` 下创建新目录和 `page.tsx`：

```typescript
// app/[locale]/news/page.tsx
export default function NewsPage({ params: { locale } }) {
  // 页面内容
}
```

别忘了在 `messages/{locale}.json` 中添加翻译。

### Q: 如何修改样式？

A: 使用 Tailwind CSS 类：

```tsx
<div className="bg-primary-600 text-white p-4 rounded-lg">
  内容
</div>
```

需要自定义颜色或间距时，编辑 `tailwind.config.ts`。

### Q: 表单提交如何工作？

A: 当前是 Demo 模式，数据只会输出到控制台。实际部署时需要：

1. 安装 Resend：`npm install resend`
2. 创建 API 路由：`app/api/contact/route.ts`
3. 更新 `ContactForm.tsx` 中的提交逻辑

示例代码：

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'contact@qiejingxuan.com',
    to: 'info@qiejingxuan.com',
    subject: `New contact from ${data.name}`,
    html: `<p>${data.message}</p>`,
  });
  
  return Response.json({ success: true });
}
```

### Q: 如何接入 Sanity CMS？

A: 后续步骤：

1. 安装依赖：
```bash
npm install @sanity/client @sanity/image-url
```

2. 创建 Sanity 配置：
```typescript
// lib/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
```

3. 替换数据获取逻辑：
```typescript
// 从
import { artists } from '@/lib/data/artists';

// 到
const artists = await client.fetch('*[_type == "artist"]');
```

## 性能优化建议

### 图片优化

1. 使用 Next.js Image 组件（已实现）
2. 提供合适尺寸的图片
3. 考虑使用 WebP 格式
4. 配置 CDN

### 代码分割

Next.js 15 自动进行代码分割，但可以进一步优化：

```typescript
// 动态导入重型组件
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### 字体优化

已使用 Next.js 字体优化：

```typescript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

## 部署检查清单

- [ ] 替换所有占位图片
- [ ] 更新 SEO metadata
- [ ] 配置环境变量
- [ ] 测试所有语言版本
- [ ] 测试所有表单
- [ ] 测试移动端响应式
- [ ] 配置域名
- [ ] 配置 SSL 证书
- [ ] 设置分析工具（Google Analytics）
- [ ] 配置错误监控（Sentry）
- [ ] 性能测试（Lighthouse）

## 维护指南

### 日常维护

1. **更新内容**：直接编辑 JSON 翻译文件
2. **添加作品**：编辑 `lib/data/artworks.ts`
3. **修改样式**：更新 Tailwind 类名

### 依赖更新

```bash
# 检查可更新的包
npm outdated

# 更新所有依赖（谨慎）
npm update

# 更新特定包
npm update next
```

### 监控

建议配置：
- **Vercel Analytics**：页面性能
- **Google Analytics**：用户行为
- **Sentry**：错误追踪

## 支持

如有问题，请联系开发团队或查看：

- [Next.js 文档](https://nextjs.org/docs)
- [next-intl 文档](https://next-intl-docs.vercel.app/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

---

**版本**：Demo v0.1.0  
**最后更新**：2024年11月

