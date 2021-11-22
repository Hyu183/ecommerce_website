import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        Privacy Policy
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        Terms & Conditions
                    </Link>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FooterBottom;
