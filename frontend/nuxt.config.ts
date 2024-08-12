// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "nuxt-swiper",
    "dayjs-nuxt",
    "nuxt-bootstrap-icons",
    "nuxt-aos",
  ],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    admin: "/admin",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  tailwindcss: {
    configPath: "tailwind.config",
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/logotipo.png" }],
    },
  },
  routeRules: {
    "/**": { ssr: false },
    "/blog/:slug": { ssr: true },
  },
});
