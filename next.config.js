const urlPrefix = process.env.IS_DEV ? '' : '/2022/pre'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: { urlPrefix },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
