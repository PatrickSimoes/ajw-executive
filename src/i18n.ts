import { createI18n } from 'vue-i18n'

import pt from './locales/pt.json'
import es from './locales/es.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: { pt, es, en },
})

export default i18n
