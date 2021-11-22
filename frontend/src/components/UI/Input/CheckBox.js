import { useRef } from 'react';

import classes from './CheckBox.module.css';

const CheckBox = (props) => {
    const { id, label } = props; //value,
    const iref = useRef();
    return (
        <label htmlFor={id} className={classes.container}>
            {label}
            <input
                ref={iref}
                type='checkbox'
                id={id}
                // value={value}
                className={classes.checkbox}
                onClick={() => {
                    console.log(iref.current.value);
                }}
            />
            <span className={classes.checkmark}></span>
        </label>
    );
};

export default CheckBox;
