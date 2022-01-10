import React from 'react';
import "./BodyRegistrated.scss";
import mainLogo from '../../img/Vector.png'

const BodyEnter = () => {
	return (<div className='body-registrated-container'>
		<div className='main-logo'><img src={mainLogo}/></div>
		<div className='container-registrated-field'>
			<div className='registrated-field'>
				<div className='name-registrated'>Войти в систему</div>
				<div className='registrated-login'>
					<form>
						<label className='login-label-text'>Login:</label>
						<input value='Login' className='login-inp'/>
					</form>
				</div>
				<div className='registrated-password'>
					<form>
						<label className='password-label-text'>Password:</label>
						<input value='Password' className='password-inp'/>
					</form>
				</div>
                <div className='registrated-password'>
					<form>
						<label className='password-label-text'>Repeat password:</label>
						<input value='Repeat password' className='repeat-password-inp'/>
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