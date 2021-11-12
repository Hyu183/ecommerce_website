import React, { useContext } from 'react';
import { ToastContainer } from 'material-react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faSearch,
    faChevronDown,
    faChevronUp,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

import Homepage from './pages/Homepage';
import ProductListPage from './pages/ProductListPage';
import Modal from './components/Modal/Modal';
import RegisterForm from './components/Form/RegisterForm';
import LoginForm from './components/Form/LoginForm';
import ForgetPasswordForm from './components/Form/ForgetPasswordForm';

import modalShowContext from './contexts/modalShowContext';

import 'material-react-toastify/dist/ReactToastify.css';

library.add(fab, faSearch, faChevronDown, faChevronUp, faTimes);

function App() {
    const modalShowCtx = useContext(modalShowContext);

    return (
        <React.Fragment>
            <ToastContainer />
            <Router>
                <Routes>
                    <Route exact path='/' element={<Homepage />} />
                    <Route
                        exact
                        path='/products'
                        element={<ProductListPage />}
                    />
                </Routes>
            </Router>
            {modalShowCtx.showLogIn && (
                <Modal onClose={modalShowCtx.hideLogInHandler}>
                    <LoginForm
                        navigateForgotHandler={modalShowCtx.showForgotHandler}
                        navigateRegisterHandler={
                            modalShowCtx.showRegisterHandler
                        }
                        onLoggedIn={modalShowCtx.hideLogInHandler}
                    />
                </Modal>
            )}
            {modalShowCtx.showRegister && (
                <Modal onClose={modalShowCtx.hideRegisterHandler}>
                    <RegisterForm
                        navigateLogInHandler={modalShowCtx.showLogInHandler}
                    />
                </Modal>
            )}
            {modalShowCtx.showForgot && (
                <Modal onClose={modalShowCtx.hideForgotHandler}>
                    <ForgetPasswordForm
                        navigateLogInHandler={modalShowCtx.showLogInHandler}
                    />
                </Modal>
            )}
        </React.Fragment>
    );
}

export default App;
