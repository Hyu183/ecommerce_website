import { Row, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import classes from './SideBar.module.css';

import overviewIcon from '../../assets/overview-dark.svg';
import overviewActiveIcon from '../../assets/overview-orange.svg';
import orderIcon from '../../assets/orders-dark.svg';
import orderActiveIcon from '../../assets/orders-orange.svg';
import productIcon from '../../assets/products-dark.svg';
import productActiveIcon from '../../assets/products-orange.svg';
import paymentIcon from '../../assets/payment-dark.svg';
import paymentActiveIcon from '../../assets/payment-orange.svg';
import promotionIcon from '../../assets/promotion-dark.svg';
import promotionActiveIcon from '../../assets/promotion-orange.svg';
import settingIcon from '../../assets/setting-dark.svg';
import settingActiveIcon from '../../assets/setting-orange.svg';
import logo from '../../assets/logo.svg';

import SideBarItem from './SideBarItem';

const SideBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const onLogoClickHandler = () => {
        navigate('/admin');
    };

    return (
        <Container className={`${classes.sidebar} p-0`}>
            <Row className={classes.logo}>
                <img src={logo} alt='Logo' onClick={onLogoClickHandler} />
            </Row>

            <SideBarItem
                url='/admin'
                iconSrc={overviewIcon}
                iconActive={overviewActiveIcon}
                text='Overview'
                isActive={currentPath === '/admin'}
            />
            <SideBarItem
                url='/admin/orders'
                iconSrc={orderIcon}
                iconActive={orderActiveIcon}
                text='Orders'
                isActive={currentPath === '/admin/orders'}
            />
            <SideBarItem
                url='/admin/products'
                iconSrc={productIcon}
                iconActive={productActiveIcon}
                text='Products'
                isActive={currentPath.includes('/admin/products')}
            />
            <SideBarItem
                url='/admin/payments'
                iconSrc={paymentIcon}
                iconActive={paymentActiveIcon}
                text='Payments'
                isActive={currentPath === '/admin/payments'}
            />
            <SideBarItem
                url='/admin/promotions'
                iconSrc={promotionIcon}
                iconActive={promotionActiveIcon}
                text='Promotions'
                isActive={currentPath === '/admin/promotions'}
            />
            <SideBarItem
                url='/admin/setting'
                iconSrc={settingIcon}
                iconActive={settingActiveIcon}
                text='Setting'
                isActive={currentPath === '/admin/setting'}
            />
        </Container>
    );
};

export default SideBar;
