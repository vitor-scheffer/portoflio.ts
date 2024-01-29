import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt/translation.json';
import en from './locales/en/translation.json';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { pt, en },
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
  });

export default i18n;
