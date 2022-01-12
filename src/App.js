import BodyRegistrated from './Body/BodyRegistrated/BodyRegistrated';
import BodyEnter from './Body/BodyEnter/BodyEnter';
import Header from './Header/Header';
import logo from './logo.svg';
import './App.css';

function App() {
  return (<div>
      <Header name={'Зарегистрироваться в системе'}/>
      <BodyRegistrated/>
    </div>
  );
}

export default App;
