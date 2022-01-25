import { Navigate } from "react-router-dom";
import MainAddInputs from '../MainAddInputs/MainAddInputs';
import SortAndFilter from '../SortAndFilter/SortAndFilter';
import TableReceptions from '../TableReceptions/TableReceptions';


const Check = ( arr, setArr, filtArr, setFiltArr ) => [
  {
    path: "/AddInputs",
    element: localStorage.getItem("jwtToken") ? (
      <>
        <MainAddInputs />
        <SortAndFilter 
          arr={arr}
          setArr={setArr}
          filtArr={filtArr}
        />
        <TableReceptions 
          arr={arr}
          setArr={setArr}
          setFiltArr={setFiltArr}
        />
      </>
    ) : (
      <Navigate to="/authorization" />
    ),
  },
];

export default Check;