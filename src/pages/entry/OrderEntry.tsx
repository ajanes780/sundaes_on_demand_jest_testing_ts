import React from 'react';
import Options from './Options';

export const OrderEntry = () => {
  return (
    <div>
      <Options optionsType='scoops' />
      <Options optionsType='toppings' />
    </div>
  );
};

export default OrderEntry;
