export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global App headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "My Nuxt Application",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "This is an awesome description of my Nuxt app"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src:
          "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver,smoothscroll&flags=gated",
        body: true
      }
    ]
  },
  /*
   ** Default transition for all pages
   */
  pageTransition: {
    name: "slide-left",
    mode: "out-in"
  },

  /*
   ** Customize the progress-bar color
   ** See: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
   */
  loading: {
    color: "#fc5752",
    height: "3px"
  },

  /*
   ** Global CSS
   */
  css: [
    "~/styles/variables-css.scss",
    "~/styles/global.scss",
    "~/styles/transitions.scss",
    "~/styles/fonts.css" // Be sure to turn on the font loader plugin and config it
  ],

  /*
   ** Load SCSS into each component
   */
  styleResources: {
    scss: ["~/styles/variables-scss.scss"]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/global-directive-loader.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/image"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources"]
};
