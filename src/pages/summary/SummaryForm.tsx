import React from 'react';
import {Container, Button, Form} from "react-bootstrap"

function SummaryForm() {
  return (
    <Container>
      <Button variant="primary">Here</Button>
      <Form.Group controlId="checkbox">
      <Form.Check type="checkbox" label="Agree to terms"/>
      </Form.Group>
    </Container>
  )
}

export default SummaryForm;