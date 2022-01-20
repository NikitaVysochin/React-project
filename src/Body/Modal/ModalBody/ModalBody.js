import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import InputDoctor from '../../InputDoctor/InputDoctor';
import axios from 'axios';
import InputDate from '../../InputDate/InputDate';
import ModalFooter from '../ModalFooter/ModalFooter';
import './ModalBody.scss';

const ModalBody = ({ item, setArr, setOpen }) => {
  const {_id, name, doctor, date, complaint} = item;
  const [nameVal, setNameVal] = useState(name);
  const [complaintsVal, setComplaintseVal] = useState(complaint);
  const [dateVal, setdateVal] = useState(date);
  const [doctorVal, setDoctorVal] = useState(doctor);

  const saveRedact = async () => {
    await axios
      .patch("http://localhost:8000/changeVisit", {
        name: nameVal,
        doctor: doctorVal,
        date: dateVal,
        complaint: complaintsVal,
        _id,
      },{
      headers: {
        token: localStorage.getItem("jwtToken"),
      },
    })
      .then((res) => {
        setArr(res.data.data);
        setOpen();
      });
  };

	return (<>
    <div className='modal-body-container'>
      <div className='modal-mainInputs-container'>
        <form className='modal-mainInputs-form'>
          <div className='modal-input-name'>
            <label>Имя:</label>
            <input 
            value={nameVal}
            onChange={(e) => setNameVal(e.target.value)}/>
          </div>
          <div className='modal-input-doctor'>
            <label>Врач:</label>
            <InputDoctor 
            doctor={doctorVal}
            setDoctor={setDoctorVal}
            />
          </div>
          <div className='modal-input-date'>
            <label>Дата:</label>
            <InputDate 
            value={dateVal}
            setValue={setdateVal}
            />
          </div>
          <div className='modal-input-complaints'>
            <label>Жалобы:</label>
            <input 
            value={complaintsVal}
            onChange={(e) => setComplaintseVal(e.target.value)}/>
          </div>
        </form>
      </div>
    </div>
    <ModalFooter setOpen={setOpen} onSaveButton={saveRedact}/>
  </>);
}

export default ModalBody;