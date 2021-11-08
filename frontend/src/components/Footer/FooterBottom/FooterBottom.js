import React from 'react';
import { Row, Col } from 'react-bootstrap';

import FooterNav from '../FooterNav';

import classes from './FooterBottom.module.css';
const FooterBottom = () => {
    return (
        <React.Fragment>
            <div className={classes.divider}></div>
            <Row className={`${classes.container} justify-content-between`}>
                <Col lg={5}>
                    <FooterNav fontSize='12px' />
                </Col>
                <Col lg={3} className={`${classes.left} pe-0 ps-5`}>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>Terms & Conditions</a>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FooterBottom;
