import { Row, Col, Container } from "react-bootstrap";

import classes from "./CartDropdownItem.module.css";

const CartDropdownItem = (props) => {
  const { prodImgUrl, prodName, prodPrice, prodSize, prodColor, prodAmount } =
    props;
  return (
    <Container className={`${classes.container} ps-3 pe-4 pt-4 pb-4`}>
      <Row>
        <Col lg={3}>
          <div
            style={{
              backgroundImage: `url(${
                process.env.REACT_APP_API_URL + prodImgUrl
              })`,
              height: "60px",
              width: "60px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </Col>
        <Col lg={9} className="">
          <Row className="mb-2">
            <Col className="">
              <span className={classes.productName}>{prodName}</span>
            </Col>
          </Row>
          <Row xs="auto" className="justify-content-between">
            <Col className="">
              <span className={classes.productPrice}>{`$${prodPrice}`}</span>
            </Col>
            <Col>
              <span
                className={classes.productDetail}
              >{`${prodSize} • ${prodColor} • ${prodAmount} pcs`}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartDropdownItem;
