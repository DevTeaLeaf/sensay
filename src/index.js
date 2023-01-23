import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './store';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import App from './App';
import './styles/index.css';
import translationRU from './locales/ru/translation.json';
import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';
import translationAR from './locales/ar/translation.json';
import translationINC from './locales/inc/translation.json';

// Локализация

const resources = {
  ru: {
    translation: translationRU
  },
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  },
  ar: {
    translation: translationAR
  },
  inc: {
    translation: translationINC
  },
};

i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs: ['ru','en','zh','ar','inc'],
  resources,
  fallbackLng: "en",
  detection: {
    order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    caches: ['cookie']
  },
  backend: {
    loadPath: './locales/{{lng}}/translation.json',
  },
});

const basename= '/'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={store}>
    <BrowserRouter >
      <App />

    </BrowserRouter>
  </Provider>,
);

