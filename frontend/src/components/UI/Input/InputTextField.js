import React from 'react';
import { Col, Row } from 'react-bootstrap';

import classes from './InputTextField.module.css';

const InputTextField = (props) => {
    const { label, id, value, onChange, type } = props;
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
            <Col className='col-9'>
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={classes.inputField}
                />
            </Col>
        </Row>
    );
};

export default InputTextField;
