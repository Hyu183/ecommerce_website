// import { Button } from 'react-bootstrap';

import classes from './ElevatedButton.module.css';

const ElevatedButton = (props) => {
    const { text, handler, type, isDisabled, className } = props;
    return (
        <button
            className={`${classes.button} ${
                isDisabled && classes['button--disabled']
            } ${className}`}
            type={type}
            onClick={isDisabled ? handler : null}
        >
            {text}
        </button>
    );
};

export default ElevatedButton;
