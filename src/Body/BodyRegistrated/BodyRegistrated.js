
import React, { State, useState } from "react";
import "./BodyRegistrated.scss";
import mainLogo from '../../img/Vector.png'

const BodyEnter = () => {
	const regPassword = /^(?=.*\d)[a-zA-Z\d]{6,13}$/;

  const changeSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const password = formData.get('Password');
		const validPass = regPassword.test(password);
		const repPass = formData.get('Repeat password');
		if(!validPass){
			alert("Пароль должен содержать латинские буквы и хотя бы одну цифру");
		}
		if(repPass === password){
			console.log('pass true');
		}
		else {
			alert ('пароли не совпадают');
		}

	}


	return (<div className='body-registrated-container'>
		<div className='main-logo'><img src={mainLogo}/></div>
		<div className='container-registrated-field'>
			<div className='registrated-field'>
				<div className='name-registrated'>Войти в систему</div>
				<div className='registrated-login'>
					<form onSubmit={changeSubmit}>
						<label className='login-label-text'>Login:</label>
						<input id='login'
							name='login'
							className='login-inp'/>

						<label className='password-label-text'>Password:</label>
						<input name='Password'
							autocomplete="off"
						 	pattern="^(?=.*\d)[a-zA-Z\d]{6,25}$" 
							required minLength="6"
							title="Пароль должен содержать латинские буквы и хотя бы одну цифру"
						 	className='password-inp'/>
				
						<label className='password-label-text'>Repeat password:</label>
						<input name='Repeat password' className='repeat-password-inp'/>
					
				        <div className='container-button-enter'>
					        <button className='button-enter'>Войти</button>
				        </div>
                <div className='container-button-registration'>
					       	<div className='button-registration'>Зарегистрироваться</div>
				        </div>
            </form>
          </div>
			</div>
		</div>
	</div>);
}

export default BodyEnter;