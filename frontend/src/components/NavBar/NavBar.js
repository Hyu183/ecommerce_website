import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import classes from './NavBar.module.css';
import NavBarDropdown from './NavBarDropdown';
import categoryApi from '../../api/categoryApi';

const NavBar = () => {
    const [listCat, setListCat] = useState([]);
    // const ListTest = [
    //     'Tops',
    //     'Dresses',
    //     'Bottoms',
    //     'Sale',
    //     'Dresses',
    //     'Bottoms',
    //     'Sale',
    // ];

    // const ListTest2 = ['Tops', 'Dresses', 'Bottoms', 'Sale'];
    useEffect(() => {
        categoryApi.getMain().then((res) => {
            setListCat(res.data.categories);
        });
    }, []);

    return (
        <Container
            className={`'justify-content-center p-0 ' ${classes['nar-border']}`}
            fluid
        >
            <Row xs='auto' className='justify-content-center ms-1 me-1 p-0'>
                {listCat.map((cat) => {
                    return (
                        <Col key={cat.id}>
                            <NavBarDropdown
                                mainCat={cat.name}
                                subCatList={cat.subCat}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default NavBar;
