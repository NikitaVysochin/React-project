import { useState } from 'react';
import { useRoutes, Routes, Route, Navigate } from 'react-router-dom';
import Check from './Body/Check/Check';
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
  const route = useRoutes(Check(arr, setArr, filtArr, setFiltArr));

  return (<div>
      <Header />
      {route}
      <Routes>
        <Route path='/bodyRegistrated' element={
          <BodyRegistrated />
        }/>
        <Route path='/authorization' element={
          <BodyEnter />
        }/>
        <Route path="/" element={<Navigate replace to="/authorization" />} />
      </Routes>
    </div>
  );
}

export default App;
