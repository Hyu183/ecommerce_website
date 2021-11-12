import classes from './CheckBox.module.css';

const CheckBox = (props) => {
    const { id, value, label } = props;
    return (
        <label htmlFor={id} className={classes.container}>
            {label}
            <input
                type='checkbox'
                id={id}
                value={value}
                className={classes.checkbox}
            />
            <span className={classes.checkmark}></span>
        </label>
    );
};

export default CheckBox;
