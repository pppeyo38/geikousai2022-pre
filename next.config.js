const urlPrefix = process.env.IS_DEV ? '' : '/2022/pre'

module.exports = {
  basePath: urlPrefix,
  assetPrefix: urlPrefix,
  publicRuntimeConfig: { urlPrefix },
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
