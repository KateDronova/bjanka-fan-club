import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [themeValue, setThemeValue] = useState('light');
  const { t } = useTranslation();

  const LANGUAGES = [
    { label: 'English', code: 'en' },
    { label: 'Russian', code: 'ru' },
  ];

  const themes = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
  ];

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
            {themes.map((theme, idx) => (
              <ToggleButton
                key={idx}
                id={`theme-${idx}`}
                type="radio"
                variant={`outline-${theme.value}`}
                name="theme"
                value={theme.value}
                checked={themeValue === theme.value}
                onChange={(e) => setThemeValue(e.currentTarget.value)}
              >&ensp;</ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      </nav>
    </header>
  );
}

export default Header;
