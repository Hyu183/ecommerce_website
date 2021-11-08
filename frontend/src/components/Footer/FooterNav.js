import { Row, Col } from 'react-bootstrap';

import classes from './FooterNav.module.css';

const FooterLink = (props) => {
    const { fontSize } = props;
    return (
        <Row className='justify-content-between'>
            <Col lg={1} className={classes.link}>
                <a href='/' style={{ fontSize: fontSize }}>
                    Home
                </a>
            </Col>
            <Col lg={2} className={classes.link}>
                <a href='/' style={{ fontSize: fontSize }}>
                    Products
                </a>
            </Col>
            <Col lg={2} className={classes.link}>
                <a href='/' style={{ fontSize: fontSize }}>
                    Services
                </a>
            </Col>
            <Col lg={2} className={classes.link}>
                <a href='/' style={{ fontSize: fontSize }}>
                    About Us
                </a>
            </Col>
            <Col lg={1} className={classes.link}>
                <a href='/' style={{ fontSize: fontSize }}>
                    Help
                </a>
            </Col>
            <Col lg={2} className={classes.link}>
                <a href='/' style={{ fontSize }}>
                    Contacts
                </a>
            </Col>
        </Row>
    );
};

export default FooterLink;
