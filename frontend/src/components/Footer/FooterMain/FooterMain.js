import { Row, Col } from 'react-bootstrap';

import logo from '../../../assets/logo.svg';

import FooterNav from '../FooterNav';
import FooterSocialIcon from './FooterSocialIcon';

const FooterMain = () => {
    return (
        <Row className='justify-content-between align-items-center pt-5 pb-5'>
            <Col lg={1}>
                <a href='/'>
                    <img src={logo} alt='Logo' />
                </a>
            </Col>
            <Col lg={5}>
                <FooterNav fontSize='14px' />
            </Col>
            <Col lg={2} className='p-0'>
                <FooterSocialIcon />
            </Col>
        </Row>
    );
};

export default FooterMain;
