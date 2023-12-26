/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'app')],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
}

module.exports = nextConfig
