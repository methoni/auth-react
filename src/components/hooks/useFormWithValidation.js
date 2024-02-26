import React from 'react';
import validator from 'validator';

function useFormWithValidation() {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isInputValid, setIsInputValid] = React.useState({});
  const [isInputEmpty, setIsInputEmpty] = React.useState(true);
  const [isButtonActive, setIsButtonActive] = React.useState(false);

  function validateEmailInput(inputValue) {
    return validator.isEmail(inputValue);
  }

  function handleChange(event) {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    let isValid = false;

    if (name === 'email') {
      isValid = validateEmailInput(value);
    } else {
      isValid = inputElement.validity.valid;
    }

    let isEmpty = true;

    if (value !== '') {
      isEmpty = false;
    } else {
      isEmpty = true;
    }

    setIsInputValid((initialIsValid) => {
      return { ...initialIsValid, [name]: isValid };
    });

    setIsInputEmpty((initialIsEmpty) => {
      return { ...initialIsEmpty, [name]: isEmpty };
    });
  }

  React.useEffect(() => {
    setIsFormValid(
      Object.values(isInputValid).every((validity) => validity === true)
    );
  }, [isInputValid]);

  React.useEffect(() => {
    if (Object.values(isInputEmpty).length === 2) {
      // После первого заполнения обоих полей
      if (Object.values(isInputEmpty).find((value) => value === true)) {
        // Если есть одно пустое поле из двух
        setIsButtonActive(false);
      } else {
        // Если нет ни одного пустого поля из двух
        setIsButtonActive(true);
      }
    } else {
      // После монтирования, до заполнения обоих полей
      setIsButtonActive(false);
    }
  }, [isInputEmpty]);

  return {
    isFormValid,
    handleChange,
    isButtonActive,
  };
}

export default useFormWithValidation;
