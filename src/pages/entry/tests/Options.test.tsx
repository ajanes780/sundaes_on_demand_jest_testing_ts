import { render, screen } from '@testing-library/react';

import Options from '../Options';
//

test('displays images for each scoop option from server', () => {
  render(<Options optionsType='scoops' />);

  // note on regx the $ means end of the string and i means case in senstive
  //find all images
  const scoopImages = screen.getAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //   confirm alt images of text
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
