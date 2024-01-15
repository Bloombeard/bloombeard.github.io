/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    experimental: {
        appDir: true,
    },
    future: { webpack5: true },
    sassOptions: {
        includePaths: [path.join(__dirname, 'app')],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })
        config.resolve.alias.canvas = false
        config.resolve.alias.encoding = false
        return config;
    },
}

module.exports = nextConfig
