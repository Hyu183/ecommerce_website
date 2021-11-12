import { Button } from 'react-bootstrap';

import classes from './OutlinedButton.module.css';

const OutlinedButton = (props) => {
    return (
        <Button
            className={classes['outlined-button']}
            variant='outline-primary'
            onClick={props.onClick}
            size='md'
        >
            {props.text}
        </Button>
    );
};

export default OutlinedButton;
