
import placeOrderValidation from '../placeOrderValidation';

describe('### Place order Validation', () => {
  it('returns Name is Required', () => {
    const fakeUser = {
      ordererName: '',
      ordererPhone: '08090909090',
      ordererAddress: '34, fast food road',
    };
    const error = placeOrderValidation(fakeUser);
    expect(error).toEqual('Please Enter a name');
  });

  it('should return Please Enter Phone number', () => {
    const fakeUser = {
      ordererName: 'fast food',
      ordererPhone: '',
      ordererAddress: '34, fast food road',
    };
    const error = placeOrderValidation(fakeUser);
    expect(error).toEqual('Please Enter Phone number');
  });

  it('should return Enter valid Delivery Address', () => {
    const fakeUser = {
      ordererName: 'fast food',
      ordererPhone: '08090909090',
      ordererAddress: '',
    };
    const error = placeOrderValidation(fakeUser);
    expect(error).toEqual('Please Enter Delivery Address');
  });

  it('should return Email is Required', () => {
    const fakeUser = {
      ordererName: 'fast food',
      ordererPhone: '345988979o8987',
      ordererAddress: 'dhjkhdkjhdkhdkdhj',
    };
    const error = placeOrderValidation(fakeUser);
    expect(error).toEqual('Please Enter a valid Phone number');
  });
  it('should return Email is Required', () => {
    const fakeUser = {
      ordererName: 'fast %*^&*&^*&^*&^food',
      ordererPhone: '08090909090',
      ordererAddress: 'dhjkhdkjhdkhdkdhj',
    };
    const error = placeOrderValidation(fakeUser);
    expect(error).toEqual('Please Enter a valid name');
  });
});
