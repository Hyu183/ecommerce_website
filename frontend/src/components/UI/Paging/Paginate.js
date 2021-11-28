import React from 'react';

import classes from './Paginate.module.css';

import firstPageIcon from '../../../assets/first-page.svg';
import prevIcon from '../../../assets/prev.svg';
import nextIcon from '../../../assets/next.svg';
import lastPageIcon from '../../../assets/last-page.svg';

const Paginate = (props) => {
    const { currentPage, pageCount, onPageChange } = props;

    const onFirstPageClick = () => {
        onPageChange(0);
    };

    const onLastPageClick = () => {
        onPageChange(pageCount - 1);
    };
    const onPageNumberClick = (page) => {
        onPageChange(page);
    };
    const onPageClick = (unit) => {
        if (currentPage + unit < 0 || currentPage + unit >= pageCount) {
            return;
        }
        onPageChange(currentPage + unit);
    };

    const pageNumber = [];
    for (let i = 0; i < pageCount; i++) {
        pageNumber.push(
            <div
                key={i}
                className={
                    currentPage === i
                        ? classes.activePage
                        : classes.pageContainer
                }
                onClick={() => onPageNumberClick(i)}
            >
                <span>{i + 1}</span>
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <div className={classes.pageContainer} onClick={onFirstPageClick}>
                <img src={firstPageIcon} alt='' />
            </div>
            <div
                className={classes.pageContainer}
                onClick={() => onPageClick(-1)}
            >
                <img src={prevIcon} alt='' />
            </div>
            {pageNumber}
            <div
                className={classes.pageContainer}
                onClick={() => onPageClick(1)}
            >
                <img src={nextIcon} alt='' />
            </div>
            <div className={classes.pageContainer} onClick={onLastPageClick}>
                <img src={lastPageIcon} alt='' />
            </div>
        </div>
    );
};

export default Paginate;
