import { Row, Col, Container } from 'react-bootstrap';

import logo from '../../../assets/logo.svg';
import avatar from '../../../assets/avatar.png';

import SearchBar from './SearchBar';
import HeaderTopRight from './HeaderTopRight';

const HeaderTop = () => {
    return (
        <Container className='ps-0 pe-0'>
            <Row lg={12} className='justify-content-between mt-4 mb-3'>
                <Col sm={12} md={4} lg={3} className='mt-2'>
                    <SearchBar />
                </Col>
                <Col sm={12} md={2} lg={4} className='text-center  mt-2'>
                    <a href='/'>
                        <img src={logo} alt='Logo' />
                    </a>
                </Col>
                <Col
                    sm={12}
                    md='auto'
                    lg='auto'
                    className='d-flex justify-content-end align-items-center mt-2'
                >
                    <HeaderTopRight isLoggedIn={false} avatarUrl={avatar} />
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderTop;
