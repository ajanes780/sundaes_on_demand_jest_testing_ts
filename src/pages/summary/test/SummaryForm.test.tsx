import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';


import SummaryForm from '../SummaryForm';

test('Renders intital items', () => {
  render(<SummaryForm/>);

  const button = screen.getByRole("button", {name: "Here"});

  const checkBox = screen.getByRole("checkbox", {name:"Agree to terms"})
  expect(checkBox).toBeInTheDocument();
  expect(button).toBeInTheDocument();





});
