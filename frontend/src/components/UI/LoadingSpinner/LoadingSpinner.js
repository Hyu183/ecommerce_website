import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <div className={classes['load-3']}>
            <div className={classes['line']}></div>
            <div className={classes['line']}></div>
            <div className={classes['line']}></div>
        </div>
    );
};

export default LoadingSpinner;
