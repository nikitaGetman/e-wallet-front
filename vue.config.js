module.exports = {
  devServer: {
    proxy: 'http://localhost:3000',
    open: true,
    watchOptions: {
      poll: true
    }
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/_vars.scss";`
      }
    }
  }
}
