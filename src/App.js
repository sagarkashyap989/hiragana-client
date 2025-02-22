import React, { Fragment , useState, useEffect} from "react";
import FlashcardApp from "./components/FlashcardApp";

function App() {
//fetch state 

// useEffect(() => {
//   fetchStudents()
// }, [currentPage, pageSize])
 
//   const fetchStudents = async () => {
//     try {
//       const studentsData = await getAllStudents({page:currentPage,limit: pageSize}); 
// let sortedStudents = studentsData.data.sort((a, b) => a.student_id - b.student_id);

//         setStudents(sortedStudents);

//       setTotalPages(studentsData.pagination.totalPages);
//       setTotalCount(studentsData.pagination.totalCount); 
//     } catch (error) {
//       console.error("Error fetching students:", error.message);
//     }
//   };

  return (
    <Fragment>

    <FlashcardApp />
    </Fragment>
  );
}

export default App;
