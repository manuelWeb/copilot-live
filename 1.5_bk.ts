import { PriceItem } from "./1.5.2_price.type";

const formatPrice = (prices: PriceItem[]) => {
  return prices.map(price => {
    if (price.type === 'Single') {
      return {
        ...price,
        amount: price.amount * price.time
      }
    }
    return price;
  })
}

console.log(
  formatPrice([
    { id: '1', amount: 10, type: 'Single', time: 2 },
    { id: '2', amount: 20, type: 'Multiple', time: 2 }
  ])
);