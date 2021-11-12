import React from 'react';

import cartIcon from './../../assets/cart.svg';
import classes from './CartIcon.module.css';

const CartIcon = (props) => {
    return (
        <a href='/'>
            <img src={cartIcon} alt='Cart' />
            <span className={classes.badge}>{props.productCount}</span>
        </a>
    );
};

export default CartIcon;
