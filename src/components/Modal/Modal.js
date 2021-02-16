import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({children, visibility, onModalClose}) => {

    return (
        <div hidden={!visibility}
             className="modal-container"
             onClick={(e) => onModalClose(false)}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}

export default Modal
