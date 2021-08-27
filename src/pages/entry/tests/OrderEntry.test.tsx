import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';

import { rest } from 'msw';
import { server } from '../../../mocks/server';



test.only('Handle error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
    rest.get('http://localhost:3000/toppings', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  render(<OrderEntry />)

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert')
    expect(alerts).toHaveLength(2)
  })
})

test.skip('this is fake test to skip', () => {});
