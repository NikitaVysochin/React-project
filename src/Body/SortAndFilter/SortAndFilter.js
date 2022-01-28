import React, { useState } from 'react';
import SortDirection from './SortDirection/SortDirection';
import Sorting from './Sorting/Sorting';
import FilterInputs from './FilterInputs/FilterInputs';
import logoPlus from '../../img/addFiltr.png';
import './SortAndFilter.scss';

const SortAndFilter = ({ arr, setArr, filtArr }) => {
  const [sorting, setSorting] = useState('');
  const [direction, setDirection] = useState('asc');
  const [filterButton, setFilterButton] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const resultFilterData = () => {
    const resultProductData = filtArr.filter(a => {
      const dat = new Date(a.date);
      if (to == '') return dat >= from;
      if (from == '') return dat <= to;
      return (dat >= from && dat <= to);
    });

    setArr([...resultProductData]);
  }
  
  const sortField = (value) => {
    setSorting(value);
    sortArray(value, direction);
  }

  const sortDirection = (value) => {
    setDirection(value);
    sortArray(sorting, value);
  }

  const sortArray = (field, dir) => {
    if (field === '') {
      field = '_id';
      dir = 'asc';
    }
    arr.sort((a, b) => (a[field] < b[field] ? -1 : 1));
    if (dir === 'desc') arr.reverse();
    setArr([...arr]);
  }

	return (<>
    <div className='main-container-sort-filter'>
      <div className='secondary-container-sort-filter'>
        <div className='container-sort-filter'>
          <Sorting 
            sorting={sorting}
            setSorting={sortField}
          />
        </div>
        {sorting !== '' && <div className='container-sort-filter'>
          <SortDirection
            direction={direction}
            setDirection={sortDirection}
          />
        </div>}
        <div className='container-add-filter'>
            <div className='text-filter-button'>Добавить фильтр по дате:</div>
            <div className='img-filter-button' onClick={()=>(setFilterButton(1))}>
              <img src={logoPlus}/>
            </div>
        </div>
      </div>
    </div>
    {filterButton == 1 && <FilterInputs 
      setArr={setArr}
      from={from}
      setFrom={setFrom}
      to={to}
      setTo={setTo}
      resultFilterData={resultFilterData}
      setFilterButton={setFilterButton}
      filtArr={filtArr}
    />}
  </>);
}

export default SortAndFilter;