import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('displays images for each scoop option from server', async () => {
  render(<Options optionsType='scoops' />);
  // note on regx the $ means end of the string and i means case in senstive
  //find all images

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //   confirm alt images of text

  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Display images and topping options from the server', async () => {
  render(<Options optionsType='toppings' />);
  const toppingImages = await screen.findAllByRole('img', { name: /topping$/i });
  expect(toppingImages).toHaveLength(3);

  // @ts-ignore
  const altText = toppingImages.map((element) => element.alt);
  expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
});
