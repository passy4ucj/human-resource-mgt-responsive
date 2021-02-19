import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

const MyLeave = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <>
      <Button variant="primary" onClick={handleShow} className='applyleave applyleave-btn'>
        Apply Leave
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="myleave-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Apply for Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGridState">
              <Form.Label>Leave Type</Form.Label>
              <Form.Control as="select" defaultValue="select">
                <option>Paid Leave</option>
                <option>Sick Leave</option>
                <option>Maternity Leave</option>
                <option>Paternity Leave</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='startDate'>
              <Form.Label>Start Date</Form.Label>
              <Form.Control type='date' placeholder='Start Date'></Form.Control>
            </Form.Group>
            <Form.Group controlId='endDate'>
              <Form.Label>End Date</Form.Label>
              <Form.Control type='date' placeholder='End Date'></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Reason</Form.Label>
              <Form.Control type="text" placeholder="Detailed reason for leave application" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control placeholder="Pending" disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose} className='applyleave-btn'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>

      <Table striped bordered hover size="sm" className='myleave-table'>
        <thead>
          <tr>
            <th>Date Applied</th>
            <th>Leave Type</th>
            <th>Duration</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jan 5, 2020</td>
            <td>Sick leave</td>
            <td>Jan 11, 2020 - Jan 14, 2020</td>
            <td>Malaria and Typhoid fever</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td>Oct 10, 2020</td>
            <td>Paid leave</td>
            <td>Oct 15, 2020 - Oct 17, 2020</td>
            <td>Paid Leave</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td>Feb 18, 2021</td>
            <td>Sick leave</td>
            <td>Feb 19, 2021 - Feb 22, 2021</td>
            <td>Malaria and Typhoid fever</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default MyLeave;