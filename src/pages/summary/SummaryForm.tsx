import React, {useState} from 'react';
import {Container, Col, Button, Form} from "react-bootstrap"

function SummaryForm() {
  const [disabled, setDissabled] = useState(true)

  const CheckBoxLabel = (
    <span>

    I agree to <span style={{color: "blue"}}> the Terms and Conditions</span>
  </span>)

  return (
    <Container>
      <Col md={12}>
        <Form.Group className="m-3" controlId="checkbox">
          <Form.Check onChange={() => setDissabled(!disabled)} type="checkbox" label={CheckBoxLabel}/>
        </Form.Group>
        <Button disabled={disabled} variant="primary">Confirm Order</Button>
      </Col>
    </Container>
  )
}

export default SummaryForm;