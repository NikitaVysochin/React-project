import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BodyRegistrated from './Body/BodyRegistrated/BodyRegistrated';
import BodyEnter from './Body/BodyEnter/BodyEnter';
import MainAddInputs from './Body/MainAddInputs/MainAddInputs';
import SortAndFilter from './Body/SortAndFilter/SortAndFilter'
import TableReceptions from './Body/TableReceptions/TableReceptions';
import Header from './Header/Header';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [arr, setArr] = useState([]);
  const [filtArr, setFiltArr] = useState([]);

  return (<div>
      <Header />
      <Routes>
        <Route path='/bodyRegistrated' element={
          <BodyRegistrated />
        }/>
        <Route path='/authorization' element={
          <BodyEnter />
        }/>
        <Route path='/AddInputs' element={
          <>
            <MainAddInputs />
            <SortAndFilter 
              arr={arr}
              setArr={setArr}
              filtArr={filtArr}
            />
            <TableReceptions 
              arr={arr}
              setArr={setArr}
              setFiltArr={setFiltArr}
            />
          </>
        }/>
        <Route path="/" element={<Navigate replace to="/authorization" />} />
      </Routes>
    </div>
  );
}

export default App;
