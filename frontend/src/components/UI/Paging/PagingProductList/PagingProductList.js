import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './PagingProductList.module.css';
//  <FontAwesomeIcon icon='chevron-down' size='sm' />;
const PagingProductList = (props) => {
    const { currentPage, totalPages } = props;
    return (
        <div className={classes.container}>
            <span className={classes.icon}>
                <FontAwesomeIcon icon='chevron-left' size='sm' />
            </span>
            <div>{`${currentPage}/${totalPages} `}</div>
            <span className={classes.icon}>
                <FontAwesomeIcon icon='chevron-right' size='sm' />
            </span>
        </div>
    );
};

export default PagingProductList;
