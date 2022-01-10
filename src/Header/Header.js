import React from 'react';
import logoHeader from '../img/Vector (1).png';
import '../Fonts/Fonts.scss';
import "./Header.scss";

const Header = () => {
	return (<div className='header-container'>
		<div className='main-header'>
      <div className='logo-header'><img src={logoHeader}/></div>
      <div className='name-header'>Войти в систему</div>
    </div>
	</div>);
}

export default Header;