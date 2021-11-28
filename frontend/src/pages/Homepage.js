import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import LargeBanner from '../components/Banner/LargeBanner';
import SmallBanner from '../components/Banner/SmallBanner';

const list = [
    {
        id: 1,
        imgUrl: 'https://macailabritton.com/wp-content/uploads/2018/12/Men27s2BFashion2BStreet2BStyle.jpg',
        href: '/products/19',
        text: 'Men',
    },
    {
        id: 2,
        imgUrl: 'https://stylesatlife.com/wp-content/uploads/2021/04/High-Low-Maroon-Party-Dress.jpg',
        href: '/products/7',
        text: 'Ladies',
    },
    {
        id: 3,
        imgUrl: 'https://i.pinimg.com/originals/75/b9/aa/75b9aab00ebaa0fa70d3b96a3f266181.jpg',
        href: '/products/20',
        text: 'Girls',
    },
    {
        id: 4,
        imgUrl: 'https://i.pinimg.com/originals/53/97/d7/5397d77c08b4f3566c0b94894a150060.jpg',
        href: '/products/21',
        text: 'Boys',
    },
];

const url =
    'https://www.fashiongonerogue.com/wp-content/uploads/2018/07/Bally-Fall-Winter-2018-Campaign03.jpg';

const HomePage = (props) => {
    return (
        <React.Fragment>
            <Header />
            <NavBar />

            <Container className='mt-4 mb-4 p-0'>
                <Row className='mb-4 '>
                    <Col>
                        <LargeBanner imgUrl={url} />
                    </Col>
                </Row>
                <Row className='justify-content-between '>
                    {list.map((item) => {
                        return (
                            <Col
                                key={item.id}
                                sm={12}
                                md={6}
                                lg={3}
                                className='mb-4'
                            >
                                <SmallBanner
                                    imgUrl={item.imgUrl}
                                    text={item.text}
                                    href={item.href}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default HomePage;
