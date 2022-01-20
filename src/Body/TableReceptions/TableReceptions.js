import React, { State, useEffect, useState } from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import axios from "axios";
import moment from "moment";
import deleteIcon from "../../img/delete.png";
import redactIcon from "../../img/redact.png";
import Modal from "../Modal/Modal";
import "./TableReceptions.scss";

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const Root = styled("div")`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #ddd;
  }
`;

const CustomTablePagination = styled(TablePaginationUnstyled)`
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }

  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }

  & .MuiTablePaginationUnstyled-actions {
    display: flex;
    gap: 0.25rem;
  }
`;

export default function UnstyledTable() {
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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div className="table-container">
      <Modal
        open={open}
        setOpen={setOpen}
        item={arr[index]}
        setArr={setArr}
        save={save}
      />
      <Root sx={{ maxWidth: "100%", width: "92%" }}>
        <div className='container-main-table'>
          <table className="main-table">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Врач</th>
                <th>Дата</th>
                <th>Жалобы</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : arr
              ).map((row, index) => (
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
                        {" "}
                        <img src={deleteIcon} />{" "}
                      </div>
                      <div onClick={() => redact(index)}>
                        <img src={redactIcon} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}

              {emptyRows > 0 && (
                <tr style={{ height: 41 * emptyRows }}>
                  <td colSpan={3} />
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Root>
    </div>
  );
}
