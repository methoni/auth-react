import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__menu"></div>
      <div className="header__logo"></div>
      <form className="header__search">
        <div className="header__search-icon"></div>
        <input type="text" className="header__search-input" placeholder='Поиск' />
      </form>
      <div className="header__location">
        <div className="header__nav-icon"nav-icon></div>
        <p className="header__city">Санкт-Петербург</p>
      </div>
      <button type="submit" className="header__button">
        Войти
      </button>
    </header>
  );
}

export default Header;
