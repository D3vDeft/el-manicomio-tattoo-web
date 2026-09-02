import { createI18n } from 'vue-i18n';
import spanish from './locales/es_ES.json';
import english from './locales/en_EN.json';

const i18n = createI18n({
  locale: detectLanguage(),
  fallbackLocale: 'es_ES',
  messages: { es_ES: spanish, en_EN: english },
});

function detectLanguage(): 'es_ES' | 'en_EN' {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem('user-locale');
    if (stored === 'es_ES' || stored === 'en_EN') {
      return stored;
    }
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const language of languages) {
    const lang = language.toLowerCase();

    if (lang.startsWith('es')) {
      return 'es_ES';
    }

    if (lang.startsWith('en')) {
      return 'en_EN';
    }
  }

  return 'es_ES';
}

export default i18n;
