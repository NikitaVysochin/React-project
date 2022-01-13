import BodyRegistrated from './Body/BodyRegistrated/BodyRegistrated';
import BodyEnter from './Body/BodyEnter/BodyEnter';
import Header from './Header/Header';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (<div>
      <Header name={ 'Войти в систему' } />
      <BodyEnter />
    </div>
  );
}

export default App;
