import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './InputDoctor.scss';

export default function InputDoctor({ doctor, setDoctor}) {

  const handleChange = (event) => {
    setDoctor(event.target.value);
  };

  return (
    <Box className='container-inp-mui'>
      <FormControl className='inp-mui'>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          className='select-1123'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={doctor}
          onChange={handleChange}
        >
          <MenuItem value={'доктор Ватсон'}>доктор Ватсон</MenuItem>
          <MenuItem value={'Айболит'}>Айболит</MenuItem>
          <MenuItem value={'доктор Шелдон Купер'}>доктор Шелдон Купер</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}