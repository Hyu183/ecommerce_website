import React from 'react';

import classes from './Quantity.module.css';

import minusIcon from '../../../assets/minus.svg';
import plusIcon from '../../../assets/plus.svg';

const Quantity = (props) => {
    const { quantity, onQuantityChange, className } = props;

    return (
        <div className={classes.container + ` ${className}`}>
            <img
                src={minusIcon}
                alt=''
                className={classes.icon}
                onClick={() => onQuantityChange(-1)}
            />
            <div className={classes.number}>{quantity}</div>
            <img
                src={plusIcon}
                alt=''
                className={classes.icon}
                onClick={() => onQuantityChange(1)}
            />
        </div>
    );
};

export default Quantity;
