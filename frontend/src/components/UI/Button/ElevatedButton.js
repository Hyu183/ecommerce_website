// import { Button } from 'react-bootstrap';

import classes from './ElevatedButton.module.css';

const ElevatedButton = (props) => {
    const { text, onClick, type, isDisabled, className, icon } = props;
    return (
        <button
            className={`${classes.button} ${
                isDisabled && classes['button--disabled']
            } ${className}`}
            type={type}
            onClick={isDisabled ? null : onClick}
        >
            {icon && <img src={icon} alt='Add' />}
            {text}
        </button>
    );
};

export default ElevatedButton;
