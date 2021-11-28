import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import classes from './ImageUpload.module.css';

import ImageUploadItem from './ImageUploadItem';
// import ImagesContext from '../../../contexts/imagesContext';
const ImageUpload = (props) => {
    const { label, id, images, onUploadImageHandler, onRemoveImageHandler } =
        props;
    // const { images } = useContext(ImagesContext);
    const [isFullRow, setIsFullRow] = useState(false);
    const [onChange, setOnChange] = useState(0);
    useEffect(() => {
        console.log(onChange);
        console.log('upload');
        console.log(images);
        if (images.filter((e) => e).length >= 4) {
            setIsFullRow(true);
        }
    }, [onChange, images]);

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
            <Col className={'col-9 ' + classes.imageContainer}>
                <Row className='gy-4'>
                    {/* <Col className='col-3'>
                        <ImageUploadItem
                            index={0}
                            onUploadImageHandler={onUploadImageHandler}
                            onRemoveImageHandler={onRemoveImageHandler}
                        />
                    </Col>
                    <Col className='col-3'>
                        <ImageUploadItem
                            index={1}
                            onUploadImageHandler={onUploadImageHandler}
                            onRemoveImageHandler={onRemoveImageHandler}
                        />
                    </Col>
                    <Col className='col-3'>
                        <ImageUploadItem
                            index={2}
                            onUploadImageHandler={onUploadImageHandler}
                            onRemoveImageHandler={onRemoveImageHandler}
                        />
                    </Col>
                    <Col className='col-3'>
                        <ImageUploadItem
                            index={3}
                            onUploadImageHandler={onUploadImageHandler}
                            onRemoveImageHandler={onRemoveImageHandler}
                        />
                    </Col> */}
                    {images.map((image, index) => {
                        if (index < 4) {
                            return (
                                <Col className='col-3' key={index}>
                                    <ImageUploadItem
                                        index={index}
                                        onUploadImageHandler={
                                            onUploadImageHandler
                                        }
                                        onRemoveImageHandler={
                                            onRemoveImageHandler
                                        }
                                        setChange={() =>
                                            setOnChange(
                                                (onChange) => onChange + 1
                                            )
                                        }
                                    />
                                </Col>
                            );
                        } else if (index >= 4 && isFullRow) {
                            return (
                                <Col className='col-3' key={index}>
                                    <ImageUploadItem
                                        index={index}
                                        onUploadImageHandler={
                                            onUploadImageHandler
                                        }
                                        onRemoveImageHandler={
                                            onRemoveImageHandler
                                        }
                                        setChange={() =>
                                            setOnChange(
                                                (onChange) => onChange + 1
                                            )
                                        }
                                    />
                                </Col>
                            );
                        }
                        // } else if (!image && index < 4) {
                        //     return (
                        //         <Col className='col-3' key={index}>
                        //             <ImageUploadItem
                        //                 index={index}
                        //                 onUploadImageHandler={
                        //                     onUploadImageHandler
                        //                 }
                        //                 onRemoveImageHandler={
                        //                     onRemoveImageHandler
                        //                 }
                        //             />
                        //         </Col>
                        //     );
                        // }
                        return null;
                    })}

                    {/* {images.filter((image) => image).length >= 3 &&
                        images.map((image, index) => {
                            if (index >= 4) {
                                console.log(image);
                                return (
                                    <Col className='col-3' key={index}>
                                        <ImageUploadItem
                                            index={index}
                                            onUploadImageHandler={
                                                onUploadImageHandler
                                            }
                                            onRemoveImageHandler={
                                                onRemoveImageHandler
                                            }
                                        />
                                    </Col>
                                );
                            }
                            return null;
                        })} */}
                    {/* <Col className='col-3'>
                        <ImageUploadItem />
                    </Col>
                    <Col className='col-3'>
                        <ImageUploadItem />
                    </Col>
                    <Col className='col-3'>
                        <ImageUploadItem />
                    </Col>
                    <Col className='col-3'>
                        <ImageUploadItem />
                    </Col> */}
                </Row>
                <Row xs='auto' className='justify-content-start mt-4 mb-3'>
                    <Col>
                        <span className={classes.descriptionText}>
                            You can add up to 8 photos. The 1st photo will be
                            set as cover (main photo).
                        </span>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ImageUpload;
