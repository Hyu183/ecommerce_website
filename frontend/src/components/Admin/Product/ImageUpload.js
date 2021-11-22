import React from 'react';
import { Col, Row } from 'react-bootstrap';

import classes from './InputTextField.module.css';

const ImageUpload = (props) => {
    const { label, id } = props;
    return (
        <Row
            xs='auto'
            className={`justify-content-center ` + classes.inputContainer}
        >
            <Col className=' col-2 align-self-center text-end'>
                <label htmlFor={id} className={classes.inputLabel}>
                    {label}
                </label>
            </Col>
            <Col className={classes.imageContainer}>
                <label
                    className={classes.inputFileLabel}
                    htmlFor='file'
                ></label>
                <input id='file' type='file' hidden />
            </Col>
        </Row>
    );
};

export default ImageUpload;
