import { Container, Row, Col } from 'react-bootstrap';
import React, { useState, useContext } from 'react';

import classes from './LoginForm.module.css';

import ElevatedButton from '../UI/Button/ElevatedButton';
import TextLink from '../UI/Button/TextLink';
import Input from '../UI/Input/Input';
import CheckBox from '../UI/Input/CheckBox';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import useInput from '../../hooks/useInput';

import { validateEmail, validatePassword } from '../../utils/validator';

import userApi from '../../api/userApi';
import authContext from '../../contexts/authContext';

const LoginForm = (props) => {
    const { navigateRegisterHandler, navigateForgotHandler, onLoggedIn } =
        props;
    const nbsp = <span>&nbsp;</span>; //keep space for error message
    const authCtx = useContext(authContext);

    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
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

    const isFormValid = enteredEmailIsValid && enteredPasswordIsValid;

    const onSubmitForm = () => {
        if (!isFormValid) {
            return;
        }

        const user = {
            email: enteredEmail,
            password: enteredPassword,
        };
        //set effect
        setIsLoading(true);
        setErrorText('');

        //send request
        userApi
            .login(user)
            .then((res) => {
                setIsLoading(false);

                authCtx.login(res.data.token, res.data.user);
                onLoggedIn();
            })
            .catch((error) => {
                setIsLoading(false);
                const errorResponse = error.response;

                if (errorResponse.status === 400) {
                    //login fail
                    setErrorText('Your e-mail/password is invalid!');
                } else {
                    setErrorText('Unable to connect to server');
                }
            });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className={classes.title}>Log In</h2>
                    <p className={classes['form-err']}>
                        {errorText.length !== 0 ? errorText : nbsp}
                    </p>

                    <form className={classes.form}>
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
                        <Row
                            xs='auto'
                            className='justify-content-between align-items-center mb-5'
                        >
                            <Col>
                                <CheckBox
                                    id='remember'
                                    value={true}
                                    label='Remember password'
                                />
                            </Col>
                            <Col>
                                <button
                                    onClick={navigateForgotHandler}
                                    className={classes['forgot-button']}
                                >
                                    Forgot your password?
                                </button>
                            </Col>
                        </Row>
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <ElevatedButton
                                text='Login'
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
                        Don’t have an account?{' '}
                        <TextLink
                            text='Register'
                            onClick={navigateRegisterHandler}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;
