// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Space+Grotesk:wght@400;500;700&display=swap",
          rel: "stylesheet",
        },
      ],
      script: [
        {
          src: "https://www.youtube.com/iframe_api",
          defer: true,
          type: "text/javascript",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/content", "@nuxt/image","nuxt-swiper"],
  /**
   * Nuxt Content
   */
  content: {
    // documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      // theme: "one-dark-pro",
      // OR
      theme: {
        // Default theme (same as single string)
        default: "one-dark-pro",
        // Theme used if `html.dark`
        dark: "one-dark-pro",
        // Theme used if `html.light`
        light: "github-light",
      },
    },
  },
  /**
   * Nuxt Image
   */
  image: {
    domains: ['localhost'],
  },

  /**
   * Color Mode
   */
  colorMode: {
    classSuffix: "",
    fallback: "dark",
    preference: "dark",
  },
});
