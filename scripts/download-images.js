const https = require('https');
const fs = require('fs');
const path = require('path');

// 创建目录（如果不存在）
const createDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ 创建目录: ${dirPath}`);
  }
};

// 下载图片
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ 下载成功: ${path.basename(filepath)}`);
          resolve();
        });
      } else {
        reject(new Error(`下载失败: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// 图片列表
const images = {
  artists: [
    {
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500',
      filename: 'zhang-wei.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500',
      filename: 'takeshi-yamamoto.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500',
      filename: 'emma-chen.jpg'
    }
  ],
  artworks: [
    {
      url: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&h=1000',
      filename: 'artwork-1.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000',
      filename: 'artwork-2.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=1000',
      filename: 'artwork-3.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=1000',
      filename: 'artwork-4.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=1000',
      filename: 'artwork-5.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=1000',
      filename: 'artwork-6.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000',
      filename: 'artwork-7.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1000',
      filename: 'artwork-8.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=1000',
      filename: 'artwork-9.jpg'
    }
  ],
  news: [
    {
      url: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=1200&h=675',
      filename: 'exhibition-2024-autumn.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=675',
      filename: 'zhang-wei-award.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=675',
      filename: 'workshop-yamamoto.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=1200&h=675',
      filename: 'new-artist-li-ming.jpg'
    }
  ],
  team: [
    {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400',
      filename: 'tosaka-hitomi.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400',
      filename: 'chen-siyuan.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400',
      filename: 'tanaka-yuko.jpg'
    }
  ],
  about: [
    {
      url: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&h=800',
      filename: 'art-space.jpg'
    }
  ]
};

// 主函数
async function main() {
  console.log('🎨 开始下载图片...\n');

  // 创建目录
  const artistsDir = path.join(__dirname, '../public/images/artists');
  const artworksDir = path.join(__dirname, '../public/images/artworks');
  
  createDir(artistsDir);
  createDir(artworksDir);

  console.log('\n📥 下载艺术家头像...');
  for (const img of images.artists) {
    try {
      const filepath = path.join(artistsDir, img.filename);
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`❌ 下载失败 ${img.filename}:`, error.message);
    }
  }

  console.log('\n📥 下载作品图片...');
  for (const img of images.artworks) {
    try {
      const filepath = path.join(artworksDir, img.filename);
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`❌ 下载失败 ${img.filename}:`, error.message);
    }
  }

  console.log('\n📥 下载新闻图片...');
  const newsDir = path.join(__dirname, '../public/images/news');
  createDir(newsDir);
  
  for (const img of images.news) {
    try {
      const filepath = path.join(newsDir, img.filename);
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`❌ 下载失败 ${img.filename}:`, error.message);
    }
  }

  console.log('\n📥 下载团队成员照片...');
  const teamDir = path.join(__dirname, '../public/images/team');
  createDir(teamDir);
  
  for (const img of images.team) {
    try {
      const filepath = path.join(teamDir, img.filename);
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`❌ 下载失败 ${img.filename}:`, error.message);
    }
  }

  console.log('\n📥 下载关于页面图片...');
  const aboutDir = path.join(__dirname, '../public/images/about');
  createDir(aboutDir);
  
  for (const img of images.about) {
    try {
      const filepath = path.join(aboutDir, img.filename);
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`❌ 下载失败 ${img.filename}:`, error.message);
    }
  }

  console.log('\n✨ 所有图片下载完成！');
  console.log('📁 艺术家头像: public/images/artists/');
  console.log('📁 作品图片: public/images/artworks/');
  console.log('📁 新闻图片: public/images/news/');
  console.log('📁 团队照片: public/images/team/');
  console.log('📁 关于页面: public/images/about/');
  console.log('\n💡 下一步: 运行 node scripts/update-image-paths.js 更新图片路径');
}

main().catch(console.error);

