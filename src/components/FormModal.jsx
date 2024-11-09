import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FormModal = () => {
  const [showModal, setShowModal] = useState(false);

  // Toggle functions
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Function to handle clicking on backdrop
  const handleBackdropClick = (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      handleClose();
    }
  };

  return (
    <>
      <div className="container">
        <Button variant="danger" onClick={handleShow}>
          See Modal with Form
        </Button>
      </div>

      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={handleBackdropClick}
          ></div>

          {/* Modal */}
          <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="email1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Your information is safe with us.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="password1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="password2">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default FormModal;
