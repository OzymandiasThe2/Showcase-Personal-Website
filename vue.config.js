module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.module
        .rule("pdf")
        .test(/.pdf$/)
        .use("file-loader?name=[path][name].[ext]")
        .loader("file-loader");
  }
}

