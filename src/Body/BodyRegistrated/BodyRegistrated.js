import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../img/Vector.png";
import "../../BodyRegistrated.scss";
import SnackBar from "../SnackBar/SnackBar";
import axios from "axios";

const BodyEnter = () => {
  const regPassword = /^(?=.*\d)[a-zA-Z\d]{6,}$/;
  const [open, setOpen] = useState({ bool:false, message: '', sev: '' });

  const Add = async (login, password) => {
    await axios.post('http://localhost:8000/createUser', {
      login: login,
      password: password,
    }).then(() => { 
        setOpen({ bool: true, message: 'авторизация прошла успешно', sev: 'success' });
      }).catch(err => {
        if(err.response.status == 400) {
          setOpen({ bool: true, message: 'такой пользователь уже зарегистрирован', sev: 'error' });
        }
      })
  }
	
	const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(open.bool = false);
  };
	
  const changeSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
		const password = formData.get("Password");
		const repPass = formData.get("Repeat password");
    const login = formData.get("login");
    
    if (repPass !== password) {
			setOpen({ bool: true, message: 'пароли не совпадают', sev: 'warning' });
    } 
    else {
      Add(login, password);
    }
  };
	
  return (
    <div className="body-registrated-container">
      <div className="main-logo">
        <img src={mainLogo} />
      </div>
      <div className="container-registrated-field">
        <div className="registrated-field">
          <div className="name-registrated">Регистрация</div>
            <form onSubmit={changeSubmit} className="registrated-login">
              <label className="login-label-text">Login:</label>
              <input 
                id="login" 
                placeholder='Login'
                autoComplete="off"
                required
                name="login"
                className="login-inp"
                minLength="6"
                title="Введите не менее шести символов"
              />

              <label className="password-label-text">Password:</label>
              <input
                name="Password"
                placeholder='Password'
                autoComplete="off"
                pattern="^(?=.*\d)[a-zA-Z\d]{6,25}$"
                required
                minLength="6"
                title="Пароль должен содержать латинские буквы и хотя бы одну цифру"
                className="password-inp"
              />

              <label className="password-label-text">Repeat password:</label>
              <input 
								name="Repeat password" 
								className="repeat-password-inp"
								autoComplete="off" 
                placeholder='Repeat password'
							/>

              <div className="container-button-enter">
                <button className="button-enter">Зарегистрироваться</button>
              </div>
              <div className="container-button-registration">
              <Link to='/authorization'><div className="button-registration">Авторизоваться</div></Link>
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
};

export default BodyEnter;
