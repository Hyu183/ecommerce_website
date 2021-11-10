import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Modal.module.css';
// import { Dropdown } from 'react-bootstrap';

const ModalElement = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes['modal-overlay']} />
            <div className={classes['modal-body']}>
                <button
                    className={classes['button-close']}
                    onClick={props.onClose}
                >
                    <FontAwesomeIcon icon='times' color='grey' size='lg' />
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
