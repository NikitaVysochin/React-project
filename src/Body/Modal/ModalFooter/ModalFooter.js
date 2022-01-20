import React from "react";
import { Save } from "@material-ui/icons";
import { useLocation } from 'react-router-dom';
import "./ModalFooter.scss";

const ModalFooter = ({ setOpen, onSaveButton }) => {
	return (
    <div className='main-shadow-footer-container'>
      <div className='shadow-footer-container'>
      <div className='footer-container'>
        <div className='buttons-container'>
          <div 
            className='footer-cancel' 
            onClick={()=>setOpen()}
          >
            Cancel
          </div>
          <div className='footer-save' onClick={()=>onSaveButton()}>Save</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ModalFooter;