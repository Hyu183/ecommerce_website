import classes from './TextLink.module.css';

const TextLink = (props) => {
    const { onClick, text } = props;
    return (
        <button className={classes.button} onClick={onClick}>
            {text}
        </button>
    );
};

export default TextLink;
