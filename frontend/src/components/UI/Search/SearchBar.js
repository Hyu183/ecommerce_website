import { FormControl, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <Stack direction='horizontal' className={classes.search}>
            <FormControl
                className={classes['search-input']}
                placeholder='Search'
                type='text'
            />

            <a href='/'>
                <FontAwesomeIcon icon='search' color='grey' size='lg' />
            </a>
        </Stack>
    );
};

export default SearchBar;
