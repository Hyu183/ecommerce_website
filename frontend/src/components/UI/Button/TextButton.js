import { Button } from 'react-bootstrap';

import classes from './TextButton.module.css';

const TextButton = (props) => {
    return (
        <Button
            variant='link'
            className={classes['text-button']}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    );
};

export default TextButton;
