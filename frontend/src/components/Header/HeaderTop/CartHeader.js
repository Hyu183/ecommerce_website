import React from 'react';

import cartIcon from '../../../assets/cart.svg';
import classes from './CartHeader.module.css';

const CartHeader = (props) => {
    return (
        <a href='/'>
            <img src={cartIcon} alt='Cart' />
            <span className={classes.badge}>{props.productCount}</span>
        </a>
    );
};

export default CartHeader;
