import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import classes from './FooterNav.module.css';

const FooterLink = (props) => {
    const { fontSize } = props;
    return (
        <Row className='justify-content-between'>
            <Col lg={1} className={classes.link}>
                <Link
                    to='/'
                    style={{ fontSize: fontSize, textDecoration: 'none' }}
                >
                    Home
                </Link>
            </Col>
            <Col lg={2} className={classes.link}>
                <Link
                    to='/products'
                    style={{ fontSize: fontSize, textDecoration: 'none' }}
                >
                    Products
                </Link>
            </Col>
            <Col lg={2} className={classes.link}>
                <Link
                    to='/'
                    style={{ fontSize: fontSize, textDecoration: 'none' }}
                >
                    Services
                </Link>
            </Col>
            <Col lg={2} className={classes.link}>
                <Link
                    to='/'
                    style={{ fontSize: fontSize, textDecoration: 'none' }}
                >
                    About Us
                </Link>
            </Col>
            <Col lg={1} className={classes.link}>
                <Link
                    to='/'
                    style={{ fontSize: fontSize, textDecoration: 'none' }}
                >
                    Help
                </Link>
            </Col>
            <Col lg={2} className={classes.link}>
                <Link
                    to='/'
                    style={{ fontSize: fontSize, textDecoration: 'none' }}
                >
                    Contacts
                </Link>
            </Col>
        </Row>
    );
};

export default FooterLink;
