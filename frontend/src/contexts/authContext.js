import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    user: {},
    login: (accessToken, user) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    let parsedUser;
    try {
        parsedUser = JSON.parse(storedUser);
    } catch (error) {
        parsedUser = {};
    }

    const [token, setToken] = useState(storedToken);
    const [user, setUser] = useState(parsedUser);
    const userIsLoggedIn = !!token;
    const loginHandler = (token, user) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
    };
    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser({});
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        user: user,
        login: loginHandler,
        logout: logoutHandler,
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
