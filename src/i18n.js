import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {
  translationDn,
  translationEn,
  translationEs,
  translationGer,
  translationHi,
  translationJap,
  translationKan,
  translationKr,
  translationRs,
} from './locales';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    dn: {
      translations: translationDn,
    },
    en: {
      translations: translationEn,
    },
    es: {
      translations: translationEs,
    },
    ger: {
      translations: translationGer,
    },
    hi: {
      translations: translationHi,
    },
    jap: {
      translations: translationJap,
    },
    kn: {
      translations: translationKan,
    },
    kr: {
      translations: translationKr,
    },
    rs: {
      translations: translationRs,
    },
  },
  fallbackLng: 'en',
  debug: true,
  lng: 'en',
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
