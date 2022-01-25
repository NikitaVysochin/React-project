import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import './DateFilter.scss';

const DateFilter = ({ date, onChangeInput }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <DatePicker className='container-filter-date-text'
        value={date}
        onChange={(e) => onChangeInput(e)}
        renderInput={(params) => <TextField className='inp-filter-date' {...params} />}
      />
    </LocalizationProvider>
  );
}

export default DateFilter;