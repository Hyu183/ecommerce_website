import { Button } from 'react-bootstrap';

import classes from './OutlinedButtonHeader.module.css';

const OutlinedButtonHeader = (props) => {
    return (
        <Button
            className={classes['outlined-button']}
            variant='outline-primary'
            href={props.href}
            size='md'
        >
            {props.text}
        </Button>
    );
};

export default OutlinedButtonHeader;
