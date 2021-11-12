import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import classes from './FooterNav.module.css';

const FooterLink = (props) => {
    const { fontSize } = props;
    return (
        <Row className='justify-content-between'>
            <Col lg={1} className={classes.link}>
                <Link to='/' style={{ fontSize: fontSize }}>
                    Home
                </Link>
            </Col>
            <Col lg={2} className={classes.link}>
                <Link to='/' style={{ fontSize: fontSize }}>
                    Products
                </Link>
            </Col>
            <Col lg={2} className={classes.link}>
                <Link to='/' style={{ fontSize: fontSize }}>
                    Services
                </Link>
            </Col>
            <Col lg={2} className={classes.link}>
                <Link to='/' style={{ fontSize: fontSize }}>
                    About Us
                </Link>
            </Col>
            <Col lg={1} className={classes.link}>
                <Link to='/' style={{ fontSize: fontSize }}>
                    Help
                </Link>
            </Col>
            <Col lg={2} className={classes.link}>
                <Link to='/' style={{ fontSize: fontSize }}>
                    Contacts
                </Link>
            </Col>
        </Row>
    );
};

export default FooterLink;
