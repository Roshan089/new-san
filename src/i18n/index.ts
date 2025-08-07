import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en';
import hiTranslation from './locales/hi';
import saTranslation from './locales/sa';

const resources = {
  en: {
    translation: enTranslation,
  },
  hi: {
    translation: hiTranslation,
  },
  sa: {
    translation: saTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;