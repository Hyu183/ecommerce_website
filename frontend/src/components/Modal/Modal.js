import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import crossIcon from '../../assets/cross.svg';

const ModalElement = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes['modal-overlay']} />
            <div className={classes['modal-body']}>
                <button
                    className={classes['button-close']}
                    // onClick={props.onClose}
                    // onClick={props.location.pathname}
                    onClick={props.onClose}
                >
                    <img src={crossIcon} alt='Close' />
                    {/* <FontAwesomeIcon icon='times' color='grey' size='lg' /> */}
                </button>
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <React.Fragment>
            {/* {ReactDOM.createPortal(<Backdrop />, portalElement)} */}
            {ReactDOM.createPortal(
                <ModalElement onClose={props.onClose}>
                    {props.children}
                </ModalElement>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default Modal;
