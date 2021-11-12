import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { toast } from 'material-react-toastify';

import classes from './ForgetPasswordForm.module.css';

import ElevatedButton from '../UI/Button/ElevatedButton';
import TextLink from '../UI/Button/TextLink';
import Input from '../UI/Input/Input';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import useInput from '../../hooks/useInput';

import { validateEmail } from '../../utils/validator';

import userApi from '../../api/userApi';

const ForgetPasswordForm = (props) => {
    const { navigateLogInHandler } = props;
    const nbsp = <span>&nbsp;</span>; //keep space for error message

    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        valueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
    } = useInput(validateEmail);

    const onSubmitForm = () => {
        if (!enteredEmailIsValid) {
            return;
        }

        //set effect
        setIsLoading(true);
        setErrorText('');

        const user = {
            email: enteredEmail,
        };
        //send request
        userApi
            .resetPassword(user)
            .then((res) => {
                setIsLoading(false);
                toast.success('Reset password successfully!', {
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
                    //reset fail
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
                    <h2 className={classes.title}>Forgot Password</h2>
                    <p className={classes.description}>
                        Enter your e-mail address below and we’ll get you back
                        on track.
                    </p>
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

                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <ElevatedButton
                                text='Submit'
                                onClick={onSubmitForm}
                                type='button'
                                isDisabled={!enteredEmailIsValid}
                                className={classes.button}
                            />
                        )}
                    </form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.switch}>
                        I remember my password now.{' '}
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

export default ForgetPasswordForm;
