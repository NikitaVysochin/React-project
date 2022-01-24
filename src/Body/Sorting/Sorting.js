import React, { useState } from 'react';
import { Box, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select } from '@mui/material';
import './Sorting.scss';




const Sorting = () => {

  const [sorting, setSorting] = useState('');

  const arrSorting = ['доктор Ватсон', 'Айболит', 'доктор Шелдон Купер'];

  
    const handleChange = (event) => {
      setSorting(event.target.value);
    };
  

  return (
    <Box className='container-inp-mui'>
      <FormControl className='inp-mui'>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          className='select'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorting}
          onChange={(e)=>handleChange(e)}
        >
          {arrSorting.map((elem, index) => 
            <MenuItem value={elem} key={index}>{elem}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Sorting;