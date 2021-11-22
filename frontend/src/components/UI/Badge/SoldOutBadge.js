import classes from './SoldOutBadge.module.css';

const SoldOutBadge = (props) => {
    const { className } = props;
    return <div className={`${classes.container} ${className}`}>Sold out</div>;
};

export default SoldOutBadge;
