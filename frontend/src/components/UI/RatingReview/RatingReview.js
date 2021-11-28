import React from 'react';

import classes from './RatingReview.module.css';

import starIcon from '../../../assets/star.svg';
import starYellowIcon from '../../../assets/star-yellow.svg';

const RatingReview = (props) => {
    const { rating, reviewCount, className } = props;
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(
                <span key={i}>
                    <img
                        src={starYellowIcon}
                        alt=''
                        width='16px'
                        height='16px'
                    />
                </span>
            );
        } else {
            stars.push(
                <span key={i}>
                    <img src={starIcon} alt='' width='16px' height='16px' />
                </span>
            );
        }
    }

    return (
        <div className={classes.container + ' ' + className}>
            <div className={classes.starContainer}>{stars}</div>
            <div className={classes.review}>{reviewCount} Review</div>
        </div>
    );
};

export default RatingReview;
