import { Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import ElevatedButton from '../../UI/Button/ElevatedButton';
import plusIcon from '../../../assets/plus-white.svg';

const ProductList = () => {
    const location = useLocation();
    return (
        <Col>
            <Link
                to={location.pathname + '/add'}
                style={{ textDecoration: 'none' }}
            >
                <ElevatedButton
                    text='Add product'
                    icon={plusIcon}
                    type='button'
                    isDisabled={false}
                />
                {/* <button type='button'>Add product</button> */}
            </Link>
        </Col>
    );
};

export default ProductList;
