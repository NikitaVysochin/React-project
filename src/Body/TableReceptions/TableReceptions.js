import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import axios from "axios";
import moment from "moment";
import Modal from "../Modal/Modal";
import deleteIcon from "../../img/delete.png";
import redactIcon from "../../img/redact.png";
import "./TableReceptions.scss";

const UnstyledTable = () => {
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState([]);
  const [index, setIndex] = useState(-1);
  const [save, setSave] = useState(0);

  const redact = (index) => {
    setOpen(true);
    setIndex(index);
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

  const Delete = async (elem) => {
    await axios
      .delete(`http://localhost:8000/deleteVisit?_id=${elem._id}`,{
        headers: {
          token: localStorage.getItem("jwtToken"),
        }
      }).then((res) => {
        setArr(res.data.data);
      });
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
                    {moment(row.date).add(10, "days").calendar()}
                  </td>
                  <td className="td-complaints">{row.complaint}</td>
                  <td className="td-icons">
                    <div className="icons-container">
                      <div onClick={() => Delete(row)}>
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