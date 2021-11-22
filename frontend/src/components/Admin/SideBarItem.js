import { Link } from 'react-router-dom';

import classes from './SideBarItem.module.css';

const SideBarItem = (props) => {
    const { url, text, iconSrc, iconActive, isActive } = props;

    const className =
        classes.sidebarItem +
        ` ${isActive ? classes.activeItem : classes.unActiveItem}`;

    return (
        <Link to={url} style={{ textDecoration: 'none' }}>
            <div className={className}>
                <img src={isActive ? iconActive : iconSrc} alt={text} />

                <span className={classes.text}> {text}</span>
            </div>
        </Link>
    );
};

export default SideBarItem;
