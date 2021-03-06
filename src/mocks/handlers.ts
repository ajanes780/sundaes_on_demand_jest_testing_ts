import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/cocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanila.png' },
      ])
    );
  }),

  rest.get('http://localhost:3000/toppings', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Cherries', imagePath: '/images/cherries.png' },
        { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
        { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
      ])
    );
  }),
];
