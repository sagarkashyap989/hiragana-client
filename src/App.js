import React, { Fragment , useState, useEffect} from "react";
import "./App.css";
import { getAllStudents } from './api/student.api';

//components

import AddStuBtn from "./components/AddStuBtn"; 
import DataTable from './components/DataTable'
import FormModal from "./components/FormModal";
import TableFooter from "./components/TableFooter";

function App() {
//fetch state
const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(10); //  
const [totalPages, setTotalPages] = useState(1);
const [totalCount, setTotalCount] = useState(0); // T 


  const [showModal, setShowModal] = useState(false);

  // Toggle functions
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
const [students, setStudents] = useState([])


useEffect(() => {
  fetchStudents()
}, [currentPage, pageSize])
 
  const fetchStudents = async () => {
    try {
      const studentsData = await getAllStudents({page:currentPage,limit: pageSize}); 
let sortedStudents = studentsData.data.sort((a, b) => a.student_id - b.student_id);

        setStudents(sortedStudents);

      setTotalPages(studentsData.pagination.totalPages);
      setTotalCount(studentsData.pagination.totalCount); 
    } catch (error) {
      console.error("Error fetching students:", error.message);
    }
  };

  return (
    <Fragment>

    <h1>All Students</h1>
      <div className=" wrapper"> 
      <FormModal showModal={showModal} handleClose={handleClose} handleShow={handleShow} fetchStudents={fetchStudents}/>

        <div  className="p-x-20">     <AddStuBtn handleShow={handleShow} handleClose={handleClose}  fetchStudents={fetchStudents}/></div>

        <hr/>
        <div className="p-x-20"><DataTable students={students}  fetchStudents={fetchStudents} offset = {(currentPage -1 )* pageSize}/>
        <TableFooter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        totalPages={totalPages}
        totalCount={totalCount}
      />
        </div>

      </div>
    </Fragment>
  );
}

export default App;
