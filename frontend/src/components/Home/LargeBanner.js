import { Button } from 'react-bootstrap';

import classes from './LargeBanner.module.css';

const LargeBanner = (props) => {
    const { imgUrl } = props;

    return (
        <div
            className={classes.container}
            style={{
                backgroundImage: `url(${imgUrl})`,
                height: '514px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className={classes['large-text']}>Outfit of the week</div>

            <Button size='lg' className={classes.button} href={props.href}>
                Shop now
            </Button>
        </div>
    );
};

export default LargeBanner;
