import React, { useState } from 'react';
import DateFilter from './DateFilter/DateFilter';
import LogoDelFilter from '../../../img/delete.png';
import './FilterInputs.scss'

const FilterInputs = ({ setArr, from, setFrom, to, setTo, resultFilterData, setFilterButton, filtArr }) => {

  const returnFilter = () => {
    setFilterButton(0);
    setFrom('');
    setTo('');
    setArr([...filtArr]);
  }

  return (
    <div className='filter-inp-container'>
      <div className='second-filter-inp-container'>
        <div className='date-inp-container'>
          <div>с :</div>
          <DateFilter 
            date={from}
            onChangeInput={setFrom}
          />
        </div>
        <div className='date-inp-container'>
          <div>по :</div>
          <DateFilter 
            date={to}
            onChangeInput={setTo}  
          />
        </div>
        <div className='button-filter' onClick={() => resultFilterData()}>Фильтровать</div>
        <div className='button-delete-filter' onClick={() => returnFilter()}>
          <img src={LogoDelFilter}/>
        </div>
      </div>
    </div>
  );
}

export default FilterInputs;