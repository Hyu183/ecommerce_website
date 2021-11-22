import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './DropdownSort.module.css';

const DropdownSort = () => {
    const [sortCriteria, setSortCriteria] = useState('Popularity');
    const [showDropdown, setShowDropdown] = useState(false);

    const onDropdownClickHandler = () => {
        setShowDropdown((prevVal) => !prevVal);
    };

    const onDropdownItemClickHandler = (e) => {
        setSortCriteria(e.target.innerText);
        setShowDropdown(false);
    };

    return (
        <div className={classes.container}>
            <div
                className={`${classes.dropdownLink} ${
                    showDropdown
                        ? classes.dropdownLinkShow
                        : classes.dropdownLinkHide
                }`}
                onClick={onDropdownClickHandler}
            >
                <span className={classes.title}>
                    Sort By:{' '}
                    <span className={classes.criteria}>{sortCriteria}</span>
                </span>
                <span className={classes.icon}>
                    {showDropdown ? (
                        <FontAwesomeIcon icon='chevron-up' size='sm' />
                    ) : (
                        <FontAwesomeIcon icon='chevron-down' size='sm' />
                    )}
                </span>
            </div>
            {showDropdown && (
                <ul className={classes.dropdownContent}>
                    <li
                        className={classes.dropdownItem}
                        onClick={onDropdownItemClickHandler}
                    >
                        Popularity
                    </li>
                    <li
                        className={classes.dropdownItem}
                        onClick={onDropdownItemClickHandler}
                    >
                        Name: A-Z
                    </li>
                    <li
                        className={classes.dropdownItem}
                        onClick={onDropdownItemClickHandler}
                    >
                        Price: lowest to highest
                    </li>
                    <li
                        className={classes.dropdownItem}
                        onClick={onDropdownItemClickHandler}
                    >
                        Price: highest to lowest
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownSort;
