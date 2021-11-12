import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { toast } from 'material-react-toastify';

import classes from './RegisterForm.module.css';

import ElevatedButton from '../UI/Button/ElevatedButton';
import TextLink from '../UI/Button/TextLink';
import Input from '../UI/Input/Input';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import useInput from '../../hooks/useInput';

import {
    validateEmail,
    validateName,
    validatePassword,
} from '../../utils/validator';

import userApi from '../../api/userApi';

const RegisterForm = (props) => {
    const { navigateLogInHandler } = props;
    const nbsp = <span>&nbsp;</span>; //keep space for error message

    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

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
        const user = {
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
        };
        //set effect
        setIsLoading(true);
        setErrorText('');

        //send request
        userApi
            .register(user)
            .then((res) => {
                setIsLoading(false);
                toast.success('Register successfully!', {
                    position: 'top-right',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: classes['toast-text'],
                });
                navigateLogInHandler();
            })
            .catch((error) => {
                setIsLoading(false);
                const errorResponse = error.response;
                if (errorResponse.status === 400) {
                    //register fail
                    setErrorText(errorResponse.data.message);
                } else {
                    setErrorText('Unable to connect to server');
                }
            });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className={classes.title}>Register</h2>
                    <p className={classes['form-err']}>
                        {errorText.length !== 0 ? errorText : nbsp}
                    </p>

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
                            <TextLink text='Terms of Service' onClick={null} />{' '}
                            and{' '}
                            <TextLink text='Privacy Policy' onClick={null} />
                        </div>
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <ElevatedButton
                                text='Register'
                                onClick={onSubmitForm}
                                type='button'
                                isDisabled={!isFormValid}
                                className={classes.button}
                            />
                        )}
                    </form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.switch}>
                        Do you have an account?{' '}
                        <TextLink
                            text='Log In'
                            onClick={navigateLogInHandler}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterForm;
