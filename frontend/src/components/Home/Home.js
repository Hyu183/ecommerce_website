import { Row, Col, Container } from 'react-bootstrap';

import LargeBanner from './LargeBanner';
import SmallBanner from './SmallBanner';

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

const Home = (props) => {
    const url =
        'https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2021/10/04142003/jisoo-dior-paris-fashion-week-hero.jpg';
    return (
        <Container className='mt-4 mb-4 p-0'>
            <Row className='mb-4'>
                <LargeBanner imgUrl={url} />
            </Row>
            <Row className='justify-content-between'>
                {list.map((item) => {
                    return (
                        <Col
                            key={item.id}
                            sm={12}
                            md={5}
                            lg={3}
                            className='mb-4 ps-0 pe-0'
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
    );
};

export default Home;
