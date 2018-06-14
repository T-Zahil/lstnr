const { 
  API_ROOT 
} = require( './config' )

module.exports = {
  head: {
    title: 'lstnr',
    meta: [ {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'H4 startup weeks project'
      }
    ],
    link: [ {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    } ]
  },
  plugins: [ {
    src: '~/plugins/localStorage.js',
    ssr: false
  } ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  modules: [
    [ '@nuxtjs/axios', {
      baseURL: API_ROOT
    } ],
    'nuxt-buefy'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend( config, {
      isDev,
      isClient
    } ) {
      if ( isDev && isClient ) {
        config.module.rules.push( {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        } )
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  }
}
