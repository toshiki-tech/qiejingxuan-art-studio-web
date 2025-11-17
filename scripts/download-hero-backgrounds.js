const https = require('https');
const fs = require('fs');
const path = require('path');

// 创建目录
const heroDir = path.join(__dirname, '..', 'public', 'images', 'hero');
if (!fs.existsSync(heroDir)) {
  fs.mkdirSync(heroDir, { recursive: true });
}

// Hero背景图URL列表 - 每个页面多个备选
const heroBackgrounds = {
  home: [
    {
      name: 'home-option1.jpg',
      url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
      description: '艺术工作室场景'
    },
    {
      name: 'home-option2.jpg',
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
      description: '创意工作空间'
    },
    {
      name: 'home-option3.jpg',
      url: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2070&auto=format&fit=crop',
      description: '简约展览空间'
    },
    {
      name: 'home-option4.jpg',
      url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2070&auto=format&fit=crop',
      description: '艺术作品展示墙'
    }
  ],
  works: [
    {
      name: 'works-option1.jpg',
      url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2069&auto=format&fit=crop',
      description: '艺术画廊展览空间'
    },
    {
      name: 'works-option2.jpg',
      url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2070&auto=format&fit=crop',
      description: '艺术作品展示墙'
    },
    {
      name: 'works-option3.jpg',
      url: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2070&auto=format&fit=crop',
      description: '简约展览空间'
    },
    {
      name: 'works-option4.jpg',
      url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
      description: '艺术工作室场景'
    }
  ],
  commissions: [
    {
      name: 'commissions-option1.jpg',
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
      description: '艺术工作室创作空间'
    },
    {
      name: 'commissions-option2.jpg',
      url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
      description: '艺术工作室场景'
    },
    {
      name: 'commissions-option3.jpg',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop',
      description: '艺术工具和材料'
    },
    {
      name: 'commissions-option4.jpg',
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
      description: '创意工作空间'
    }
  ],
  about: [
    {
      name: 'about-option1.jpg',
      url: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=2070&auto=format&fit=crop',
      description: '艺术交流国际合作'
    },
    {
      name: 'about-option2.jpg',
      url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
      description: '艺术工作室场景'
    },
    {
      name: 'about-option3.jpg',
      url: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2070&auto=format&fit=crop',
      description: '简约展览空间'
    },
    {
      name: 'about-option4.jpg',
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
      description: '创意工作空间'
    }
  ]
};

// 下载函数
function downloadImage(url, filepath, description) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ 下载成功: ${path.basename(filepath)} - ${description}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // 处理重定向
        file.close();
        fs.unlinkSync(filepath);
        downloadImage(response.headers.location, filepath, description)
          .then(resolve)
          .catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        console.log(`❌ 下载失败: ${path.basename(filepath)} - HTTP ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      console.log(`❌ 下载失败: ${path.basename(filepath)} - ${err.message}`);
      reject(err);
    });
  });
}

// 下载所有图片
async function downloadAll() {
  console.log('开始下载Hero背景图...\n');
  
  for (const [page, images] of Object.entries(heroBackgrounds)) {
    console.log(`\n📦 ${page.toUpperCase()} 页面背景图:`);
    
    for (const image of images) {
      const filepath = path.join(heroDir, image.name);
      try {
        await downloadImage(image.url, filepath, image.description);
      } catch (error) {
        console.log(`   跳过: ${image.name}`);
      }
    }
  }
  
  console.log('\n✨ 下载完成！');
  console.log(`\n图片保存在: ${heroDir}`);
  console.log('\n每个页面有4个备选图片，您可以选择最合适的：');
  console.log('- home-option1.jpg ~ home-option4.jpg');
  console.log('- works-option1.jpg ~ works-option4.jpg');
  console.log('- commissions-option1.jpg ~ commissions-option4.jpg');
  console.log('- about-option1.jpg ~ about-option4.jpg');
}

downloadAll().catch(console.error);

