import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './NavBarDropdown.module.css';

const NavBarDropdown = (props) => {
    const { mainCat, subCatList } = props;
    const [isDropped, setIsDropped] = useState(false);

    const arrowIcon = isDropped ? (
        <FontAwesomeIcon icon='chevron-up' size='sm' />
    ) : (
        <FontAwesomeIcon icon='chevron-down' size='sm' />
    );

    return (
        <div
            className={classes['dropdown']}
            onMouseLeave={() => setIsDropped(false)}
        >
            <button
                className={classes['dropdown-btn']}
                onClick={() => setIsDropped((prevVal) => !prevVal)}
                onMouseEnter={() => setIsDropped(true)}
            >
                <span>{mainCat} </span>
                {arrowIcon}
            </button>
            {isDropped && (
                <div className={classes['dropdown-content-wrapper']}>
                    <ul
                        className={classes['dropdown-content']}
                        // onMouseLeave={() => setIsDropped(!isDropped)}
                    >
                        {subCatList.map((subCat) => {
                            return (
                                <li key={subCat.id}>
                                    <Link
                                        className={classes['dropdown-item']}
                                        to={`/${mainCat.toLowerCase()}/${subCat.name.toLowerCase()}`}
                                    >
                                        {subCat.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBarDropdown;
