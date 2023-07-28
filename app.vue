<script setup>
const { locale, locales, setLocaleCookie, getLocaleCookie } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

const setLocaleCustom = (locale) => {
  setLocaleCookie(locale);
};
</script>

<template>
  <div :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <select v-model="locale" @change="setLocaleCustom(locale)">
      <option
        v-for="locale in locales"
        :value="locale.code"
        :selected="locale == getLocaleCookie()"
      >
        {{ locale.name }}
      </option>
    </select>
    <div class="">
      <p>
        {{ $t('pages.home.title') }}
      </p>
    </div>
  </div>
</template>
