import classes from './TextLink.module.css';

const TextLink = (props) => {
    const { href, text } = props;
    return (
        <a className={classes.a} href={href}>
            {text}
        </a>
    );
};

export default TextLink;
