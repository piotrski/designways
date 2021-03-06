const path = require('path')
const withImages = require("next-images");

module.exports = withImages({
    reactStrictMode: true,
    poweredByHeader: false,
    target: 'serverless',
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles/**/*.*')],
    },
})