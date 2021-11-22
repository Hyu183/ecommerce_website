// import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import classes from './AddProduct.module.css';

import InputField from './InputTextField';
import MutilselectInput from './MutilselectInput';
import SingleSelectInput from './SingleSelectInput';
import ImageUpload from './ImageUpload';
import ElevatedButton from '../../UI/Button/ElevatedButton';

import useInput from '../../../hooks/useInput';
import {
    validateName,
    validatePrice,
    validateQuantity,
} from '../../../utils/validator';
import categoryApi from '../../../api/categoryApi';
import { useEffect, useState } from 'react';

const AddProduct = () => {
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

    const {
        value: enteredName,
        valueChangeHandler: nameInputChangeHandler,
        // isValid: isNameValid,
    } = useInput(validateName);

    const {
        value: enteredPrice,
        valueChangeHandler: priceInputChangeHandler,
        // isValid: isPriceValid,
    } = useInput(validatePrice);
    const {
        value: enteredQuantity,
        valueChangeHandler: QuantityInputChangeHandler,
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

    const onDescriptionChangeHandler = (e) => {
        setEnteredDescription(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(e);
        console.log(categories);
        console.log(colors);
        console.log(sizes);
        console.log(brand);
        console.log(enteredName);
        console.log(enteredPrice);
        console.log(enteredQuantity);
        console.log(enteredDescription);
    };
    return (
        <Col>
            <Container style={{ textAlign: 'center' }} className='w-78'>
                <form id='addProduct' onSubmit={onSubmitHandler}>
                    <ImageUpload id='photos' label='PHOTOS' />
                    <InputField
                        id='name'
                        label='NAME'
                        value={enteredName}
                        onChange={nameInputChangeHandler}
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
                        <Col>
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
                        <Col>
                            <Link
                                to='/admin/products'
                                style={{ textDecoration: 'none' }}
                            >
                                <button className={classes.cancelButton}>
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
                    </Row>
                </form>
            </Container>
        </Col>
    );
};

export default AddProduct;
