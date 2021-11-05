import React from 'react';
import { Container } from 'react-bootstrap';

import FooterMain from './FooterMain';
import FooterBottom from './FooterBottom';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <Container fluid className={classes.container}>
            <Container className='ps-0 pe-0'>
                <FooterMain />
                <FooterBottom />
            </Container>
        </Container>
    );
};

export default Footer;
