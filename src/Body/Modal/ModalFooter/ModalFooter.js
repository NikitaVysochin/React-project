import React from "react";
import { useLocation } from "react-router-dom";
import { Save } from "@material-ui/icons";
import "./ModalFooter.scss";

const ModalFooter = ({ setOpen, onSaveButton, onDeleteButton, delRedact, setDelRedact }) => {
	return (
    <div className='main-shadow-footer-container'>
      <div className='shadow-footer-container'>
        <div className='footer-container'>
          <div className='buttons-container'>
            <div 
            className='footer-cancel' 
            onClick={() => setOpen()}
            >
            Cancel
            </div>
            {delRedact==1 && <>
              <div className='footer-save' onClick={() => onDeleteButton()}>Delete</div>
             </>}
            {delRedact==2 && <>
              <div className='footer-save' onClick={() => onSaveButton()}>Save</div>
             </>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFooter;