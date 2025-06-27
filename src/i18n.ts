import { createI18n } from 'vue-i18n'
import { watch } from 'vue'

import pt from './locales/pt.json'
import es from './locales/es.json'
import en from './locales/en.json'

const userLang = navigator.language.split('-')[0]
const initialLocale = ['pt', 'es', 'en'].includes(userLang) ? userLang : 'pt'

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'pt',
  messages: { pt, es, en },
})

watch(
  () => i18n.global.locale.value,
  (newLocale) => {
    document.documentElement.lang = newLocale
  },
  { immediate: true },
)

export default i18n
