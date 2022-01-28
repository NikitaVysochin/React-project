import React, { useEffect, useState } from "react";
import { Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow
 } from '@mui/material';
import axios from "axios";
import moment from "moment";
import Modal from "../Modal/Modal";
import deleteIcon from "../../img/delete.png";
import redactIcon from "../../img/redact.png";
import "./TableReceptions.scss";

const UnstyledTable = ({ arr, setArr, setFiltArr }) => {
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
        setFiltArr(res.data.data);
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
      <TableContainer className='container-main-table'>
        <Table stickyHeader className="main-table" aria-label="sticky table">
          <TableHead>
            <TableRow>
              {thTable.map((elem, index) => 
                <TableCell key={index}>{elem}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
           {arr.map((row, index) => (
                <TableRow key={row._id}>
                  <TableCell className="td-name">{row.name}</TableCell>
                  <TableCell className="td-doctor">{row.doctor}</TableCell>
                  <TableCell className="td-date">
                    {moment(row.date).format('DD.MM.YYYY')}
                  </TableCell>
                  <TableCell className="td-complaints">
                    <div>{row.complaint}</div>
                  </TableCell>
                  <TableCell className="td-icons">
                    <div className="icons-container">
                      <div onClick={() => Delete(index)}>
                        <img src={deleteIcon} />
                      </div>
                      <div onClick={() => redact(index)}>
                        <img src={redactIcon} />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ) )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UnstyledTable;