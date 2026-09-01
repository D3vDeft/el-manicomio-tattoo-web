import { createI18n } from 'vue-i18n'
import spanish from './locales/es_ES.json'
import english from './locales/en_EN.json'

const i18n = createI18n({
  locale: 'es_ES',
  fallbackLocale: 'en_EN',
  messages: { es_ES: spanish,
    en_EN : english }
})

export default i18n
