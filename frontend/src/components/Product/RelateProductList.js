import React from 'react';
import RelateProductItem from './RelateProductItem';

import classes from './RelateProductList.module.css';

const RelateProductList = (props) => {
    const { productList } = props;
    return (
        <div className={classes.container}>
            <div className={classes.lineThrough}>
                <span className={classes.titleText}>You may also like</span>
            </div>
            <div className={classes.content}>
                {productList.map((product) => {
                    return (
                        <RelateProductItem
                            key={product.id}
                            prodID={product.id}
                            imgUrl={product.thumbnail_url}
                            prodName={product.name}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RelateProductList;
