import React, { useRef, useState } from 'react';
import classes from './ImageUploadItem.module.css';
import addIcon from '../../../assets/add.svg';
import closeIcon from '../../../assets/close-1.svg';

const ImageUploadItem = (props) => {
    const { index, onUploadImageHandler, onRemoveImageHandler, setChange } =
        props;

    const [imagePreview, setImagePreview] = useState(null);
    const fileRef = useRef();

    const onUploadHandler = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagePreview(reader.result);
                setChange();
                onUploadImageHandler(file, index);
            }
        };
        if (
            file &&
            (file.type === 'image/png' ||
                file.type === 'image/jpeg' ||
                file.type === 'image/jpg')
        ) {
            reader.readAsDataURL(file);
        }
    };

    const onClickHandler = () => {
        fileRef.current.click();
    };

    const onRemoveHandler = () => {
        setImagePreview(null);
        fileRef.current.value = '';
        onRemoveImageHandler(index);
    };

    return (
        <div className={classes.container}>
            {imagePreview ? (
                <div className={classes.imagePreview}>
                    <img className={classes.image} src={imagePreview} alt='' />
                    <img
                        className={classes.remove}
                        src={closeIcon}
                        alt='Remove'
                        width='24px'
                        height='24px'
                        onClick={onRemoveHandler}
                    />
                </div>
            ) : (
                <div className={classes.empty} onClick={onClickHandler}>
                    <div className={classes.emptyContent}>
                        <img
                            src={addIcon}
                            alt='Add'
                            width='24px'
                            height='24px'
                        />
                        <div style={{ marginTop: 8 }}>Add photo</div>
                    </div>
                </div>
            )}
            <input
                ref={fileRef}
                type='file'
                name='photos'
                accept='image/png, image/jpeg, image/jpg'
                onChange={onUploadHandler}
                hidden
            />
        </div>
    );
};

export default ImageUploadItem;
