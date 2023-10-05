import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'Bjanka cat fanclub!',
        login: 'Login',
        logout: 'Logout',
        signup: 'Sign up',
        followBjanka: 'Follow Bjanka on:',
        ekaterina: 'Ekaterina Dronova',
        on: 'on',
        return: 'Return',
        drea: 'Drea',
        meow: 'meow',
        high: ' high',
        justFly: 'Just fly!',
        gladToSee: 'Glad to see you, ',
        games: 'Games',
        gallery: 'Gallery',
      },
    },
    ru: {
      translation: {
        title: 'Фан-клуб кошки Бьянки!',
        login: 'Авторизация',
        logout: 'Выйти из профиля',
        signup: 'Регистрация',
        followBjanka: 'Следи за Бьянкой в:',
        ekaterina: 'Екатерина Дронова',
        on: 'на',
        return: 'Назад',
        drea: 'Не бойся ',
        meow: 'мряк',
        high: 'чтать',
        justFly: 'Время летать!',
        gladToSee: 'Рады видеть тебя, ',
        games: 'Игры',
        gallery: 'Галерея',
      },
    },
  },
});

export default i18n;
