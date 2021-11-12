import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './custom.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthContextProvider } from './contexts/authContext';
import { ModalShowContextProvider } from './contexts/modalShowContext';

ReactDOM.render(
    <AuthContextProvider>
        <ModalShowContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ModalShowContextProvider>
    </AuthContextProvider>,
    document.getElementById('root')
);
