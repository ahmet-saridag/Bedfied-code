
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bedfied - Doğa harikaları',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bedfied - Doğa harikaları' },
      { name:'google-site-verification' , content:'O7JRKXx4ZHMowkmqSfPr7T-1uWoadcfctbDdXZe-lAg'  }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/bedfiedIcon.png' },
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  loading: {
    color:'#009eff'
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/vuelidate",
    "@/plugins/vue2-google-maps.js",
    "@/assets/style/transition.css",
    "@/plugins/vClickOutside",
  ],
  transition: {
    name: "layout",
    mode: "out-in"
  },
  serverMiddleware: [
    '~/api'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  env: {
    SENDGRID_API_KEY: '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',

  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDKkrAWf3z0wEdwZDgomcPxoQyx0Q9P5fU",
          authDomain: "munhasir-ad882.firebaseapp.com",
          databaseURL: "https://munhasir-ad882-default-rtdb.firebaseio.com",
          projectId: "munhasir-ad882",
          storageBucket: "munhasir-ad882.appspot.com",
          messagingSenderId: "645032906993",
          appId: "1:645032906993:web:3579e3a8a7a4dfeca55950",
          measurementId: "G-BKV38HPNHG"

        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ],


  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
