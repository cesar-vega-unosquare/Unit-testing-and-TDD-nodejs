export const Checkout = () => {
  const prices = {};
  let total = 0;
  const discounts = {};
  const methods = {
    addItemPrice: (item, price) => {
      prices[item] = price;
      console.log(prices);
    },
    addItem: (item) => {
      total += prices[item];
    },
    calculateTotal: () => {
      return total;
    },
    addDiscount: (item, itemCount, discountPrice) => {
      discounts[item] = { conut: itemCount, price: discountPrice };
    },
  };

  return methods;
};
