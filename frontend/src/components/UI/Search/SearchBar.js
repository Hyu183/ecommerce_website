import { FormControl, Stack } from 'react-bootstrap';

import classes from './SearchBar.module.css';
import searchIcon from '../../../assets/search.svg';

const SearchBar = () => {
    return (
        <Stack direction='horizontal' className={classes.search}>
            <FormControl
                className={classes['search-input']}
                placeholder='Search'
                type='text'
            />
            <img
                className={classes['search-icon']}
                src={searchIcon}
                alt='Search'
            />            
        </Stack>
    );
};

export default SearchBar;
