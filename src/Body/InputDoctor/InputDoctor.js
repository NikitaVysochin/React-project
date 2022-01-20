import * as React from 'react';
import { Box, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select } from '@mui/material';
import './InputDoctor.scss';

const InputDoctor = ({ doctor, setDoctor}) => {
  const handleChange = (event) => {
    setDoctor(event.target.value);
  };

  const arrDoctor = ['доктор Ватсон', 'Айболит', 'доктор Шелдон Купер'];

  return (
    <Box className='container-inp-mui'>
      <FormControl className='inp-mui'>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          className='select'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={doctor}
          onChange={(e)=>handleChange(e)}
        >
          {arrDoctor.map((elem, index) => {
            return <MenuItem value={elem} key={index}>{elem}</MenuItem>
          }) }
        </Select>
      </FormControl>
    </Box>
  );
}

export default InputDoctor;