const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  },  
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Shopping Cart by Kumar Desai";
            return args;
        })
  }, 
  publicPath: '/ShoppingCartVueJs/'
})
