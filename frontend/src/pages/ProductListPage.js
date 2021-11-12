import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductItem from '../components/Product/ProductItem/ProductItem';

const listProduct = [
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
    {
        proID: '1',
        proImgUrl:
            'https://media1.popsugar-assets.com/files/thumbor/0K9jTL0K7BPmoEPIJSK8YFC4QT0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/791/n/1922564/de68e8cd8dc987e5_netimgFG452q/i/UO-Colette-Stretch-Linen-Mini-Dress.jpg',
        proName: 'Collete Stretch Linen Minidress',
        proPrice: 69,
    },
];

const ProductListPage = (props) => {
    return (
        <React.Fragment>
            <Header />
            <NavBar />
            <Container className='mt-4 mb-4 p-0'>
                <Row>
                    <Col lg={2}>Category</Col>
                    <Col>
                        <Row>
                            {listProduct.map((e) => (
                                <Col lg={2}>
                                    <ProductItem
                                        proID={e.proID}
                                        proImgUrl={e.proImgUrl}
                                        proName={e.proName}
                                        proPrice={e.proPrice}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default ProductListPage;
