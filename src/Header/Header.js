import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoHeader from "../img/Vector (1).png";
import "../Fonts/Fonts.scss";
import "./Header.scss";

const Header = () => {
  const history = useNavigate();
  const location = useLocation();
  let headerName = '';
  
  switch (location.pathname) {
    case '/AddInputs':
      headerName = 'Приемы';
      break;
    case '/authorization':
      headerName = 'Войти в систему';
      break;
    case '/bodyRegistrated':
      headerName = 'Зарегистрироваться в системе';
      break;
  }

	return (<div className='header-container'>
		<div className='main-header'>
      <div className='logo-header'><img src={logoHeader}/></div>
      <div className='name-header'>{headerName}</div>
      {location.pathname == '/AddInputs' && 
        <div className='header-button' onClick={() => history("/authorization")}>
          Выход
        </div>}
    </div>
	</div>);
}

export default Header;