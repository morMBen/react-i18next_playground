import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { DateTime } from 'luxon';

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

// new usage
i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
  return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE);
});

export default i18n;

//*  translation resources:
// {
//     "key_zero": "zero",
//     "key_one": "singular",
//     "key_two": "two",
//     "key_few": "few",
//     "key_many": "many",
//     "key_other": "other"
//   }

//* usage:
//   t('key', {count: 0}); // -> "zero"
//   t('key', {count: 1}); // -> "singular"
//   t('key', {count: 2}); // -> "two"
//   t('key', {count: 3}); // -> "few"
//   t('key', {count: 4}); // -> "few"
//   t('key', {count: 5}); // -> "few"
//   t('key', {count: 11}); // -> "many"
//   t('key', {count: 99}); // -> "many"
//   t('key', {count: 100}); // -> "other"
