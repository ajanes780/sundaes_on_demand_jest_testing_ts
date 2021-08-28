//  this interface tells Typescript this objects keys will always be string and values numbers
interface Prices {
  [key: string]: number
}

export const pricePerItem = {
  scoops: 2,
  toppings: 1.5,
} as Prices
