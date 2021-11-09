import { Row, Col, Container } from 'react-bootstrap';

import ProductImage from './ProductImage';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const { proID, proImgUrl, proName, proPrice } = props;
    return (
        <Container className={classes.container}>
            <Col>
                <ProductImage proImgUrl={proImgUrl} />
                <p className={classes['product-name']}>{proName}</p>
                <span className={classes['product-price']}>{`$${proPrice
                    .toFixed(2)
                    .toString()}`}</span>
            </Col>
        </Container>
    );
};

export default ProductItem;
