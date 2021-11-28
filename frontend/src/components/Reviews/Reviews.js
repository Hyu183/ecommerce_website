import React from 'react';

import classes from './Reviews.module.css';

const Reviews = (props) => {
    const { reviews } = props;
    return (
        <div className={classes.container}>
            <div className={classes.lineThrough}>
                <span className={classes.titleText}>Reviews</span>
            </div>
            <div className={classes.content}>
                {reviews.length === 0 && (
                    <span className={classes.noReview}>No reviews</span>
                )}
            </div>
        </div>
    );
};

export default Reviews;
