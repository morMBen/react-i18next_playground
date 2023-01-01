import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import logo from '../logo.svg';
import Footer from './Footer';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  he: { nativeName: 'Hebrew' },
};

function Messages() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type='submit'
              onClick={() => {
                i18n.changeLanguage(lng);
                setCount((prev) => ++prev);
              }}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <i>{t('counter', { count })}</i>
        </p>
        <p style={{ direction: 'rtl' }}>
          <Trans i18nKey='description.part1'>
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('description.part2')}
          </a>
        </p>
      </header>
      <Footer t={t} />
    </div>
  );
}

export default Messages;
/* language */
//* i18next.language;
//? Is set to the current detected or set language.

/* languages */
//* i18next.languages;
//? Is set to an array of language codes that will be used to look up the translation value.
//? When the language is set, this array is populated with the new language codes.
//? Unless overridden, this array is populated with less-specific versions of that code for fallback purposes, followed by the list of fallback languages

// initialize with fallback languages
//* i18next.init({
//*   fallbackLng: ["es", "fr", "en-US", "dev"]
//* });

// change the language
//* i18next.changeLanguage("en-US-xx");

// new language and its more generic forms, followed by fallbacks
//* i18next.languages; // ["en-US-xx", "en-US", "en", "es", "fr", "dev"]

// change the language again
//* i18next.changeLanguage("de-DE");

// previous language is not retained
//* i18next.languages; // ["de-DE", "de", "es", "fr", "en-US", "dev"]

/* resolvedLanguage */
//* i18next.resolvedLanguage;
//? Is set to the current resolved language.
//? It can be used as primary used language,
//? for example in a language switcher.
