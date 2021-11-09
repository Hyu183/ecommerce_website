import { Button } from 'react-bootstrap';

import classes from './TextButtonHeader.module.css';

const TextButtonHeader = (props) => {
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

export default TextButtonHeader;
