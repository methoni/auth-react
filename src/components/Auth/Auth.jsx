import React from 'react';
import './Auth.css';
import useFormWithValidation from '../hooks/useFormWithValidation';

function Auth() {
  const [isRegFormValid, setIsRegFormValid] = React.useState({});

  const { isFormValid, isButtonActive, handleChange } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();

    if (isFormValid) {
      setIsRegFormValid(true);
    } else {
      setIsRegFormValid(false);
    }
  }

  return (
    <div className="auth">
      <div className="auth__logo"></div>
      <form
        name="auth-form"
        className="auth__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`auth__input auth__input_email ${
            isRegFormValid === undefined || isRegFormValid
              ? ''
              : 'auth__input_invalid'
          }`}
          required
          minLength="4"
          maxLength="40"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          className={`auth__input auth__input_password ${
            isRegFormValid === undefined || isRegFormValid
              ? ''
              : 'auth__input_invalid'
          }`}
          required
          minLength="8"
          maxLength="200"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%&_#])[A-Za-z\d$%&_#]{8,}$"
          onChange={handleChange}
        />
        <span
          className={`auth__error ${
            isRegFormValid ? '' : 'auth__error_active'
          }`}
        >
          Неверный email или пароль. Попробуйте ещё раз или восстановите пароль
        </span>
        <button
          type="submit"
          className={`auth__button ${
            isButtonActive ? '' : 'auth__button_disabled'
          } `}
          disabled={!isButtonActive}
        >
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
