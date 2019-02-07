import getTotalQuantity from '../getTotalQuantity';

describe('### get Total Quantity Test', () => {
  const menu = [{ quantity: 1 }, { quantity: 2 }];
  it('Should get the total quantity in the menu array of object', () => {
    expect(getTotalQuantity(menu)).toEqual(3);
  });
});
