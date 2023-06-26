import React, { useState } from 'react';

// 모달 컴포넌트
const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;
    
    return (
      <div className="modal">
        <div className="modal-content">
          {children}
        </div>
      </div>
    );
  };



export default Modal;
