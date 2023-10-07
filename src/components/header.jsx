import { useState } from 'react';
import { Link } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import themeSlice from '../common/themeSlice';

import '../styles/header.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { t } = useTranslation();

  const themes = [
    { name: 'Light', value: 'light', icon: 'faSun' },
    { name: 'Dark', value: 'dark', icon: 'faMoon' },
  ];

  const setDarkTheme = themeSlice.actions.setDarkTheme;
  const dispatch = useDispatch();

  function onLanguageChange(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <header className="header">
      <nav className="header__login">
        <Link to={'/user'}>
          <Button variant="primary">{t('login')}</Button>
        </Link>

        {isLoggedIn && (
          <Link to={'/'}>
            <Button variant="primary">{t('logout')}</Button>
          </Link>
        )}

        <Link to={'/signup'}>
          <Button variant="outline-primary">{t('signup')}</Button>
        </Link>
      </nav>

      <h1>
        <Link to="/" className="header__title">
          {t('title')}
        </Link>
      </h1>

      <nav className="header__options">
        <div className="header__lang">
          <Button
            className="header__en"
            variant="outline-secondary"
            onClick={() => onLanguageChange('en')}
          >
            en
          </Button>
          <Button
            className="header__ru"
            variant="outline-secondary"
            onClick={() => onLanguageChange('ru')}
          >
            ru
          </Button>
        </div>

        <div className="header__theme">
          <ButtonGroup>
            <Button variant="outline-light" onClick={() => dispatch(setDarkTheme(false))}>
              <FontAwesomeIcon icon={faSun} />
            </Button>
            <Button variant="outline-dark" onClick={() => dispatch(setDarkTheme(true))}>
              <FontAwesomeIcon icon={faMoon} />
            </Button>
          </ButtonGroup>
        </div>
      </nav>
    </header>
  );
}

export default Header;
