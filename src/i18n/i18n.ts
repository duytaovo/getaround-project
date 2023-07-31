import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HOME_VI from 'src/locales/vi/home.json'
import HOME_EN from 'src/locales/en/home.json'


export const locales = {
  en: 'English',
  vi: 'Tiếng Việt'
} as const


export const resources = {
  en: {
  },
  vi: {
  }
} as const

export const defaultNS = 'home'

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['home'],
  fallbackLng: 'vi',
  defaultNS,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})
