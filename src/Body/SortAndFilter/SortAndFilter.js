import React, { useState } from 'react';
import SortDirection from './SortDirection/SortDirection';
import Sorting from './Sorting/Sorting';
import './SortAndFilter.scss';

const SortAndFilter = ({ arr, setArr }) => {
  const [sorting, setSorting] = useState('');
  const [direction, setDirection] = useState('asc');

  const sortField = (value) => {
    setSorting(value);
    sortArray(value, direction);
  }

  const sortDirection = (value) => {
    setDirection(value);
    sortArray(sorting, value);
  }

  const sortArray = (field, dir) => {
    arr.sort((a, b) => (a[field] < b[field] ? -1 : 1));
    if (dir === 'desc') arr.reverse();
    if (field === '') arr.sort((a, b) => (a._id < b._id ? -1 : 1));
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
        {sorting!=='' && <div className='container-sort-filter'>
          <SortDirection
            direction={direction}
            setDirection={sortDirection}
          />
        </div>}
      </div>
    </div>
  </>);
}

export default SortAndFilter;