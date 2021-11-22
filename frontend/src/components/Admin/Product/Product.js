import { Row, Col, Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import ProductList from './ProductList';
import AddProduct from './AddProduct';

const Product = () => {
    return (
        <Container>
            <Row xs='auto' className='justify-content-between'>
                <Col>
                    <span>Products</span>
                </Col>
                <Col>avatar</Col>
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
