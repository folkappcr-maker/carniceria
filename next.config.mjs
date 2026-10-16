/** @type {import('next').NextConfig} */
const REPO = 'carniceria';

/**
 * En GitHub Pages el sitio se sirve desde /carniceria (repo de proyecto),
 * así que el basePath solo se aplica en el build de CI.
 */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Landing 100 % estática: se exporta a out/ y se publica como archivos sueltos.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${REPO}` : '',
};

export default nextConfig;
