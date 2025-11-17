/**
 * 获取带 basePath 的路径
 * 在 GitHub Pages 部署时，需要包含仓库名作为 basePath
 */
export function getBasePath(): string {
  // 在生产环境且设置了 GITHUB_REPOSITORY 时，使用仓库名作为 basePath
  if (typeof window !== 'undefined') {
    // 客户端：从当前路径推断 basePath
    const path = window.location.pathname;
    if (path.startsWith('/qiejingxuan-art-studio-web')) {
      return '/qiejingxuan-art-studio-web';
    }
    return '';
  }
  
  // 服务端：从环境变量获取
  if (process.env.NODE_ENV === 'production') {
    const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'qiejingxuan-art-studio-web';
    return `/${repoName}`;
  }
  
  return '';
}

/**
 * 为路径添加 basePath
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

