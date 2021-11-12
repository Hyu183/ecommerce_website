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

    const showSettingsHandler = () => {
        setShowSettings(true);
    };
    const hideSettingsHandler = () => {
        setShowSettings(false);
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
                        className='d-flex justify-content-end align-items-center mt-2'
                    >
                        {isLoggedIn ? (
                            <div className='d-flex justify-content-end'>
                                <div className={classes.dropdown}>
                                    <img
                                        className={classes.avatar}
                                        src={avatar} // src={props.avatarUrl}
                                        alt='Avatar'
                                        onClick={showSettingsHandler}
                                    />
                                    {showSettings && (
                                        <div
                                            className={
                                                classes['dropdown-content']
                                            }
                                            onMouseLeave={hideSettingsHandler}
                                        >
                                            <button>Account setting</button>
                                            <div
                                                className={classes.divider}
                                            ></div>
                                            <button onClick={authCtx.logout}>
                                                Logout
                                            </button>
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
                        <CartIcon productCount={7} />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
