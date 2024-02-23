import React from 'react';
import './Auth.css';

function Auth() {
  return (
    <div className="auth">
      <div className="auth__logo"></div>
      <form name="auth-form" className="auth__form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="auth__input auth__input_email"
          required
          minLength="4"
          maxLength="40"
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          className="auth__input auth__input__password"
          required
          minLength="8"
          maxLength="200"
        />
        <button type="submit" className="auth__button">
          Войти
        </button>
      </form>
      <p className="auth__caption">Забыли пароль?</p>
      <div className="auth__social">
        <div className="auth__logo-social auth__logo-social_vk"></div>
        <div className="auth__logo-social auth__logo-social_google"></div>
        <div className="auth__logo-social auth__logo-social_yandex"></div>
      </div>
      <div className="auth__register">
        <p className="auth__reg-text auth__reg-text_caption">
          Ещё нет аккаунта?
        </p>
        <p className="auth__reg-text auth__reg-text_link">Зарегистрироваться</p>
      </div>
    </div>
  );
}

export default Auth;
