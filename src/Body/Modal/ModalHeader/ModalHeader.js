import { useLocation } from "react-router-dom";
import React from "react";
import "./ModalHeader.scss";

const ModalHeader = () => {
 
	return (
    <div className='main-modal-container'>
      <div className='modal-header-container'>
        <div className='modal-header-text'>Изменить прием</div>
      </div>
    </div>
  );
}

export default ModalHeader;