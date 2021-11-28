import { Row, Col, Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import classes from './Product.module.css';

import notificationIcon from '../../../assets/notification.svg';
import mailIcon from '../../../assets/mail.svg';
import DropdownAvatar from '../../UI/Dropdown/DropdownAvatar/DropdownAvatar';

import ProductList from './ProductList';
import AddProduct from './AddProduct';

const Product = () => {
    return (
        <Container className='p-5'>
            <Row xs='auto' className='justify-content-between '>
                <Col>
                    <span className={classes.headerText}>Products</span>
                </Col>
                <Col className={classes.headerRight}>
                    <DropdownAvatar />
                    <img src={mailIcon} alt='' className={classes.headerIcon} />
                    <img
                        src={notificationIcon}
                        alt=''
                        className={classes.headerIcon}
                    />
                </Col>
            </Row>
            <Row>
                <Routes>
                    <Route exact path='/' element={<ProductList />} />
                    <Route path='/add' element={<AddProduct />} />
                </Routes>
            </Row>
        </Container>
    );
};

export default Product;
