import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../img/Vector.png";
import "../../BodyRegistrated.scss";
import SnackBar from "../SnackBar/SnackBar";
import axios from "axios";


const BodyEnter = () => {
	const [open, setOpen] = useState({ bool:false, message: '', sev: '' });

	const Add = async (login, password) => {
    await axios.post('http://localhost:8000/getUser', {
      login: login,
      password: password,
    }).then(() => { 
				setOpen({ bool: true, message: 'авторизация прошла успешно', sev: 'success' });
      }).catch(err => {
				if (err.response.status == 400) {
					setOpen({ bool: true, message: 'пароль неверный', sev: 'error' });
				}
				if (err.response.status == 401) {
					setOpen({ bool: true, message: 'такой пользователь не зарегистрирован', sev: 'error' });
				}
			});
  }

	const changeSubmit = (e) => {
    e.preventDefault();

		const formData = new FormData(e.target);
		const password = formData.get("Password");
    const login = formData.get("login");

		Add(login, password);
	}

	const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(open.bool = false);
  };

	return (
		<div className="body-registrated-container">
			<div className="main-logo">
				<img src={mainLogo} />
			</div>
			<div className="container-registrated-field">
				<div className="registrated-field">
					<div className="name-registrated">Войти в систему</div>
						<form onSubmit={changeSubmit} className="registrated-login">
							<label className="login-label-text">Login:</label>
							<input 
								id="login" 
								placeholder='Login'
								autoComplete="off"
								required
								name="login"
								className="login-inp"
							/>

							<label className="password-label-text">Password:</label>
							<input
								name="Password"
								placeholder='Password'
								autoComplete="off"
								required
								className="password-inp"
							/>

							<div className="container-button-enter">
								<button className="button-enter">Войти</button>
							</div>
							<div className="container-button-registration">
								<Link to='/bodyRegistrated'><div className="button-registration">Зарегистрироваться</div></Link>	
							</div>
						</form>
				</div>
			</div>

			{open.bool && <SnackBar 
				open={open} 
				setOpen={setOpen} 
				handleClose={handleClose} 
			/>}

		</div>
	);
}

export default BodyEnter;