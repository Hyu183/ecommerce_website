import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'material-react-toastify';

import classes from './ProductDetailPage.module.css';

import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

import productApi from '../api/productApi';
// import categoryApi from '../api/categoryApi';
import RatingReview from '../components/UI/RatingReview/RatingReview';
import Size from '../components/UI/Size/Size';
import Color from '../components/UI/Color/Color';
import ElevatedButton from '../components/UI/Button/ElevatedButton';
import Reviews from '../components/Reviews/Reviews';
import RelateProductList from '../components/Product/RelateProductList';
import Quantity from '../components/UI/Quantity/Quantity';

import cartContext from '../contexts/cartContext';

const ProductDetailPage = () => {
    const params = useParams();
    const productID = params.proID;

    const cartCtx = useContext(cartContext);

    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [sameBrandProduct, setSameBrandProduct] = useState([]);
    const [relateProduct, setRelateProduct] = useState([]);
    const [size, setSize] = useState({ id: 0 });
    const [color, setColor] = useState({ id: 0 });
    const [quantity, setQuantity] = useState(1);

    const onSizeSelectedChange = (size) => {
        setSize(size);
    };

    const onColorSelectedChange = (color) => {
        setColor(color);
    };

    const onQuantityChange = (unit) => {
        setQuantity((prevVal) => {
            return prevVal + unit > 0 ? prevVal + unit : prevVal;
        });
    };

    const clearSelectedInfor = () => {
        setSize({ id: 0 });
        setColor({ id: 0 });
        setQuantity(1);
    };

    const addToCartHandler = () => {
        if (size.id === 0 || color.id === 0) {
            return;
        }

        const productSelected = {
            id: Date.now().toString() + (Math.random() * 1000000).toString(),
            productID: product.productInfor.id,
            productName: product.productInfor.name,
            thumbnailUrl: product.productInfor.thumbnail_url,
            price: product.productInfor.price,
            color,
            size,
            quantity,
        };

        cartCtx.addProduct(productSelected);

        toast.success('Product added!', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: classes['toast-text'],
        });

        clearSelectedInfor();
    };

    useEffect(() => {
        clearSelectedInfor();
        productApi
            .getProductDetail(productID)
            .then(async (res) => {
                const data = res.data;
                setProduct(data.productDetail);
                setSameBrandProduct(data.sameBrandProduct);
                setRelateProduct(data.relateProduct);
                setIsLoading(false);

                // console.log(data.productDetail);
            })
            .catch((err) => console.log(err));
    }, [productID]);

    return (
        <React.Fragment>
            <Header />
            <NavBar />

            <Container className='mt-4 mb-4 p-0' style={{ minHeight: '100vh' }}>
                {isLoading && <LoadingSpinner />}
                {!isLoading && (
                    <React.Fragment>
                        <Row className='justify-content-center mb-5 mt-5'>
                            <Col className={classes.breadcrumb}>
                                Ladies / Dresses / {product.productInfor.name}
                            </Col>
                        </Row>
                        <div className={classes.productContainer}>
                            <div className={classes.images}>
                                {product.imgUrls.map((image) => (
                                    <img
                                        key={image.id}
                                        className={classes.image}
                                        src={image.image_url}
                                        alt=''
                                    />
                                ))}
                            </div>
                            <div className={classes.thumbnail}>
                                <img
                                    src={product.productInfor.thumbnail_url}
                                    alt=''
                                />
                            </div>
                            <div className={classes.productDetail}>
                                <div>
                                    <div className={classes.productName}>
                                        {product.productInfor.name}
                                    </div>
                                    <div className={classes.productPrice}>
                                        {'$' +
                                            product.productInfor.price.toFixed(
                                                2
                                            )}
                                    </div>
                                </div>
                                <RatingReview
                                    rating={4}
                                    reviewCount={0}
                                    className={classes.ratingReviews}
                                />
                                <Size
                                    sizes={product.size}
                                    // getSize={setSize}
                                    className={classes.size}
                                    selectedSizeID={size.id}
                                    onSizeSelectedChange={onSizeSelectedChange}
                                />
                                <Color
                                    colors={product.color}
                                    currentSelectedColorID={color.id}
                                    className={classes.color}
                                    onColorSelectedChange={
                                        onColorSelectedChange
                                    }
                                />
                                <div className={classes.quantity}>
                                    <span className={classes.quantityText}>
                                        Quantity
                                    </span>
                                    <Quantity
                                        quantity={quantity}
                                        onQuantityChange={onQuantityChange}
                                    />
                                </div>

                                <ElevatedButton
                                    text='Add to cart'
                                    onClick={addToCartHandler}
                                    type='button'
                                    isDisabled={false}
                                    className={classes.button}
                                />
                                <div className={classes.divider}></div>
                                <div className={classes.description}>
                                    {product.productInfor.description}
                                </div>
                            </div>
                            <div className={classes.sameBrand}>
                                <div className={classes.sameBrandText}>
                                    <div className={classes.text}>
                                        More from
                                    </div>
                                    <div className={classes.brand}>
                                        {product.brand.name}
                                    </div>
                                </div>
                                {sameBrandProduct.map((product) => {
                                    return (
                                        <Link
                                            to={`/product/${product.id}`}
                                            key={product.id}
                                        >
                                            <img
                                                src={product.thumbnail_url}
                                                alt=''
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        <Row>
                            <Reviews reviews={[]} />
                        </Row>
                        <Row>
                            <RelateProductList productList={relateProduct} />
                        </Row>
                    </React.Fragment>
                )}
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default ProductDetailPage;
