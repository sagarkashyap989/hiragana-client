import React, { Fragment, useState } from "react";
import Swal from 'sweetalert2'

const AddStuBtn = ({handleShow, handleClose}) => {
  const [description, setDescription] = useState("");

 

  return (
    <Fragment>
<div className=" d-flex  form-wrapper">

    <form className="d-flex mt-3 w-35"  >
        <input
          type="text"
          className="form-control "
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter todo"
        />
      </form>
        <button className="btn btn-success w-35" style={{height:'35px'}} 
            onClick={handleShow}>Add a new Student</button>
    </div>  
    </Fragment>
  );
};

export default AddStuBtn;
