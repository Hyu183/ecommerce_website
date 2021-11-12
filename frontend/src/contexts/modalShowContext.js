import React, { useState } from 'react';

const ModalShowContext = React.createContext({
    showLogIn: false,
    showRegister: false,
    showForgot: false,
    showLogInHandler: () => {},
    showRegisterHandler: () => {},
    showForgotHandler: () => {},
    hideLogInHandler: () => {},
    hideRegisterHandler: () => {},
    hideForgotHandler: () => {},
});

export const ModalShowContextProvider = (props) => {
    const [showLogIn, setShowLogIn] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showForgot, setShowForgot] = useState(false);

    const showLogInHandler = () => {
        setShowLogIn(true);
        setShowRegister(false);
        setShowForgot(false);
    };
    const showRegisterHandler = () => {
        setShowRegister(true);
        setShowLogIn(false);
    };
    const showForgotHandler = () => {
        setShowForgot(true);
        setShowLogIn(false);
    };

    const hideLogInHandler = () => {
        setShowLogIn(false);
    };
    const hideRegisterHandler = () => {
        setShowRegister(false);
    };
    const hideForgotHandler = () => {
        setShowForgot(false);
    };

    const contextValue = {
        showLogIn,
        showRegister,
        showForgot,
        showLogInHandler,
        showRegisterHandler,
        showForgotHandler,
        hideLogInHandler,
        hideRegisterHandler,
        hideForgotHandler,
    };
    return (
        <ModalShowContext.Provider value={contextValue}>
            {props.children}
        </ModalShowContext.Provider>
    );
};

export default ModalShowContext;
