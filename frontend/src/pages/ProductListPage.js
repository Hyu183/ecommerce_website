import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

import classes from './ProductListPage.module.css';

import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductItem from '../components/Product/ProductItem';
import DropdownSort from '../components/UI/Dropdown/DropdownSort/DropdownSort';
import PagingProductList from '../components/UI/Paging/PagingProductList/PagingProductList';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

import { sortByName } from '../utils/sortProduct';

import categoryApi from '../api/categoryApi';
import productApi from '../api/productApi';

const ProductListPage = () => {
    const categoryParam = useParams().catID;
    const navigate = useNavigate();
    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [isLoadingProduct, setIsLoadingProduct] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(+categoryParam);
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 20;
    useEffect(() => {
        Promise.all([
            categoryApi.getSecondSubCat(categoryParam),
            productApi.getProductListByCatLv1(categoryParam),
        ])
            .then((result) => {
                const categoryResponse = result[0];
                const productResponse = result[1];
                const curCat = categoryResponse.data.curCat;
                const subCat = categoryResponse.data.subCat;
                setCategoryList([
                    { ...curCat, name: 'All ' + curCat.name },
                    ...subCat,
                ]);
                setProductList(productResponse.data.productDetailList);
                setTotalProducts(productResponse.data.total);

                setIsLoadingPage(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoadingPage(false);
            });
    }, [categoryParam, navigate]);

    const onCategoryClickHandler = (index, id) => {
        setSelectedCategory(id);
        setIsLoadingProduct(true);
        if (index === 0) {
            productApi
                .getProductListByCatLv1(id)
                .then((res) => {
                    setProductList(res.data.productDetailList);
                    setTotalProducts(res.data.total);
                    setIsLoadingProduct(false);
                })
                .catch((err) => {
                    setIsLoadingProduct(false);
                    console.log(err);
                });
        } else {
            productApi
                .getProductListByCatLv0(id)
                .then((res) => {
                    setProductList(res.data.productDetailList);
                    setTotalProducts(res.data.total);
                    setIsLoadingProduct(false);
                })
                .catch((err) => {
                    setIsLoadingProduct(false);
                    console.log(err);
                });
        }
    };

    const sortProductHandler = (criteria) => {
        setProductList((prev) => [...sortByName(prev)]);
    };

    const onPageChangeHandler = (unit) => {
        if (
            currentPage + unit < 1 ||
            currentPage + unit > Math.ceil(totalProducts / productPerPage)
        ) {
            return;
        }
        setCurrentPage((prev) => prev + unit);
    };

    return (
        <React.Fragment>
            <Header />
            <NavBar />
            <Container className='mt-4 mb-5 p-0' style={{ minHeight: '100vh' }}>
                <Row className='justify-content-center mb-5 mt-5'>
                    <Col className={classes.breadcrumb}>
                        {isLoadingPage ? (
                            <LoadingSpinner />
                        ) : (
                            categoryList[0]?.parent_name +
                            ' / ' +
                            categoryList[0]?.name.replace('All ', '')
                        )}
                    </Col>
                </Row>
                {!isLoadingPage && (
                    <Row>
                        <Col className={'col-2 ps-0 ' + classes.category}>
                            <Row>
                                <Col>
                                    Category
                                    <ul className={classes.categoryList}>
                                        {categoryList.map((cat, index) => {
                                            return (
                                                <li
                                                    key={cat.id}
                                                    className={
                                                        classes.categoryItem +
                                                        ` ${
                                                            selectedCategory ===
                                                                cat.id &&
                                                            classes.categoryItemSelected
                                                        }`
                                                    }
                                                    onClick={() =>
                                                        onCategoryClickHandler(
                                                            index,
                                                            cat.id
                                                        )
                                                    }
                                                >
                                                    {cat.name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className={classes.divider}></div>
                                </Col>
                            </Row>
                        </Col>

                        {isLoadingProduct ? (
                            <Col className='col-10 pe-0 '>
                                <LoadingSpinner />
                            </Col>
                        ) : (
                            <Col className='col-10 pe-0 '>
                                <Row
                                    xs='auto'
                                    className='align-items-center justify-content-between mb-4'
                                >
                                    <Col>
                                        <div onClick={sortProductHandler}>
                                            <DropdownSort />
                                        </div>
                                    </Col>
                                    {productList.length !== 0 && (
                                        <Col>
                                            <PagingProductList
                                                currentPage={currentPage}
                                                totalPages={Math.ceil(
                                                    totalProducts /
                                                        productPerPage
                                                )}
                                                onPageChangeHandler={
                                                    onPageChangeHandler
                                                }
                                            />
                                        </Col>
                                    )}
                                </Row>

                                {productList.length === 0 ? (
                                    <div className={classes.noProduct}>
                                        <span>No result found</span>
                                    </div>
                                ) : (
                                    <Row className={classes.gridContainer}>
                                        {productList.map((item) => {
                                            return (
                                                <ProductItem
                                                    key={item.id}
                                                    prodID={item.id}
                                                    prodImgUrl={
                                                        item.thumbnail_url
                                                    }
                                                    prodName={item.name}
                                                    prodPrice={item.price}
                                                    prodInStock={item.in_stock}
                                                />
                                            );
                                        })}
                                    </Row>
                                )}
                                {productList.length !== 0 && (
                                    <Row
                                        xs='auto'
                                        className='justify-content-end align-items-center'
                                    >
                                        <Col>
                                            <PagingProductList
                                                currentPage={currentPage}
                                                totalPages={Math.ceil(
                                                    totalProducts /
                                                        productPerPage
                                                )}
                                                onPageChangeHandler={
                                                    onPageChangeHandler
                                                }
                                            />
                                        </Col>
                                    </Row>
                                )}
                            </Col>
                        )}
                    </Row>
                )}
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default ProductListPage;
