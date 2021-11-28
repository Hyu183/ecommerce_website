import { useNavigate } from 'react-router-dom';

import ElevatedButton from '../UI/Button/ElevatedButton';
import classes from './LargeBanner.module.css';

const LargeBanner = (props) => {
    const { imgUrl } = props;
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/products/7');
    };

    return (
        <div
            className={classes.mycontainer}
            style={{
                backgroundImage: `url(${imgUrl})`,
                height: '514px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center',
            }}
        >
            <div className={classes['large-text']}>Outfit of the week</div>

            <ElevatedButton
                className={classes.button}
                text='Shop now'
                type='button'
                isDisabled={false}
                onClick={onClickHandler}
            />
        </div>
    );
};

export default LargeBanner;
