import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { createStudent } from '../api/student.api';

const FormModal = ({ handleClose, showModal, fetchStudents }) => { 
  const [formData, setFormData] = useState({
    name: '',
    gender: 0, // 0 for male, 1 for female
    marks: '',
  });
 
  const [errors, setErrors] = useState({
    name: '',
    marks: '',
  });
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleGenderChange = (event) => {
    const gender = event.target.value === 'Male' ? 0 : 1;
    setFormData({
      ...formData,
      gender,
    });
  };

  // Validation logic
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', marks: '' };

    // Name validation
    if (formData.name.trim() === '') {
      newErrors.name = 'Name cannot be empty';
      isValid = false;
    }

    if (formData.marks === '' || formData.marks == null) {
      newErrors.marks = 'Please enter marks';
      isValid = false;
    }
    // Marks validation (between 0 and 100)
    if (formData.marks < 0 || formData.marks > 100) {
      newErrors.marks = 'Marks should be between 0 and 100';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission with SweetAlert
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      try {
        const createdStudent = await createStudent(formData);
        console.log('Created Student:', createdStudent);
        fetchStudents(); // Refresh
        Swal.fire({
          title: "Success",
          text: "Student has been created successfully.",
          icon: "success",
        });
        setFormData({    name: '',
        gender: 0, // 0 for male, 1 for female
        marks: '',})
        handleClose(); // Close the modal 
      } catch (error) {
        console.error("Error creating student:", error.message);
        Swal.fire({
          title: "Error",
          text: "Failed to create student.",
          icon: "error",
        });
      }
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      handleClose();
    }
  };

  return (
    <>
      {showModal && (
        <Modal show={showModal} onHide={handleClose} centered onClick={handleBackdropClick}>
          <Modal.Header closeButton>
            <Modal.Title>Create a Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name} // Show invalid state if   error
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 0}
                    onChange={handleGenderChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 1}
                    onChange={handleGenderChange}
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="marks">
                <Form.Label>Marks</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter marks"
                  name="marks"
                  value={formData.marks}
                  onChange={handleChange}
                  isInvalid={!!errors.marks} 
                />
                <Form.Control.Feedback type="invalid">
                  {errors.marks}
                </Form.Control.Feedback>
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default FormModal;
