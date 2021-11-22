import classes from './Input.module.css';

const Input = (props) => {
    const {
        id,
        label,
        type,
        placeholderText,
        value,
        onChange,
        onBlur,
        isValid,
        errText,
        
    } = props;

    const inputClassName =
        classes['input'] +
        ` ${isValid ? classes['input--valid'] : classes['input--invalid']}`;
    const nbsp = <span>&nbsp;</span>;

    return (
        <div className={classes['input-container']}>
            <label className={classes['label']} htmlFor={id}>
                {label}
            </label>
            <input
                className={inputClassName}
                type={type}
                id={id}
                placeholder={placeholderText}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />

            <p className={classes['err-text']}>{isValid ? nbsp : errText}</p>
        </div>
    );
};

export default Input;
