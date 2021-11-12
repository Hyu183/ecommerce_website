import { useState } from 'react';

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

    const dropdownContent = isDropped ? (
        <div
            className={classes['dropdown-content']}
            onMouseLeave={() => setIsDropped(!isDropped)}
        >
            {subCatList.map((subCat, index) => {
                return (
                    <a key={index} href={`/${subCat}`}>
                        {subCat}
                    </a>
                );
            })}
        </div>
    ) : (
        ''
    );

    return (
        <div className={classes['dropdown']}>
            <button
                className={classes['dropdown-btn']}
                onClick={() => setIsDropped(!isDropped)}
            >
                <span>{mainCat} </span>
                {arrowIcon}
            </button>
            {dropdownContent}
        </div>
    );
};

export default NavBarDropdown;
