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
        imgUrl: 'https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2021/10/04142003/jisoo-dior-paris-fashion-week-hero.jpg',
        href: '/',
        text: 'Men',
    },
    {
        id: 2,
        imgUrl: 'https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2021/10/04142003/jisoo-dior-paris-fashion-week-hero.jpg',
        href: '/',
        text: 'Ladies',
    },
    {
        id: 3,
        imgUrl: 'https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2021/10/04142003/jisoo-dior-paris-fashion-week-hero.jpg',
        href: '/',
        text: 'Girls',
    },
    {
        id: 4,
        imgUrl: 'https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2021/10/04142003/jisoo-dior-paris-fashion-week-hero.jpg',
        href: '/',
        text: 'Boys',
    },
];

const url =
    'https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2021/10/04142003/jisoo-dior-paris-fashion-week-hero.jpg';

const Homepage = (props) => {
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

export default Homepage;
