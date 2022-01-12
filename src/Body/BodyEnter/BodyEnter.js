import React from 'react';
import mainLogo from '../../img/Vector.png'
import "./BodyEnter.scss";

const BodyEnter = () => {
	return (<div className='body-enter-container'>
		<div className='main-logo'><img src={mainLogo}/></div>
		<div className='container-enter-field'>
			<div className='enter-field'>
				<div className='name-enter'>Войти в систему</div>
				<div className='enter-login'>
					<form>
						<label className='login-label-text'>Login:</label>
						<input value='Login' className='login-inp'/>
					</form>
				</div>
				<div className='enter-password'>
					<form>
						<label className='password-label-text'>Password:</label>
						<input value='Password' className='password-inp'/>
					</form>
				</div>
				<div className='container-button-enter'>
					<div className='button-enter'>Войти</div>
				</div>
				<div className='container-button-registration'>
					<div className='button-registration'>Зарегистрироваться</div>
				</div>
			</div>
		</div>
	</div>);
}

export default BodyEnter;