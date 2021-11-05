import { Button } from 'react-bootstrap';

import classes from './TextButtonHeader.module.css';

const TextButtonHeader = (props) => {
    return (
        <Button
            variant='link'
            className={classes['text-button']}
            href={props.href}
        >
            {props.text}
        </Button>
    );
};

export default TextButtonHeader;
