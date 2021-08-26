import React, { FC } from 'react';
import { Image, Col } from 'react-bootstrap';

const ScoopOptions: FC<{ imagePath: string; name: string }> = ({ imagePath, name }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img src={`http://localhost:3000/${imagePath}`} alt={`${name} scoop`} />;
    </Col>
  );
};

export default ScoopOptions;
