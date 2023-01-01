import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { DateTime } from 'luxon';

i18n
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
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          description: {
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React',
          },
          counter_one: 'Changed language just once',
          counter_other: 'Changed language already {{count}} times',
          footer: {
            date: 'Today is {{date, DATE_HUGE}}',
            date_morning: 'Good morning! Today is {{date, DATE_HUGE}} | Have a nice day!',
            date_afternoon: "Good afternoon! It's {{date, DATE_HUGE}}",
            date_evening: 'Good evening! Today was the {{date, DATE_HUGE}}',
          },
        },
      },
      de: {
        translation: {
          description: {
            part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
            part2: 'Lerne React',
          },
          counter_one: 'Die Sprache wurde erst ein mal gewechselt',
          counter_other: 'Die Sprache wurde {{count}} mal gewechselt',
          footer: {
            date: 'Heute ist {{date, DATE_HUGE}}',
          },
        },
      },
      he: {
        translation: {
          description: {
            part1: 'ערוך את  <1>src/App.js</1>  ושמור לטעינה מחדש.',
            part2: 'ללמוד ריאקט',
          },
          counter_one: 'השפה השתנתה רק פעם אחת',
          counter_other: 'השפה השתנתה {{count}} פעמים.',
          footer: {
            date: 'התאריך הוא {{date, DATE_HUGE}}',
            date_morning: 'בוקר אור! היום  {{date, DATE_HUGE}} | יום טוב!',
            date_afternoon: 'אחר צהריים טובים! היום {{date, DATE_HUGE}}',
            date_evening: 'ערב טוב! היום היה {{date, DATE_HUGE}}',
          },
        },
      },
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
