import React, { useState } from 'react';

import classes from './DropdownAvatar.module.css';

import avatar from '../../../../assets/avatar.png';
import dropdownIcon from '../../../../assets/dropdown.svg';
import profileIcon from '../../../../assets/profile.svg';
import logoutIcon from '../../../../assets/logout.svg';

const DropdownAvatar = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const onClickHandler = () => {
        setShowDropdown((prev) => !prev);
    };

    const onMouseLeaveHandler = () => {
        setShowDropdown(false);
    };
    return (
        <div className={classes.container}>
            <img className={classes.avatar} src={avatar} alt='Avatar' />
            <div
                className={classes.name}
                onClick={onClickHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                Lucile Bush <img src={dropdownIcon} alt='' />{' '}
                {showDropdown && (
                    <ul className={classes.wrapper}>
                        <li>
                            <img src={profileIcon} alt='' />
                            <button>View profile</button>
                        </li>
                        <li>
                            <img src={logoutIcon} alt='' />
                            <button>Logout</button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DropdownAvatar;
