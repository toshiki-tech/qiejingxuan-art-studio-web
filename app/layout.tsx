import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '且静轩 Qiejingxuan Art Studio',
  description: 'Represented artists and commissioned artworks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Next.js 15 要求根布局必须包含 html 和 body 标签
  // lang 属性会在 [locale]/layout.tsx 中通过客户端脚本动态更新
  return (
    <html lang="zh">
      <body className="antialiased">{children}</body>
    </html>
  );
}

