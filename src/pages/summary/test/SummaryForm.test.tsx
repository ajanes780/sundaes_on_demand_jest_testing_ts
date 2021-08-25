import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';


import SummaryForm from '../SummaryForm';

test('Renders intital items in correct state and function', () => {
  render(<SummaryForm/>);

  const button = screen.getByRole("button", {name: "Confirm Order"});
  const checkBox = screen.getByRole("checkbox", {name:"I agree to the Terms and Conditions"})
  expect(checkBox).toBeInTheDocument();
  expect(button).toBeInTheDocument();







});

test(" Checkbox enables on first click and disables on secound" , () =>{

  render(<SummaryForm/>);
  const button = screen.getByRole("button", {name: "Confirm Order"});
  const checkBox = screen.getByRole("checkbox", {name:"I agree to the Terms and Conditions"})
  fireEvent.click(checkBox)
  expect(checkBox).toBeChecked()
  expect(button).toBeEnabled()
  fireEvent.click(checkBox)
  expect(button).toBeDisabled()

})