import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

import ElevatedButton from '../UI/Button/ElevatedButton';
import TextLink from '../UI/Button/TextLink';
import Input from '../UI/Input/Input';
import useInput from '../../hooks/use-input';
import {
    validateEmail,
    validateName,
    validatePassword,
} from '../../utils/validator';

import classes from './RegisterForm.module.css';

const RegisterForm = () => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: enteredNameHasError,
        valueChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
    } = useInput(validateName);
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        valueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
    } = useInput(validateEmail);
    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: enteredPasswordHasError,
        valueChangeHandler: passwordInputChangeHandler,
        inputBlurHandler: passwordInputBlurHandler,
    } = useInput(validatePassword);

    const isFormValid =
        enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid;

    const onSubmitForm = () => {
        if (!isFormValid) {
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);
        console.log(enteredPassword);
    };

    return (
        <Container>
            <h2 className={classes.title}>Register</h2>
            <form className={classes.form}>
                <Input
                    id='name'
                    type='text'
                    label='name'
                    placeholderText='Enter your name...'
                    isValid={!enteredNameHasError}
                    errText='Please enter a valid name!'
                    value={enteredName}
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                <Input
                    id='email'
                    type='text'
                    label='e-mail'
                    placeholderText='Enter your email...'
                    isValid={!enteredEmailHasError}
                    errText='Please enter a valid e-mail!'
                    value={enteredEmail}
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                />
                <Input
                    id='password'
                    type='password'
                    label='password'
                    placeholderText='Enter your password...'
                    isValid={!enteredPasswordHasError}
                    errText='Your passwords must be more than 6 characters!'
                    value={enteredPassword}
                    onChange={passwordInputChangeHandler}
                    onBlur={passwordInputBlurHandler}
                />
                <div className={classes.term}>
                    By creating an account you agree to the{' '}
                    <TextLink href='#' text='Terms of Service' /> and{' '}
                    <TextLink href='#' text='Privacy Policy' />
                </div>
                <ElevatedButton
                    text='Register'
                    onClick={onSubmitForm}
                    type='button'
                    isDisabled={!isFormValid}
                    className={classes.button}
                />
            </form>
            <Row>
                <div className={classes.switch}>
                    Do you have an account? <TextLink href='#' text='Log In' />
                </div>
            </Row>
        </Container>
    );
};

export default RegisterForm;
