const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: './',
  },
  assetPrefix: isProd ? '/' : '',
  basePath: isProd ? '/squireofsoftware.github.io' : undefined
}
