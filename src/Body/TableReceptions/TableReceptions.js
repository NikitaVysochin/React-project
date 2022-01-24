import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import axios from "axios";
import moment from "moment";
import Modal from "../Modal/Modal";
import deleteIcon from "../../img/delete.png";
import redactIcon from "../../img/redact.png";
import "./TableReceptions.scss";

const UnstyledTable = ({ arr, setArr }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [save, setSave] = useState(0);
  const [delRedact, setDelRedact] = useState(0);

  const redact = (index) => {
    setOpen(true);
    setIndex(index);
    setDelRedact(2);
  };

  useEffect(async () => {
    await axios
      .get("http://localhost:8000/getAllVisits", {
        headers: {
          token: localStorage.getItem("jwtToken"),
        },
      })
      .then((res) => {
        setArr(res.data.data);
      });
  }, []);

  const Delete = (index) => {
    setOpen(true);
    setIndex(index);
    setDelRedact(1);
  };

  const thTable = ['Имя', 'Врач', 'Дата', 'Жалобы', ''];

  return (
    <div className="table-container">
      <Modal
        open={open}
        setOpen={setOpen}
        item={arr[index]}
        setArr={setArr}
        save={save}
        delRedact={delRedact}
        setDelRedact={setDelRedact}
      />
      <div className='root-table'>
        <div className='container-main-table'>
          <table className="main-table">
            <thead>
              <tr>
                {thTable.map((elem, index) => 
                  <th key={index}>{elem}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {arr.map((row, index) => (
                <tr key={row._id}>
                  <td className="td-name">{row.name}</td>
                  <td className="td-doctor">{row.doctor}</td>
                  <td className="td-date">
                    {moment(row.date).format('L')}
                  </td>
                  <td className="td-complaints">{row.complaint}</td>
                  <td className="td-icons">
                    <div className="icons-container">
                      <div onClick={() => Delete(index)}>
                        <img src={deleteIcon} />
                      </div>
                      <div onClick={() => redact(index)}>
                        <img src={redactIcon} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UnstyledTable;