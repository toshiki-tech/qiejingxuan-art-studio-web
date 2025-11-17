/**
 * 获取 basePath
 * 在 GitHub Pages 部署时，需要包含仓库名作为 basePath
 */
export function getBasePath(): string {
  // 客户端：优先使用 NEXT_PUBLIC_BASE_PATH 环境变量，否则从路径推断
  if (typeof window !== 'undefined') {
    // 优先使用环境变量（在构建时注入）
    if (process.env.NEXT_PUBLIC_BASE_PATH) {
      return process.env.NEXT_PUBLIC_BASE_PATH;
    }
    // 从当前路径推断 basePath
    const path = window.location.pathname;
    if (path.startsWith('/qiejingxuan-art-studio-web')) {
      return '/qiejingxuan-art-studio-web';
    }
    return '';
  }
  
  // 服务端：从环境变量获取（构建时）
  // 在 GitHub Actions 构建时，GITHUB_REPOSITORY 会被设置
  // 在本地开发时，NODE_ENV 不是 production，返回空字符串
  if (process.env.NODE_ENV === 'production') {
    const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
    if (repoName) {
      return `/${repoName}`;
    }
    // 如果没有环境变量，默认使用仓库名（用于本地生产构建测试）
    return '/qiejingxuan-art-studio-web';
  }
  
  return '';
}

/**
 * 为路径添加 basePath
 * 用于图片、链接等静态资源路径
 */
export function withBasePath(path: string): string {
  const basePath = getBasePath();
  if (!basePath) return path;
  
  // 如果路径已经是绝对路径且以 basePath 开头，直接返回
  if (path.startsWith(basePath)) {
    return path;
  }
  
  // 如果路径是绝对路径（以 / 开头），添加 basePath
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  
  // 相对路径，直接返回
  return path;
}

