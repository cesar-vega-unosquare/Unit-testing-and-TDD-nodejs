import { expect } from 'chai';
import { Checkout } from '../components/checkout/Checkout.js';

it('Can add multiple items and get correct total', () => {
  const checkout = Checkout();
  checkout.addItemPrice('a', 1);
  checkout.addItemPrice('b', 2);
  checkout.addItem('a');
  checkout.addItem('b');
  expect(checkout.calculateTotal()).to.equal(3);
});

it('Can add discount rule', () => {
  const checkout = Checkout();
  checkout.addDiscount('a', 3, 2);
});

it('Can apply dsicount rules to the total', () => {
  const checkout = Checkout();
  checkout.addDiscount('a', 3, 2);
  checkout.addItem('a');
  checkout.addItem('a');
  checkout.addItem('a');
  expect(checkout.calculateTotal()).to.equal(2);
});
