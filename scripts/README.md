# 图片下载脚本说明

## 🎯 用途

将所有 Unsplash 的在线图片下载到本地 `public/images/` 目录，解决网络不稳定导致的图片加载问题。

## 📦 使用步骤

### 1. 下载所有图片

在项目根目录运行：

```bash
node scripts/download-images.js
```

这会下载：
- 3 张艺术家头像 → `public/images/artists/`
- 9 张作品图片 → `public/images/artworks/`

### 2. 更新代码中的图片路径

下载完成后运行：

```bash
node scripts/update-image-paths.js
```

这会自动更新：
- `lib/data/artists.ts` - 艺术家头像路径
- `lib/data/artworks.ts` - 作品图片路径

### 3. 刷新浏览器

图片现在从本地加载，速度更快更稳定！

## 🔍 下载的图片列表

### 艺术家头像 (500x500)
- `zhang-wei.jpg` - 张薇
- `takeshi-yamamoto.jpg` - 山本武
- `emma-chen.jpg` - 陈艾玛

### 作品图片 (800x1000)
- `artwork-1.jpg` - 山水之间
- `artwork-2.jpg` - 雾隐
- `artwork-3.jpg` - 流动的时光
- `artwork-4.jpg` - 再生森林
- `artwork-5.jpg` - 自然的回声
- `artwork-6.jpg` - 循环
- `artwork-7.jpg` - 数字梦境
- `artwork-8.jpg` - 身份的碎片
- `artwork-9.jpg` - 文化交织

## ⚠️ 注意事项

1. 确保网络连接正常（需要访问 Unsplash）
2. 下载过程需要几分钟，请耐心等待
3. 如果某些图片下载失败，可以重新运行脚本
4. 图片总大小约 10-15 MB

## 🎨 优势

✅ **100% 稳定** - 不依赖外部服务  
✅ **加载更快** - 本地文件加载  
✅ **离线可用** - 无需网络连接  
✅ **易于管理** - 可以随时替换图片

