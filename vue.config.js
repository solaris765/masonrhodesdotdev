const fs = require(`fs`)

module.exports = {
    outputDir: `./dist`,
    devServer: {
        https: {
            key: fs.readFileSync(`./cert/localhost.key`),
            cert: fs.readFileSync(`./cert/localhost.crt`)
        },
        public: `0.0.0.0:8080`,
        open: true
    },
    productionSourceMap: false,
    configureWebpack: {
        devtool: `source-map`
    }
}
