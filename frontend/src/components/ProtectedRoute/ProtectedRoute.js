import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import authContext from '../../contexts/authContext';

const ProtectedRoute = (props) => {
    const authCtx = useContext(authContext);
    const { element } = props;
    return authCtx.isLoggedIn && authCtx.user.role === 1 ? (
        element
    ) : (
        <Navigate replace to='/' />
    );
};

export default ProtectedRoute;
