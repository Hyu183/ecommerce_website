// import { Button } from 'react-bootstrap';

import classes from './ElevatedButton.module.css';

const ElevatedButton = (props) => {
    const { text, onClick, type, isDisabled, className } = props;
    return (
        <button
            className={`${classes.button} ${
                isDisabled && classes['button--disabled']
            } ${className}`}
            type={type}
            onClick={isDisabled ? null : onClick}
        >
            {text}
        </button>
    );
};

export default ElevatedButton;
