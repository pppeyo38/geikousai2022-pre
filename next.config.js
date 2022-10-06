/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = '/2022/pre'

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == 'production'

module.exports = {
  basePath: isProd ? SUB_DIRECTORY : '',
  assetPrefix: isProd ? SUB_DIRECTORY : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
}
