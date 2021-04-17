
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'study_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
       // example vue-meta
      { hid: 'title', name: 'title', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' }



    ]
  },
  /*
  ** Custom SCSS
  */
  css: [
    { src: '~/assets/css/style.css', lang: 'css' }
  ],
 /*
  ** Custom Plugin
   */
  plugins: [
    { src: '~plugins/swiper.js', ssr: false }
  ],
  /*
  /*
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        const vueLoader = config.module.rules.find(
          ({loader}) => loader === 'vue-loader')
          const { options: {loaders} } = vueLoader || { options: {} }
          if (loaders) {
            for (const loader of Object.values(loaders)) {
              changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
            }
          }
          config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
          
        }
      }
      
    }
    
  }
  
  function changeLoaderOptions (loaders) {
    if (loaders) {
      for (const loader of loaders) {
        if (loader.loader === 'sass-loader') {
          Object.assign(loader.options, {
            includePaths: ['./assets'],
            // data: '@import "_imports";'
          })
        }
      }
    }
  }
  