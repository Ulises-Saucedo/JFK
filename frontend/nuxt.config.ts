// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "dayjs-nuxt",
    "nuxt-aos",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "nuxt-marquee",
  ],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    admin: "/admin",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/logotipo.png" }],
    },
  },
  css: ["~/assets/css/style.css"],
  ssr: false,
});
