import i18n from "i18next"
import { initReactI18next } from 'react-i18next'
import ru from "./locales/ru/translation.json"
import en from "./locales/en/translation.json"
import ua from "./locales/ua/translation.json"

const resources = {
    ru: {
        translation: ru
    },
    en: {
        translation: en
    },
    ua: {
        translation: ua
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",
        // fallbackLng: "en" - но работает и без него
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;