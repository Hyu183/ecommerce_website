import React, { useContext } from 'react';
import { ToastContainer } from 'material-react-toastify';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faSearch,
    faChevronDown,
    faChevronUp,
    faChevronLeft,
    faChevronRight,
    faTimes,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AdminPage from './pages/AdminPage';
import CartPage from './pages/CartPage';

import Modal from './components/Modal/Modal';
import RegisterForm from './components/Form/RegisterForm';
import LoginForm from './components/Form/LoginForm';
import ForgetPasswordForm from './components/Form/ForgetPasswordForm';
import ScrollToTop from './components/UI/ScrollToTop/ScrollToTop';

import modalShowContext from './contexts/modalShowContext';

import 'material-react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

library.add(
    fab,
    faSearch,
    faChevronDown,
    faChevronUp,
    faTimes,
    faShoppingCart,
    faChevronLeft,
    faChevronRight
);

function App() {
    const modalShowCtx = useContext(modalShowContext);

    return (
        <React.Fragment>
            <ToastContainer />
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/cart' element={<CartPage />} />
                    <Route
                        path='/products/:catID'
                        element={<ProductListPage />}
                    />
                    <Route
                        path='/product/:proID'
                        element={<ProductDetailPage />}
                    />
                    <Route
                        path='/admin/*'
                        element={<ProtectedRoute element={<AdminPage />} />}
                    />

                    <Route path='*' element={<Navigate replace to='/' />} />
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
