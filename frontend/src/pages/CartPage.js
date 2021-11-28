import React, { useContext, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import classes from './CartPage.module.css';

import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Quantity from '../components/UI/Quantity/Quantity';
import ElevatedButton from '../components/UI/Button/ElevatedButton';

import cartContext from '../contexts/cartContext';
import authContext from '../contexts/authContext';

import orderApi from '../api/orderApi.js';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

const CartPage = () => {
    const cartCtx = useContext(cartContext);
    const authCtx = useContext(authContext);

    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const onCheckoutHandler = () => {
        //  const userID = req.body.userID;
        //  const orderDetails = req.body.orderDetail; //array
        //  const totalPrice = req.body.total;
        //    this.product_id = detail.prodID;
        //    this.price = detail.price;
        //    this.quantity = detail.quantity;
        //    this.color_id = detail.colorID;
        //    this.size_id = detail.sizeID;

        const userID = authCtx.isLoggedIn ? authCtx.user.id : 0;
        const orderDetail = cartCtx.items.map((item) => {
            return {
                prodID: item.productID,
                price: item.price,
                colorID: item.color.id,
                sizeID: item.size.id,
                quantity: item.quantity,
            };
        });
        const total = cartCtx.totalPrice();
        setIsCheckingOut(true);

        orderApi
            .createOrder(userID, orderDetail, total)
            .then((res) => {
                setIsCheckingOut(false);
                cartCtx.checkout();
            })
            .catch((err) => {
                setIsCheckingOut(false);
                console.log(err);
            });
    };

    return (
        <React.Fragment>
            <Header />
            <NavBar />

            <Container className='mt-4 mb-4 p-0' style={{ minHeight: '100vh' }}>
                <Row>
                    <Col>
                        <div className={classes.title}>My Bag</div>
                    </Col>
                </Row>
                <Row className='justify-content-between'>
                    <Col className='col-8'>
                        <table className={classes.table}>
                            <thead className={classes.tableHead}>
                                <tr>
                                    <th style={{ width: '10%' }}>Product</th>
                                    <th style={{ width: '10%' }}>Color</th>
                                    <th style={{ width: '10%' }}>Size</th>
                                    <th style={{ width: '15%' }}>Quantity</th>
                                    <th style={{ width: '10%' }}>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartCtx.items.map((item) => {
                                    return (
                                        <tr
                                            key={item.id}
                                            className={classes.row}
                                        >
                                            <td>
                                                <div
                                                    className={classes.product}
                                                >
                                                    <img
                                                        src={item.thumbnailUrl}
                                                        alt=''
                                                    />
                                                    <div
                                                        className={
                                                            classes.wrapper
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                classes.name
                                                            }
                                                        >
                                                            {item.productName}
                                                        </div>
                                                        <div
                                                            className={
                                                                classes.textButtonGroup
                                                            }
                                                        >
                                                            <span
                                                                className={
                                                                    classes.buttonChange
                                                                }
                                                            >
                                                                Change
                                                            </span>
                                                            <span
                                                                onClick={() =>
                                                                    cartCtx.removeProduct(
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                Remove
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                    className={classes.color}
                                                    style={{
                                                        backgroundColor:
                                                            item.color.hex,
                                                        opacity:
                                                            item.color.opacity,
                                                    }}
                                                ></div>
                                            </td>
                                            <td>
                                                <div className={classes.size}>
                                                    {item.size.name}
                                                </div>
                                            </td>
                                            <td>
                                                <Quantity
                                                    className={classes.quantity}
                                                    quantity={item.quantity}
                                                    onQuantityChange={(
                                                        unit
                                                    ) => {
                                                        cartCtx.changeQuantity(
                                                            item.id,
                                                            unit
                                                        );
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <div className={classes.amount}>
                                                    {`$${(
                                                        item.quantity *
                                                        item.price
                                                    ).toFixed(2)}`}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Col>
                    <div className={classes.checkout}>
                        <div className={classes.headerText}>Total</div>
                        <div className={classes.bill}>
                            <Row xs='auto' className='justify-content-between'>
                                <Col>Shipping & Handling:</Col>
                                <Col>Free</Col>
                            </Row>
                            <Row
                                xs='auto'
                                className='justify-content-between mt-2'
                            >
                                <Col>Total product:</Col>
                                <Col>{`$${cartCtx
                                    .totalPrice()
                                    .toFixed(2)}`}</Col>
                            </Row>
                            <div className={classes.divider}></div>
                            <Row xs='auto' className='justify-content-between'>
                                <Col>
                                    <strong>Subtotal</strong>
                                </Col>
                                <Col>
                                    <strong>
                                        {`$${cartCtx.totalPrice().toFixed(2)}`}
                                    </strong>
                                </Col>
                            </Row>
                        </div>
                        {isCheckingOut ? (
                            <LoadingSpinner />
                        ) : (
                            <ElevatedButton
                                text='Check out'
                                onClick={onCheckoutHandler}
                                type='button'
                                isDisabled={false}
                                className={classes.button}
                            />
                        )}
                    </div>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default CartPage;
