import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalBody from './ModalBody/ModalBody';
import ModalFooter from './ModalFooter/ModalFooter';
import './Modal.scss'

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function BasicModal({ open, setOpen, item, setArr, save }) {
  const handleClose = () => setOpen(false);

  return (
    <div className='modal-main-container'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='fck' >
          <ModalHeader />
          {save === 0 &&
            <ModalBody 
              item={item} 
              setArr={setArr} 
              setOpen={handleClose} 
            />
          }
          
        </Box>
      </Modal>
    </div>
  );
}