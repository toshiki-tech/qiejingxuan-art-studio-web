const fs = require('fs');
const path = require('path');

console.log('🔄 更新图片路径...\n');

// 更新艺术家数据
const artistsPath = path.join(__dirname, '../lib/data/artists.ts');
let artistsContent = fs.readFileSync(artistsPath, 'utf8');

artistsContent = artistsContent
  .replace(/avatar: 'https:\/\/images\.unsplash\.com\/[^']+'/g, (match) => {
    if (match.includes('1494790108377')) return "avatar: '/images/artists/zhang-wei.jpg'";
    if (match.includes('1507003211169')) return "avatar: '/images/artists/takeshi-yamamoto.jpg'";
    if (match.includes('1438761681033')) return "avatar: '/images/artists/emma-chen.jpg'";
    return match;
  });

fs.writeFileSync(artistsPath, artistsContent);
console.log('✅ 更新 artists.ts');

// 更新作品数据
const artworksPath = path.join(__dirname, '../lib/data/artworks.ts');
let artworksContent = fs.readFileSync(artworksPath, 'utf8');

const replacements = [
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1578301978018-3005759f48f7[^']*'/, replace: "image: '/images/artworks/artwork-1.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1579783902614-a3fb3927b6a5[^']*'/, replace: "image: '/images/artworks/artwork-2.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1547826039-bfc35e0f1ea8[^']*'/, replace: "image: '/images/artworks/artwork-3.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1536924940846-227afb31e2a5[^']*'/, replace: "image: '/images/artworks/artwork-4.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1557672172-298e090bd0f1[^']*'/, replace: "image: '/images/artworks/artwork-5.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1561214115-f2f134cc4912[^']*'/, replace: "image: '/images/artworks/artwork-6.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1541961017774-22349e4a1262[^']*'/, replace: "image: '/images/artworks/artwork-7.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1460661419201-fd4cecdf8a8b[^']*'/, replace: "image: '/images/artworks/artwork-8.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1536924940846-227afb31e2a5[^']*'/, replace: "image: '/images/artworks/artwork-9.jpg'" },
];

replacements.forEach(({ pattern, replace }) => {
  artworksContent = artworksContent.replace(pattern, replace);
});

fs.writeFileSync(artworksPath, artworksContent);
console.log('✅ 更新 artworks.ts');

// 更新新闻数据
const newsPath = path.join(__dirname, '../lib/data/news.ts');
let newsContent = fs.readFileSync(newsPath, 'utf8');

const newsReplacements = [
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1531243269054-5ebf6f34081e[^']*'/, replace: "image: '/images/news/exhibition-2024-autumn.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1578632767115-351597cf2477[^']*'/, replace: "image: '/images/news/zhang-wei-award.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1513364776144-60967b0f800f[^']*'/, replace: "image: '/images/news/workshop-yamamoto.jpg'" },
  { pattern: /image: 'https:\/\/images\.unsplash\.com\/photo-1576662712957-9c79ae1280f8[^']*'/, replace: "image: '/images/news/new-artist-li-ming.jpg'" },
];

newsReplacements.forEach(({ pattern, replace }) => {
  newsContent = newsContent.replace(pattern, replace);
});

fs.writeFileSync(newsPath, newsContent);
console.log('✅ 更新 news.ts');

console.log('\n✨ 图片路径更新完成！');
console.log('🔄 请刷新浏览器查看效果');

