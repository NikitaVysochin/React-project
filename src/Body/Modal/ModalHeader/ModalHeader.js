import React from "react";
import { useLocation } from "react-router-dom";
import "./ModalHeader.scss";

const ModalHeader = ({ delRedact }) => {
 
	return (
    <div className='main-modal-container'>
      <div className='modal-header-container'>
        {delRedact == 1 && <div className='modal-header-text'>Удалить прием</div>}
        {delRedact == 2 && <div className='modal-header-text'>Изменить прием</div>}
      </div>
    </div>
  );
}

export default ModalHeader;