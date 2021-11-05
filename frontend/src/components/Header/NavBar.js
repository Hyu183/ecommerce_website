import { Container, Row, Col } from 'react-bootstrap';
import classes from './NavBar.module.css';
import NavBarDropdown from './NavBarDropdown';

const NavBar = () => {
    const ListTest = [
        'Tops',
        'Dresses',
        'Bottoms',
        'Sale',
        'Dresses',
        'Bottoms',
        'Sale',
    ];

    const ListTest2 = ['Tops', 'Dresses', 'Bottoms', 'Sale'];

    return (
        <Container
            className={`'justify-content-center' ${classes['nar-border']}`}
            fluid
        >
            <Row xs='auto' className='justify-content-center'>
                <Col>
                    <NavBarDropdown mainCat='Men' subCatList={ListTest} />
                </Col>
                <Col>
                    <NavBarDropdown mainCat='Ladies' subCatList={ListTest2} />
                </Col>
                <Col>
                    <NavBarDropdown mainCat='Girls' subCatList={ListTest} />
                </Col>
                <Col>
                    <NavBarDropdown mainCat='Boy' subCatList={ListTest} />
                </Col>
            </Row>
        </Container>
    );
};

export default NavBar;
