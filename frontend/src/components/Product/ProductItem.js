import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";

import ElevatedButton from "../UI/Button/ElevatedButton";
import SoldOutBadge from "../UI/Badge/SoldOutBadge";

const ProductItem = (props) => {
  const { prodID, prodImgUrl, prodName, prodPrice, prodInStock } = props; //
  const [showButton, setShowButton] = useState(false);

  return (
    <Container className={classes.container} id={prodID}>
      <Row>
        <Col>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${
                process.env.REACT_APP_API_URL + prodImgUrl
              })`,
              height: "269px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
          >
            {prodInStock > 0 ? (
              showButton && (
                <ElevatedButton
                  text="+ Quick Shop"
                  onClick={() => console.log("button")}
                  type="button"
                  isDisabled={false}
                  className={classes.button}
                />
              )
            ) : (
              <SoldOutBadge className={classes.badge} />
            )}
          </div>

          <Link to={`/product/${prodID}`} style={{ textDecoration: "none" }}>
            <p className={classes["product-name"]}>{prodName}</p>
            <span className={classes["product-price"]}>{`$${prodPrice
              .toFixed(2)
              .toString()}`}</span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductItem;
