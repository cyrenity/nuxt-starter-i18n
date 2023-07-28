// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.yaml',
      },
      {
        code: 'fr',
        name: 'French',
        file: 'fr.yaml',
      },
      {
        code: 'ur',
        name: 'اردو',
        file: 'ur.yaml',
        dir: 'rtl',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'ur',
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
});
