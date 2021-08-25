import React from 'react';
import {render, screen, fireEvent , waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import SummaryForm from '../SummaryForm';

test('Renders intital items in correct state and function', () => {
  render(<SummaryForm/>);

  const button = screen.getByRole("button", {name: "Confirm Order"});
  const checkBox = screen.getByRole("checkbox", {name: "I agree to the Terms and Conditions"})
  expect(checkBox).toBeInTheDocument();
  expect(button).toBeInTheDocument();


});

test(" Checkbox enables on first click and disables on secound", () => {

  render(<SummaryForm/>);
  const button = screen.getByRole("button", {name: "Confirm Order"});
  const checkBox = screen.getByRole("checkbox", {name: "I agree to the Terms and Conditions"})
  fireEvent.click(checkBox)
  expect(checkBox).toBeChecked()
  expect(button).toBeEnabled()
  fireEvent.click(checkBox)
  expect(button).toBeDisabled()

})

test("Does popover appear and disappear on hover", async () => {
  render(<SummaryForm/>);

  //Popover should not be present
  const nullPopover = screen.queryByText(/no ice creame will actually be delivered/i)
  expect(nullPopover).not.toBeInTheDocument()

  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  userEvent.hover(termsAndConditions)
  const popover = screen.getByText(/no ice creame will actually be delivered/i)
  expect(popover).toBeInTheDocument()

  //poppover disappears when we mouse out
  userEvent.unhover(termsAndConditions)
  const nullPopoverAgain = await waitForElementToBeRemoved(()=> screen.queryByText(/no ice creame will actually be delivered/i))
  expect(nullPopover).not.toBeInTheDocument()

})