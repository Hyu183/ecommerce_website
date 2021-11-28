import { Row, Col, Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import classes from './AdminPage.module.css';

import SideBar from '../components/Admin/UI/SideBar';
import Overview from '../components/Admin/Overview';
import Order from '../components/Admin/Order';
import Product from '../components/Admin/Product/Product';
import Payment from '../components/Admin/Payment';
import Promotion from '../components/Admin/Promotion';
import Setting from '../components/Admin/Setting';

const AdminPage = () => {
    return (
        <Container fluid className={classes.container}>
            <Row>
                <Col lg={2} className='p-0'>
                    <SideBar />
                </Col>
                <Col lg={10} className='p-0'>
                    <Routes>
                        <Route path='/' element={<Overview />} />
                        <Route path='/orders' element={<Order />} />
                        <Route path='/products/*' element={<Product />} />
                        <Route path='/payments' element={<Payment />} />
                        <Route path='/promotions' element={<Promotion />} />
                        <Route path='/setting' element={<Setting />} />
                    </Routes>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPage;
