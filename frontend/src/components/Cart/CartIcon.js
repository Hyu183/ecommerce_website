import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './CartIcon.module.css';

import cartIcon from '../../assets/cart.svg';

import CartDropdownItem from './CartDropdownItem';

import cartContext from '../../contexts/cartContext';

const CartIcon = () => {
    const cartCtx = useContext(cartContext);
    const [showCart, setShowCart] = useState(false);

    const onMouseEnterHandler = () => {
        setShowCart(true);
    };

    const onMouseLeaveHandler = () => {
        setShowCart(false);
    };

    return (
        <div className={classes.dropdown} onMouseLeave={onMouseLeaveHandler}>
            <Link
                to='/cart'
                className={classes.cart}
                onMouseEnter={onMouseEnterHandler}
            >
                <img src={cartIcon} alt='Cart' />

                {cartCtx.items.length !== 0 && (
                    <span className={classes.badge}>
                        {cartCtx.totalProduct()}
                    </span>
                )}
            </Link>
            {showCart && (
                <div className={classes.dropdownWrapper}>
                    {cartCtx.items.length === 0 ? (
                        <div className={classes.noItem}>
                            <span className={classes.noItemText}>
                                No product added
                            </span>
                        </div>
                    ) : (
                        <ul className={classes.dropdownContent}>
                            {cartCtx.items.map((item) => {
                                return (
                                    <li
                                        key={item.id}
                                        className={classes.listItem}
                                    >
                                        <CartDropdownItem
                                            prodImgUrl={item.thumbnailUrl}
                                            prodName={item.productName}
                                            prodPrice={
                                                item.price * item.quantity
                                            }
                                            prodSize={item.size.name}
                                            prodColor={item.color.name}
                                            prodAmount={item.quantity}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <div className={classes.viewCart}>View cart</div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartIcon;
