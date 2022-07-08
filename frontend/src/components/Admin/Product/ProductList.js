import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import classes from "./ProductList.module.css";

import ElevatedButton from "../../UI/Button/ElevatedButton";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import Paginate from "../../UI/Paging/Paginate";
import SearchRectangle from "../../UI/Search/SearchRectangle";

import plusIcon from "../../../assets/plus-white.svg";
import exportIcon from "../../../assets/export-orange.svg";
import dropdownIcon from "../../../assets/dropdown.svg";

import productApi from "../../../api/productApi";
import authContext from "../../../contexts/authContext";

const ProductList = () => {
  dayjs.extend(advancedFormat);
  const authCtx = useContext(authContext);
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const productPerPage = 10;
  const pageCount = Math.ceil(total / productPerPage);

  useEffect(() => {
    setIsLoading(true);
    console.log("URL: ", process.env.API_URL);
    productApi
      .getProductList(currentPage, authCtx.token)
      .then((res) => {
        console.log(res.data.productWithCatName);
        setProducts(res.data.productWithCatName);
        setTotal(res.data.total);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, authCtx.token]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.sortContainer}>
          <span className={classes.text}>SORT BY</span>
          <div className={classes.sort}>
            <span>Date added</span>
            <img src={dropdownIcon} alt="" />
          </div>
        </div>
        <div className={classes.rightSide}>
          <SearchRectangle text="Search product" />
          <Link
            to={location.pathname + "/add"}
            style={{ textDecoration: "none" }}
          >
            <ElevatedButton
              text="Add product"
              icon={plusIcon}
              type="button"
              isDisabled={false}
              className={classes.addButton}
            />
          </Link>
          <button className={classes.exportButton}>
            <img src={exportIcon} alt="Export" width="24px" height="24px" />
            &nbsp; Export
          </button>
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {" "}
          <table className={classes.table}>
            <thead>
              <tr className={classes.tableHeader}>
                <th style={{ width: "30%" }}>PRODUCTS</th>
                <th style={{ width: "10%" }}>SOLD</th>
                <th style={{ width: "20%" }}>DATE ADDED</th>
                <th style={{ width: "10%" }}>PROFIT ($)</th>
                <th style={{ width: "10%" }}>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const sold = product.quantity - product.in_stock;
                const profit = sold * product.price;
                const categories = product.categories.reduce((current, cat) => {
                  return `${current}${cat.name}, `;
                }, "");

                return (
                  <tr key={product.id} className={classes.tableBody}>
                    <td>
                      <div className={classes.product}>
                        <img src={product.thumbnail_url} alt="" />
                        <div className={classes.wrapper}>
                          <div>{product.name}</div>
                          <span className={classes.categories}>
                            {categories.slice(0, categories.length - 2)}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>{`${sold}/${product.quantity}`}</td>
                    <td>
                      {dayjs(product.created_date).format("ddd,Do MMM,YYYY")}
                    </td>
                    <td>{profit.toFixed(2)}</td>
                    <td>
                      Action <img src={dropdownIcon} alt="" />
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* <tfoot>
                        <tr>
                            <td></td>
                            <td>
                               
                            </td>
                        </tr>
                    </tfoot> */}
          </table>
          <div className={classes.footTable}>
            <span>
              Show {currentPage * productPerPage + 1} to{" "}
              {productPerPage * (currentPage + 1) < total
                ? productPerPage * (currentPage + 1)
                : total}{" "}
              of {total} entries
            </span>{" "}
            <Paginate
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={onPageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
