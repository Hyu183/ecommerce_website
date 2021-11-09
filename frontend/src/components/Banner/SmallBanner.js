import ElevatedButton from '../UI/Button/ElevatedButton';
import classes from './SmallBanner.module.css';

const SmallBanner = (props) => {
    const { imgUrl, href, text } = props;

    return (
        <div
            className={classes.container}
            style={{
                backgroundImage: `url(${imgUrl})`,
                height: '406px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className={classes.child}>
                <div className={classes['large-text']}>{text}</div>
                <div className={classes.divider}></div>
                <ElevatedButton
                    className={classes.button}
                    text='Shop now'
                    type='button'
                    isDisabled={false}
                />
                {/* <Button size='sm' className={classes.button} href={href}>
                    Shop now
                </Button> */}
            </div>
        </div>
    );
};

export default SmallBanner;
