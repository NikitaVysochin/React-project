import React, { useState } from 'react';
import axios from 'axios';
import InputDoctor from '../InputDoctor/InputDoctor';
import InputDate from '../InputDate/InputDate';
import TableReceptions from '../TableReceptions/TableReceptions';
import './MainAddInputs.scss';

const MainAddInputs = () => {
  const [nameVal, setNameVal] = useState('');
  const [complaintsVal, setComplaintseVal] = useState('');
  const [dateVal, setdateVal] = useState(null);
  const [doctor, setDoctor] = useState('');

  const checkDisabled = () => {
    const test = !(nameVal.trim().length>0 && complaintsVal.trim().length>0 && dateVal!==null && doctor.length>0);
    return test;
  }

  const addPatient = async () => {
    await axios.post('http://localhost:8000/createNewVisit', {
      name: nameVal,
      doctor: doctor,
      date: dateVal,
      complaint: complaintsVal,
    }, {
      headers: {
        token: localStorage.getItem('jwtToken')
      }
    });
  }

	return (
    <div className='parent-container'>
      <div className='mainInputs-container'>
        <form className='mainInputs-form'>
          <div className='main-adaptiv-container'>
            <div className='adaptiv-container-one'>
              <div className='input-name'>
                <label>Имя:</label>
                <input
                  required
                  value={nameVal}
                  onChange={(e) => setNameVal(e.target.value)}/>
              </div>
              <div className='input-doctor'>
              <label>Врач:</label>
                <InputDoctor 
                  doctor={doctor}
                  setDoctor={setDoctor}
                />
              </div>
            </div>
            <div className='adaptiv-container-two'>
              <div className='input-date'>
              <label>Дата:</label>
                <InputDate 
                  value={dateVal}
                  setValue={setdateVal}
                />
              </div>
              <div className='input-complaints'>
                <label>Жалобы:</label>
                <input 
                  required
                  value={complaintsVal}
                  onChange={(e) => setComplaintseVal(e.target.value)}/>
              </div>
            </div>
          </div>
          <button 
            disabled={checkDisabled()}
            className='mainInputs-button' 
            onClick={() => addPatient()}
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}

export default MainAddInputs;