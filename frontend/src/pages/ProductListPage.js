import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import classes from './ProductListPage.module.css';

import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductItem from '../components/Product/ProductItem';
import DropdownSort from '../components/UI/Dropdown/DropdownSort/DropdownSort';
import PagingProductList from '../components/UI/Paging/PagingProductList/PagingProductList';

const listProduct = [
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 0,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 0,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 0,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 0,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 0,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 0,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
    {
        prodID: new Date().toISOString() + Math.random(),
        prodImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        prodName: 'Collete Stretch Linen Minidress',
        prodPrice: 69,
        prodQuantity: 200,
    },
];

// const listCat = ['All dresses'];

const ProductListPage = (props) => {
    return (
        <React.Fragment>
            <Header />
            <NavBar />
            <Container className='mt-4 mb-5 p-0'>
                <Row className='justify-content-center mb-5 mt-5'>
                    <Col className={classes.breadcrumb}>Ladies / Dresses</Col>
                </Row>
                <Row>
                    <Col lg={2} className={classes.category}>
                        Category
                    </Col>
                    <Col lg={10}>
                        <Row
                            xs='auto'
                            className='align-items-center justify-content-between mb-4'
                        >
                            <Col>
                                <DropdownSort />
                            </Col>
                            <Col>
                                <PagingProductList
                                    currentPage={1}
                                    totalPages={100}
                                />
                            </Col>
                        </Row>

                        <Row className={classes.gridContainer}>
                            {listProduct.map((item) => {
                                return (
                                    <ProductItem
                                        key={item.prodID}
                                        prodID={item.prodID}
                                        prodImgUrl={item.prodImgUrl}
                                        prodName={item.prodName}
                                        prodPrice={item.prodPrice}
                                        prodQuantity={item.prodQuantity}
                                    />
                                );
                            })}
                        </Row>
                        <Row
                            xs='auto'
                            className='justify-content-end align-items-center'
                        >
                            <Col>
                                <PagingProductList
                                    currentPage={1}
                                    totalPages={100}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default ProductListPage;
