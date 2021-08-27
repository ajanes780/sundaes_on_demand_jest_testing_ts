import React, { FC } from 'react';
import { Col, Image } from 'react-bootstrap';

const ToppingOptions: FC<{ imagePath: string; name: string }> = ({ imagePath, name }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <Image src={`http://localhost:3000/${imagePath}`} alt={`${name} topping`} />;
    </Col>
  );
};

export default ToppingOptions;
