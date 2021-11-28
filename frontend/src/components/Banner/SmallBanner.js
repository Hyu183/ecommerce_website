import { useNavigate } from 'react-router-dom';
import ElevatedButton from '../UI/Button/ElevatedButton';
import classes from './SmallBanner.module.css';

const SmallBanner = (props) => {
    const { imgUrl, text, href } = props;
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(href);
    };
    return (
        <div
            className={classes.container}
            style={{
                backgroundImage: `url(${imgUrl})`,
                height: '406px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
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
                    onClick={onClickHandler}
                />
            </div>
        </div>
    );
};

export default SmallBanner;
