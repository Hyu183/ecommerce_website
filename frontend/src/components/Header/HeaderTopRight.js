import React, { useState } from 'react';

import TextButtonHeader from './TextButtonHeader';
import OutlinedButtonHeader from './OutlinedButtonHeader';
import CartHeader from './CartHeader';

import classes from './HeaderTopRight.module.css';

const HeaderTopRight = (props) => {
    const [showSettings, setShowSettings] = useState(false);
    if (!props.isLoggedIn) {
        return (
            <React.Fragment>
                <TextButtonHeader text='Register' href='' />

                <OutlinedButtonHeader text='Log In' href='' />

                <CartHeader productCount={7} />
            </React.Fragment>
        );
    }

    const dropdownContent = showSettings ? (
        <div
            className={classes['dropdown-content']}
            onMouseLeave={() => setShowSettings(!showSettings)}
        >
            <a href='/'>Account setting</a>
            <div className={classes.divider}></div>
            <a href='/'>Logout</a>
        </div>
    ) : (
        ''
    );

    return (
        <div className='d-flex justify-content-end'>
            <div className={classes.dropdown}>
                <img
                    className={classes.avatar}
                    src={props.avatarUrl}
                    alt='Avatar'
                    onClick={() => setShowSettings(!showSettings)}
                />
                {dropdownContent}
            </div>
            <CartHeader productCount={7} />
        </div>
    );
};

export default HeaderTopRight;
