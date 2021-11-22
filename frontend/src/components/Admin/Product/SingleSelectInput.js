import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Select, { components } from 'react-select';

import classes from './SingleSelectInput.module.css';
import dropdownIcon from '../../../assets/dropdown.svg';
// import closeIcon from '../../../assets/close-2.svg';

const SingleSelectInput = (props) => {
    const { id, label, data, onChange } = props;
    const options = data.map((e) => ({ value: e.id, label: e.name }));

    const customStyles = {
        control: (styles) => ({
            width: 780,
            minHeight: 48,
            borderRadius: 2,
            border: 'solid 1px var(--white-three)',
            backgroundColor: 'var(--white)',
            display: 'flex',
        }),
        option: (styles) => ({
            fontSize: '1.4rem',
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.43,
            letterSpacing: 'normal',
            textAlign: 'left',
            padding: '6px 8px',
            color: 'var(--charcoal-grey)',
            ':hover': {
                color: 'var(--pale-orange)',
                cursor: 'pointer',
            },
        }),
        indicatorSeparator: () => ({}),
        singleValue: (styles, { data }) => ({
            ...styles,
            height: 32,
            borderRadius: 4,
            textAlign: 'center',
            display: 'flex',
            fontSize: '1.4rem',
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.43,
            letterSpacing: 'normal',
            alignItems: 'center',
            padding: '6px 8px',
            color: 'var(--charcoal-grey)',
        }),
        // multiValueRemove: (styles) => ({}),
        placeholder: (styles) => ({
            ...styles,
            fontSize: '1.4rem',
            textAlign: 'left',
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.43,
            letterSpacing: 'normal',
            color: 'var(--greyish)',
        }),
    };
    const DropdownIndicator = (props) => (
        <components.DropdownIndicator {...props}>
            <img src={dropdownIcon} alt='Show' />
        </components.DropdownIndicator>
    );

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
            <Col>
                <Select
                    options={options}
                    styles={customStyles}
                    isSearchable={false}
                    placeholder={'Select ' + label.toLowerCase()}
                    components={{
                        DropdownIndicator,
                    }}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};

export default SingleSelectInput;
