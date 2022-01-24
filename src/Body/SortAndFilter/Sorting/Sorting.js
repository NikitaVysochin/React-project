import React, { useState } from 'react';
import { Box, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select } from '@mui/material';
import './Sorting.scss';

const Sorting = ({ sorting, setSorting }) => {

  const arrSorting = [
    {value: 'name', label: 'Имени'}, 
    {value: 'doctor', label: 'Доктору'},
    {value: 'date', label: 'Дате'},
    {value: '', label: 'None'},
  ];
  
  const handleChange = (event) => {
    setSorting(event.target.value);
  };
  
  return (
    <Box className='sort-container-inp-mui'>
      <div className='label-sort'>Сортировать по:</div>
      <FormControl className='sort-inp-mui'>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          className='select'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorting}
          onChange={(e)=>handleChange(e)}
        >
          {arrSorting.map((elem, index) => 
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

export default Sorting;