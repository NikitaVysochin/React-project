import { Routes, Route, Navigate } from 'react-router-dom';
import BodyRegistrated from './Body/BodyRegistrated/BodyRegistrated';
import BodyEnter from './Body/BodyEnter/BodyEnter';
import Header from './Header/Header';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (<div>
      <Header name={ 'Войти в систему' } />
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
