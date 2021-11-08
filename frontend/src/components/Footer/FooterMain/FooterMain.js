import { Row, Col } from 'react-bootstrap';

import logo from '../../../assets/logo.svg';

import FooterNav from '../FooterNav';
import FooterSocialIcon from './FooterSocialIcon';

const FooterMain = () => {
    return (
        <Row className='justify-content-between align-items-center pt-5 pb-5'>
            <Col lg={1} className='text-center'>
                <a href='/'>
                    <img src={logo} alt='Logo' />
                </a>
            </Col>
            <Col lg={5} className='mt-3'>
                <FooterNav fontSize='14px' />
            </Col>
            <Col lg={2} className='p-0 mt-3 text-center'>
                <FooterSocialIcon />
            </Col>
        </Row>
    );
};

export default FooterMain;
