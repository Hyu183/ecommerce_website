import { Row, Col, Container } from 'react-bootstrap';

import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';

import SearchBar from './SearchBar';
import HeaderTopRight from './HeaderTopRight';

const HeaderTop = () => {
    return (
        <Container className='ps-0 pe-0'>
            <Row lg={12} className='justify-content-space-around mt-4 mb-3'>
                <Col sm={12} md={4} lg={3}>
                    <SearchBar />
                </Col>
                <Col
                    sm={12}
                    md={3}
                    lg={5}
                    className='text-center vertical-align-center'
                >
                    <img src={logo} alt='Logo' />
                </Col>
                <Col
                    sm={12}
                    md={5}
                    lg={4}
                    className='d-flex justify-content-end align-items-center'
                >
                    <HeaderTopRight isLoggedIn={false} avatarUrl={avatar} />
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderTop;