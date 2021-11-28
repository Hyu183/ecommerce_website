import { Row, Col, Container } from 'react-bootstrap';

import classes from './Promotion.module.css';
import notificationIcon from './../../assets/notification.svg';
import mailIcon from './../../assets/mail.svg';
import DropdownAvatar from './../UI/Dropdown/DropdownAvatar/DropdownAvatar';

const Promotion = () => {
    return (
        <Container className='p-5'>
            <Row xs='auto' className='justify-content-between '>
                <Col>
                    <span className={classes.headerText}>Promotions</span>
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
        </Container>
    );
};

export default Promotion;
