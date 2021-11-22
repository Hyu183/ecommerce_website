import { useState } from 'react';

const useInput = (validator) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validator(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,

        hasError,
        valueChangeHandler,
        inputBlurHandler,
    };
};

export default useInput;
