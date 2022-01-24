import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import './InputDate.scss';

const InputDate = ({value, setValue}) => {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <DatePicker className='container-date-text'
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField className='inp-date' {...params} />}
      />
    </LocalizationProvider>
  );
}

export default InputDate;