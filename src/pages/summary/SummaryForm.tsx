import React, {useState} from 'react';
import {Container, Col, Button, Form, OverlayTrigger, Popover} from "react-bootstrap"

function SummaryForm() {
  const [disabled, setDissabled] = useState(true)
  const [show, setShow] = useState(false);


  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        No ice creame will actually be delivered
      </Popover.Body>
    </Popover>
  );


  const CheckBoxLabel = (
    <span>
    I agree to
       <OverlayTrigger placement="right" overlay={popover}>
          <span style={{color: "blue"}}> the Terms and Conditions</span>
       </OverlayTrigger>
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