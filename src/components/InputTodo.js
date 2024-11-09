import React, { Fragment, useState } from "react";
import Swal from 'sweetalert2'

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();  // Prevent form default submit behavior
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        // Show a success alert using SweetAlert2
        Swal.fire({
          title: 'Success!',
          text: 'Todo added successfully!',
          icon: 'success',
          confirmButtonText: 'Great'
        });
        // Clear the input field after successful form submission
        setDescription("");
      } else {
        // Handle errors
        Swal.fire({
          title: 'Error!',
          text: 'There was an issue adding the todo.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    } catch (err) {
      console.error(err.message);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  };

  return (
    <Fragment>
      <form className="d-flex mt-5 form-wrapper" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control w-35"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter todo"
        />
        <button className="btn btn-success w-35">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
