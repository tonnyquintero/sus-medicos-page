import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import '../styles/globals.css';

import global_es from '../components/translations/es/globals.json';
import global_en from '../components/translations/en/global.json';

i18next.init({
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
        es: {
            globals: global_es,
        },
        en: {
            globals: global_en,
        },
    },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
    <I18nextProvider i18n={i18next}>
    <Component {...pageProps} />
    </I18nextProvider>
    </>
  )
  
}

export default MyApp
