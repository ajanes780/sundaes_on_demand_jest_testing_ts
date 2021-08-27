import Alert from 'react-bootstrap/Alert';

import { FC } from 'react';

const AlertBanner: FC<{ message: string; variant: string }> = ({ message, variant }) => {
  const alertMessage = message || 'An unexpected error ocurred. Please try again later';

  const alertVariant = variant || 'danger';

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: 'red' }}>
      {alertMessage}
    </Alert>
  );
};

export default AlertBanner;
