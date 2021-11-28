import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'material-react-toastify';

import classes from './AddProduct.module.css';

import InputField from '../../UI/Input/InputTextField';
import MutilselectInput from '../../UI/Input/MutilselectInput';
import SingleSelectInput from '../../UI/Input/SingleSelectInput';
import ImageUpload from '../../UI/Input/ImageUpload';
import ElevatedButton from '../../UI/Button/ElevatedButton';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

import useInput from '../../../hooks/useInput';
import {
    validateName,
    validatePrice,
    validateQuantity,
} from '../../../utils/validator';
import categoryApi from '../../../api/categoryApi';
import productApi from '../../../api/productApi';

const AddProduct = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    //hold data from database
    const [categoriesData, setCategoriesData] = useState([]);
    const [colorsData, setColorsData] = useState([]);
    const [sizesData, setSizesData] = useState([]);
    const [brandData, setBrandData] = useState([]);

    //hold selected value
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [brand, setBrand] = useState({});
    const [enteredDescription, setEnteredDescription] = useState('');
    const [images, setImages] = useState(new Array(8).fill(null));

    const {
        value: enteredName,
        valueChangeHandler: nameInputChangeHandler,
        clearInputHandler: clearNameHandler,
        // isValid: isNameValid,
    } = useInput(validateName);

    const {
        value: enteredPrice,
        valueChangeHandler: priceInputChangeHandler,
        clearInputHandler: clearPriceHandler,
        // isValid: isPriceValid,
    } = useInput(validatePrice);
    const {
        value: enteredQuantity,
        valueChangeHandler: QuantityInputChangeHandler,
        clearInputHandler: clearQuantityHandler,
        // isValid: isQuantityValid,
    } = useInput(validateQuantity);

    useEffect(() => {
        Promise.all([
            categoryApi.getAllSubCat(),
            categoryApi.getColorList(),
            categoryApi.getSizeList(),
            categoryApi.getBrandList(),
        ]).then((result) => {
            setCategoriesData(result[0].data.subCat);
            setColorsData(result[1].data.color);
            setSizesData(result[2].data.size);
            setBrandData(result[3].data.brand);
        });
    }, []);

    const clearFormHandler = () => {
        clearNameHandler();
        clearPriceHandler();
        clearQuantityHandler();
        setCategories([]);
        setColors([]);
        setSizes([]);
        setBrand({});
        setEnteredDescription('');
        setImages(new Array(8).fill(null));
    };

    const onDescriptionChangeHandler = (e) => {
        setEnteredDescription(e.target.value);
    };

    const onRemoveImageHandler = (index) => {
        console.log('remove');
        setImages((prevVal) => {
            prevVal[index] = null;
            return prevVal;
        });
    };

    const onUploadImageHandler = (file, index) => {
        console.log('add');
        console.log(images);
        setImages((prevVal) => {
            prevVal[index] = file;
            return prevVal;
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const categoryIDArray = categories.map((cat) => cat.value);
        const colorIDArray = colors.map((color) => color.value);
        const sizeIDArray = sizes.map((size) => size.value);

        const form = new FormData();
        form.append('name', enteredName);
        form.append('price', enteredPrice);
        form.append('quantity', enteredQuantity);
        form.append('description', enteredDescription);
        form.append('brand_id', brand.value);
        form.append('categories', JSON.stringify(categoryIDArray));
        form.append('colors', JSON.stringify(colorIDArray));
        form.append('sizes', JSON.stringify(sizeIDArray));
        const realImageSelected = images.filter((image) => image);
        realImageSelected.forEach((img) => {
            form.append('photos', img);
        });
        setIsLoading(true);
        productApi
            .addProduct(form)
            .then((res) => {
                clearFormHandler();
                setIsLoading(false);
                toast.success('Add product successfully!', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: classes['toast-text'],
                });
                console.log('---success');
                console.log(res);
                navigate('/admin/products');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log('---fail');
                console.log(err);
            });
    };
    return (
        <Col>
            <Container
                style={{ textAlign: 'center', marginTop: 40 }}
                className='w-78'
            >
                <form id='addProduct' onSubmit={onSubmitHandler}>
                    <ImageUpload
                        id='photos'
                        label='PHOTOS'
                        images={images}
                        onUploadImageHandler={onUploadImageHandler}
                        onRemoveImageHandler={onRemoveImageHandler}
                    />
                    <InputField
                        id='name'
                        label='NAME'
                        value={enteredName}
                        onChange={nameInputChangeHandler}
                        type='text'
                    />
                    <MutilselectInput
                        id='categories'
                        label='CATEGORIES'
                        data={categoriesData}
                        onChange={setCategories}
                    />
                    <SingleSelectInput
                        id='brand'
                        label='BRAND'
                        data={brandData}
                        onChange={setBrand}
                    />
                    <InputField
                        id='price'
                        label='PRICE ($)'
                        value={enteredPrice}
                        onChange={priceInputChangeHandler}
                        type='number'
                    />
                    <MutilselectInput
                        id='size'
                        label='SIZE'
                        data={sizesData}
                        onChange={setSizes}
                    />
                    <MutilselectInput
                        id='color'
                        label='COLORS'
                        data={colorsData}
                        onChange={setColors}
                    />
                    <InputField
                        id='quantity'
                        label='QUANTITY'
                        value={enteredQuantity}
                        onChange={QuantityInputChangeHandler}
                        type='number'
                    />
                    <Row
                        xs='auto'
                        className={
                            'justify-content-center ' +
                            classes.inputDescriptionContainer
                        }
                    >
                        <Col className='col-2 align-self-center text-end'>
                            <label
                                htmlFor='description'
                                className={classes.inputDescription}
                            >
                                DESCRIPTION
                            </label>
                        </Col>
                        <Col className='col-9'>
                            <textarea
                                name='description'
                                id='description'
                                rows='6'
                                className={classes.inputTextArea}
                                value={enteredDescription}
                                onChange={onDescriptionChangeHandler}
                            ></textarea>
                        </Col>
                    </Row>
                    <Row xs='auto' className={classes.buttonContainer}>
                        {isLoading ? (
                            <Col>
                                <LoadingSpinner />
                            </Col>
                        ) : (
                            <React.Fragment>
                                <Col>
                                    <Link
                                        to='/admin/products'
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <button
                                            className={classes.cancelButton}
                                        >
                                            Cancel
                                        </button>
                                    </Link>
                                </Col>
                                <Col className=''>
                                    <ElevatedButton
                                        text='Complete'
                                        type='submit'
                                        isDisabled={false}
                                    />
                                </Col>
                            </React.Fragment>
                        )}
                    </Row>
                </form>
            </Container>
        </Col>
    );
};

export default AddProduct;
