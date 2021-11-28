import React, { useState, useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';

import TextButton from './../UI/Button/TextButton';
import OutlinedButton from './../UI/Button/OutlinedButton';
import SearchBar from './../UI/Search/SearchBar';
import CartIcon from './../Cart/CartIcon';

import logo from './../../assets/logo.svg';
import avatar from './../../assets/avatar.png';

import authContext from '../../contexts/authContext';
import modalShowContext from '../../contexts/modalShowContext';

const Header = () => {
    const authCtx = useContext(authContext);
    const modalShowCtx = useContext(modalShowContext);

    const [showSettings, setShowSettings] = useState(false);

    const isLoggedIn = authCtx.isLoggedIn;

    const onClickAvatarHandler = () => {
        setShowSettings((prevVal) => !prevVal);
    };

    const onMouseEnterAvatarHandler = () => {
        setShowSettings(true);
    };

    const onMouseLeaveAvatarHandler = () => {
        setShowSettings(false);
    };

    const OnClickDropdownItemHandler = (extraHandler) => {
        setShowSettings(false);
        extraHandler && extraHandler();
    };

    return (
        <header>
            <Container className='ps-0 pe-0'>
                <Row lg={12} className='justify-content-between mt-4 mb-3'>
                    <Col sm={12} md={4} lg={3} className='mt-2'>
                        <SearchBar />
                    </Col>
                    <Col sm={12} md={2} lg={4} className='text-center  mt-2'>
                        <Link to='/'>
                            <img src={logo} alt='Logo' />
                        </Link>
                    </Col>
                    <Col
                        sm={12}
                        md='auto'
                        lg={isLoggedIn ? '2' : 'auto'}
                        className='d-flex justify-content-end align-items-center '
                    >
                        {isLoggedIn ? (
                            <div className='d-flex justify-content-end'>
                                <div
                                    className={classes.dropdown}
                                    onMouseLeave={onMouseLeaveAvatarHandler}
                                >
                                    <img
                                        className={classes.avatar}
                                        src={avatar} // src={props.avatarUrl}
                                        alt='Avatar'
                                        onClick={onClickAvatarHandler}
                                        onMouseEnter={onMouseEnterAvatarHandler}
                                    />
                                    {showSettings && (
                                        <div
                                            className={
                                                classes[
                                                    'dropdown-content-wrapper'
                                                ]
                                            }
                                        >
                                            <ul
                                                className={
                                                    classes['dropdown-content']
                                                }
                                            >
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            OnClickDropdownItemHandler(
                                                                null
                                                            )
                                                        }
                                                    >
                                                        Account setting
                                                    </button>
                                                </li>
                                                <li>
                                                    <div
                                                        className={
                                                            classes.divider
                                                        }
                                                    ></div>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            OnClickDropdownItemHandler(
                                                                authCtx.logout
                                                            )
                                                        }
                                                    >
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <React.Fragment>
                                <TextButton
                                    text='Register'
                                    onClick={modalShowCtx.showRegisterHandler}
                                />
                                <OutlinedButton
                                    text='Log In'
                                    onClick={modalShowCtx.showLogInHandler}
                                />
                            </React.Fragment>
                        )}
                        <CartIcon />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
