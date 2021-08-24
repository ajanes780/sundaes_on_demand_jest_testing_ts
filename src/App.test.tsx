import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';


import App from './App';

test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByRole("heading", {name: "Hello world"});
  expect(linkElement).toBeInTheDocument();
});
