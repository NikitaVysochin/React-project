import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalBody from './ModalBody/ModalBody';
import ModalFooter from './ModalFooter/ModalFooter';
import './Modal.scss'

const BasicModal = ({ open, setOpen, item, setArr, save }) => {
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

export default BasicModal;