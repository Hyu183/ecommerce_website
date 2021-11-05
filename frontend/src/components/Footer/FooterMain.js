import { Row, Col } from 'react-bootstrap';

import logo from '../../assets/logo.svg';

import FooterLink from './FooterLink';
import FooterSocialIcon from './FooterSocialIcon';

const FooterMain = () => {
    return (
        <Row className='justify-content-between align-items-center pt-5 pb-5'>
            <Col lg={1}>
                <img src={logo} alt='Logo' />
            </Col>
            <Col lg={5}>
                <FooterLink fontSize='14px' />
            </Col>
            <Col lg={2} className='p-0'>
                <FooterSocialIcon />
            </Col>
        </Row>
    );
};

export default FooterMain;
