module.exports = {
    // 基本路径
    publicPath: './', //之前是 baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath。
    devServer: {
        port: 8080,
        disableHostCheck: true
    },
    chainWebpack: (config) => {
        config.resolve.symlinks(true) // 修复热更新失效
    }
}