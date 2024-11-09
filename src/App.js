import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import DataTable from './components/DataTable'
import FormModal from "./components/FormModal";

function App() {
  return (
    <Fragment>
      <div className=" wrapper">
   
        {/* <ListTodos /> */}
        {/* <FormModal/> */}

        <div  className="p-x-20">     <InputTodo /></div>

        <hr/>
        <div className="p-x-20"><DataTable/></div>

      </div>
    </Fragment>
  );
}

export default App;
