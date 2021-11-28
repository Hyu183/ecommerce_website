import { Row, Col, Container } from 'react-bootstrap';

import classes from './Overview.module.css';
import notificationIcon from './../../assets/notification.svg';
import mailIcon from './../../assets/mail.svg';
import DropdownAvatar from './../UI/Dropdown/DropdownAvatar/DropdownAvatar';

const Overview = () => {
    return (
        <Container className='p-5'>
            <Row xs='auto' className='justify-content-between '>
                <Col>
                    <span className={classes.headerText}>Overview</span>
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

export default Overview;
