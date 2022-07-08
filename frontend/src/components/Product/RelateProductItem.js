import React from "react";
import { Link } from "react-router-dom";

import classes from "./RelateProductItem.module.css";

const RelateProductItem = (props) => {
  const { prodID, imgUrl, prodName } = props;
  return (
    <Link to={`/product/${prodID}`} className={classes.container}>
      <img
        className={classes.image}
        src={process.env.REACT_APP_API_URL + imgUrl}
        alt=""
      />
      <div className={classes.name}>{prodName}</div>
    </Link>
  );
};

export default RelateProductItem;
