import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

const MyLeave = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <>
      <Button variant="primary" onClick={handleShow}>
        Apply Leave
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='myleave-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Apply for Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter Info</Form.Label>
              <Form.Control type="text" placeholder="...." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Info</Form.Label>
              <Form.Control type="text" placeholder="..." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Info</Form.Label>
              <Form.Control type="text" placeholder="..." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Info</Form.Label>
              <Form.Control type="text" placeholder="..." />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Notify me" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Date Applied</th>
            <th>Leave Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jan 5, 2020</td>
            <td>Sick leave</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td>Oct 10, 2020</td>
            <td>Paid leave</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td>Feb 20, 2021</td>
            <td>Sick leave</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default MyLeave;