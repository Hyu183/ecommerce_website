import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import classes from './CartIcon.module.css';

import cartIcon from '../../assets/cart.svg';

import CartDropdownItem from './CartDropdownItem';

const listCartItem = [
    {
        id: '1',
        prodImgUrl:
            'https://i.ebayimg.com/images/g/qkcAAOSwzMhbn7lM/s-l300.jpg',
        prodName: "New Balance Men's Street Backpack",
        prodPrice: 485,
        prodSize: 'XXL',
        prodColor: 'Orange',
        prodAmount: 89,
    },
    {
        id: '2',
        prodImgUrl:
            'https://i.ebayimg.com/images/g/qkcAAOSwzMhbn7lM/s-l300.jpg',
        prodName: "New Balance Men's Street Backpack",
        prodPrice: 45,
        prodSize: 'S',
        prodColor: 'White',
        prodAmount: 3,
    },
    {
        id: '3',
        prodImgUrl:
            'https://i.ebayimg.com/images/g/qkcAAOSwzMhbn7lM/s-l300.jpg',
        prodName: "New Balance Men's Street Backpack",
        prodPrice: 485,
        prodSize: 'XXL',
        prodColor: 'Orange',
        prodAmount: 89,
    },
];

const calculateProdCount = (listCart) => {
    let count = 0;
    listCart.forEach((element) => {
        count += element.prodAmount;
    });
    return count;
};

const CartIcon = (props) => {
    const [showCart, setShowCart] = useState(false);
    const prodCount = calculateProdCount(listCartItem);

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

                <span className={classes.badge}>{prodCount}</span>
            </Link>
            {showCart && (
                <div className={classes.dropdownWrapper}>
                    <ul className={classes.dropdownContent}>
                        {listCartItem.map((item) => {
                            return (
                                <li key={item.id} className={classes.listItem}>
                                    <CartDropdownItem
                                        prodImgUrl={item.prodImgUrl}
                                        prodName={item.prodName}
                                        prodPrice={item.prodPrice}
                                        prodSize={item.prodSize}
                                        prodColor={item.prodColor}
                                        prodAmount={item.prodAmount}
                                    />
                                </li>
                            );
                        })}
                    </ul>

                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <div className={classes.viewCart}>View cart</div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartIcon;
