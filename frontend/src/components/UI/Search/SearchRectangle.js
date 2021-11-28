import React from 'react';

import classes from './SearchRectangle.module.css';

import searchIcon from '../../../assets/search.svg';

const SearchRectangle = (props) => {
    const { text } = props;
    return (
        <div className={classes.container}>
            <img src={searchIcon} alt='' className={classes.searchIcon} />
            <input
                type='text'
                className={classes.searchInput}
                placeholder={text}
            />
        </div>
    );
};

export default SearchRectangle;
