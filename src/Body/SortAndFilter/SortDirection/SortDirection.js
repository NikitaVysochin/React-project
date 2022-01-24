import React, { useState } from 'react';
import { Box, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select } from '@mui/material';
import './SortDirection.scss';

const SortDirection = ({ direction, setDirection }) => {

  const arrDirection = [
    {value: 'asc', label: 'По возрастанию'},
    {value: 'desc', label: 'По убыванию'} 
  ];

  const handleChange = (event) => {
    setDirection(event.target.value);
  };

  return (
    <Box className='direction-container-inp-mui'>
      <div className='label-direction'>Направление:</div>
      <FormControl className='direction-inp-mui'>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          className='select'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={direction}
          onChange={(e)=>handleChange(e)}
        >
          {arrDirection.map((elem, index) => 
            <MenuItem 
              value={elem.value} 
              key={index}>
                {elem.label}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortDirection;