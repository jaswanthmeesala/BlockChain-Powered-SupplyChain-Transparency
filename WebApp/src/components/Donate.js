import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Donate.css";
import img from '../images/donate.png'
const Donate = () => {
  return (
    <Form id="form">
        <h1>Schedule your next Blood Donation</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" id="button">
        Book Appointment
      </Button>
      <img src={img} alt="error" id="img"></img>
    </Form>
  );
};

export default Donate;
