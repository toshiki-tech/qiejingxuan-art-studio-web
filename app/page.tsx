import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting...',
};

export default function RootPage() {
  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=/zh" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.pathname === '/' || window.location.pathname === '/qiejingxuan-art-studio-web/') {
                window.location.replace('/qiejingxuan-art-studio-web/zh');
              } else {
                window.location.replace('/zh');
              }
            `,
          }}
        />
      </head>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-neutral-600">正在跳转到中文页面...</p>
          <p className="text-sm text-neutral-400 mt-2">
            <a href="/zh" className="text-primary-600 hover:underline">
              如果未自动跳转，请点击这里
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

