import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import classes from './Order.module.css';

import LoadingSpinner from './../UI/LoadingSpinner/LoadingSpinner';
import Paginate from './../UI/Paging/Paginate';
import SearchRectangle from './../UI/Search/SearchRectangle';
import DropdownAvatar from '../UI/Dropdown/DropdownAvatar/DropdownAvatar';

import exportIcon from './../../assets/export-orange.svg';
import dropdownIcon from './../../assets/dropdown.svg';
import notificationIcon from './../../assets/notification.svg';
import mailIcon from './../../assets/mail.svg';
import calendarIcon from './../../assets/calendar.svg';

import authContext from './../../contexts/authContext';
import orderApi from './../../api/orderApi';

const Order = () => {
    dayjs.extend(advancedFormat);
    const authCtx = useContext(authContext);
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const orderPerPage = 10;
    const pageCount = Math.ceil(total / orderPerPage);

    useEffect(() => {
        setIsLoading(true);
        orderApi
            .getOrders(currentPage, authCtx.token)
            .then((res) => {
                console.log(res.data.orderDetails);
                setOrders(res.data.orderDetails);
                setTotal(res.data.total);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentPage, authCtx.token]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const displayStatus = (status) => {
        switch (status) {
            case 0:
                return <div className={classes.pending}>Pending</div>;
            case 1:
                return <div className={classes.completed}>Completed</div>;
            case -1:
                return <div className={classes.canceled}>Canceled</div>;

            default:
                return <div className={classes.canceled}>Unknown</div>;
        }
    };

    return (
        <Container className='p-5'>
            <Row xs='auto' className='justify-content-between '>
                <Col>
                    <span className={classes.headerText}>Orders</span>
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
                <div className={classes.container}>
                    <div className={classes.topContainer}>
                        <div className={classes.date}>
                            <span className={classes.text}>ORDERED DATE</span>
                            <div className={classes.calendar}>
                                <span>01/11/2021 - 30/11/2021</span>
                                <img src={calendarIcon} alt='' />
                            </div>
                            <div className={classes.calendarButton}>Today</div>
                            <div className={classes.calendarButton}>
                                Yesterday
                            </div>
                        </div>
                        <div className={classes.rightSide}>
                            <SearchRectangle text='Search order' />
                            <button className={classes.exportButton}>
                                <img
                                    src={exportIcon}
                                    alt='Export'
                                    width='24px'
                                    height='24px'
                                />
                                &nbsp; Export
                            </button>
                        </div>
                    </div>

                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <table className={classes.table}>
                                <thead>
                                    <tr className={classes.tableHeader}>
                                        <th style={{ width: '15%' }}>
                                            ORDER ID
                                        </th>
                                        <th style={{ width: '15%' }}>
                                            ORDERED DATE
                                        </th>
                                        <th>DETAIL</th>
                                        <th style={{ width: '10%' }}>
                                            TOTAL ($)
                                        </th>
                                        <th style={{ width: '10%' }}>
                                            STATUS{' '}
                                            <img src={dropdownIcon} alt='' />
                                        </th>
                                        <th style={{ width: '10%' }}>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => {
                                        const details = order.details.map(
                                            (detail) => (
                                                <div
                                                    key={detail.id}
                                                >{`${detail.name}(${detail.size}) x${detail.quantity}`}</div>
                                            )
                                        );
                                        return (
                                            <tr
                                                key={order.id}
                                                className={classes.tableBody}
                                            >
                                                <td>{order.id}</td>
                                                <td>
                                                    {dayjs(
                                                        order.created_date
                                                    ).format('ddd,Do MMM,YYYY')}
                                                </td>
                                                <td>{details}</td>
                                                <td>
                                                    {order.total.toFixed(2)}
                                                </td>
                                                <td>
                                                    {displayStatus(
                                                        order.status
                                                    )}
                                                </td>
                                                <td>
                                                    Actions{' '}
                                                    <img
                                                        src={dropdownIcon}
                                                        alt=''
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className={classes.footTable}>
                                <span>
                                    Show {currentPage * orderPerPage + 1} to{' '}
                                    {orderPerPage * (currentPage + 1) < total
                                        ? orderPerPage * (currentPage + 1)
                                        : total}{' '}
                                    of {total} entries
                                </span>{' '}
                                <Paginate
                                    currentPage={currentPage}
                                    pageCount={pageCount}
                                    onPageChange={onPageChange}
                                />
                            </div>
                        </>
                    )}
                </div>
            </Row>
        </Container>
    );
};

export default Order;
