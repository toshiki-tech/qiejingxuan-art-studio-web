# 快速开始指南

## 🚀 立即运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 访问网站

打开浏览器访问：
- 中文版：http://localhost:3000/zh
- 日文版：http://localhost:3000/ja
- 英文版：http://localhost:3000/en

## 📱 查看所有页面

- **首页**：`/[locale]`
- **艺术家列表**：`/[locale]/artists`
- **艺术家详情**：`/[locale]/artists/zhang-wei`（还有 takeshi-yamamoto, emma-chen）
- **作品集**：`/[locale]/works`
- **定制服务**：`/[locale]/commissions`
- **关于我们**：`/[locale]/about`
- **联系我们**：`/[locale]/contact`

## ✏️ 快速修改内容

### 修改文本

编辑 `messages/` 目录下的 JSON 文件：
- `zh.json` - 中文
- `ja.json` - 日文
- `en.json` - 英文

### 修改艺术家信息

编辑 `lib/data/artists.ts`

### 修改作品信息

编辑 `lib/data/artworks.ts`

### 修改颜色主题

编辑 `tailwind.config.ts` 中的 `colors` 配置

## 📸 替换占位图片

当前使用的是 placehold.co 的占位图片。要使用真实图片：

1. 将图片放入 `public/images/artists/` 或 `public/images/artworks/`
2. 更新 `lib/data/artists.ts` 和 `lib/data/artworks.ts` 中的图片路径
3. 将 URL 从 `https://placehold.co/...` 改为 `/images/artists/filename.jpg`

## 🎨 自定义样式

项目使用 Tailwind CSS，直接修改组件中的 className 即可：

```tsx
<div className="bg-primary-600 text-white p-4 rounded-lg">
  内容
</div>
```

## 📧 启用邮件功能

当前联系表单仅输出到控制台。要启用实际邮件功能：

1. 注册 Resend 账户：https://resend.com
2. 创建 `.env.local` 文件（参考 `.env.example`）
3. 添加 API key
4. 创建 API 路由处理表单提交

详细说明见 `README.zh.md`

## 🚀 部署

### 部署到 Vercel（推荐）

1. 推送代码到 GitHub
2. 访问 https://vercel.com
3. 导入 GitHub 仓库
4. Vercel 会自动识别并部署

### 手动构建

```bash
npm run build
npm start
```

## ❓ 常见问题

### 页面显示 404

确保访问的 URL 包含语言代码，如 `/zh`、`/ja` 或 `/en`

### 图片不显示

检查 `next.config.ts` 中的 `images.remotePatterns` 配置是否正确

### 语言切换不工作

检查浏览器控制台是否有错误，确认所有翻译文件都已正确创建

## 📚 更多信息

- 完整文档：`README.md`
- 开发文档：`README.zh.md`
- Next.js 文档：https://nextjs.org/docs
- next-intl 文档：https://next-intl-docs.vercel.app

---

**🎉 祝您使用愉快！如有问题，请查看完整文档或联系开发团队。**

