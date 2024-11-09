import React, { useState } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';
import { updateStudent, deleteStudent } from '../api/student.api';

const DataTable = ({ students, fetchStudents , offset}) => {
  const [editStudent, setEditStudent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Delete student with SweetAlert confirmation
  const handleDeleteStudent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const deleteResponse = await deleteStudent(id);
          console.log('Deleted Student:', deleteResponse);
          fetchStudents(); // Refresh the students list after deletion
          Swal.fire("Deleted!", "The student has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting student:", error.message);
          Swal.fire("Error", "Failed to delete the student.", "error");
        }
      }
    });
  };

  // Open edit modal
  const handleEditClick = (student) => {
    setEditStudent(student);
    setShowEditModal(true);
  };

  // Close edit modal
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditStudent(null);
  };

  const handleUpdateStudent = async () => {
    try {
      const updatedStudent = await updateStudent(editStudent.student_id, editStudent);
      fetchStudents(); // Refresh the students list after update
      handleCloseEditModal(); // Close the edit modal
      Swal.fire({
        title: "Success",
        text: "Student details have been updated successfully.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error updating student:", error.message);
      Swal.fire({
        title: "Error",
        text: "Failed to update student details.",
        icon: "error",
      });
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  return (
    <div className="datatable">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Gender</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => (
            <tr key={student.student_id}>
              <td>{offset+index+1}</td>
              <td>{student.name}</td>
              <td>{student.total_marks}</td>
              <td>{student.gender === 0 ? 'Male' : 'Female'}</td>
              <td>
                <FaEdit onClick={() => handleEditClick(student)} style={{ cursor: 'pointer' }} />
              </td>
              <td>
                <MdDelete onClick={() => handleDeleteStudent(student.student_id)} style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Student Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editStudent?.name || ''}
                onChange={handleInputChange}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group controlId="total_marks">
              <Form.Label>Marks</Form.Label>
              <Form.Control
                type="number"
                name="total_marks"
                value={editStudent?.total_marks || ''}
                onChange={handleInputChange}
                placeholder="Enter marks"
              />
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={editStudent?.gender || 0}
                onChange={handleInputChange}
              >
                <option value={0}>Male</option>
                <option value={1}>Female</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateStudent}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DataTable;
