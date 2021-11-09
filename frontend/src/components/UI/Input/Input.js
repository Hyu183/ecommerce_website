import classes from './Input.module.css';

const Input = (props) => {
    const { id, label, type, placeholderText, value, onChange } = props;

    return (
        <div className={classes['input-container']}>
            <label className={classes['label']} htmlFor={id}>
                {label}
            </label>
            <input
                className={classes['input']}
                type={type}
                id={id}
                placeholder={placeholderText}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
