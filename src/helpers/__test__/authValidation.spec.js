import faker from 'faker';
import authValidations from '../authValidation';

describe('### authSignup Auth Validation', () => {
  it('returns Name is Required', () => {
    const fakeUser = {
      password: faker.internet.password,
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('Name is Required');
  });

  it('returns Email is Required', () => {
    const fakeUser = {
      userName: faker.internet.userName,
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('Email is Required');
  });

  it('returns Email is Required', () => {
    const fakeUser = {
      userName: faker.internet.userName,
      userEmail: faker.internet.email,
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('Password is Required');
  });

  it('returns Email is Required', () => {
    const fakeUser = {
      userName: faker.internet.userName,
      userEmail: 'hkjhkdjhndkndkjdn',
      userPassword: 'hkf',
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('Please Enter a valid Email');
  });
  it('returns Email is Required', () => {
    const fakeUser = {
      userName: 'sholalla',
      userEmail: faker.internet.email(),
      userPassword: 'hkf',
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('Password can only be six character and above');
  });
  it('returns Email is Required', () => {
    const fakeUser = {
      userName: 'hhkdhdjhd',
      userEmail: faker.internet.email(),
      userPassword: 'h  jlkjkjkf',
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('Password can only be alphabets and numbers');
  });
  it('returns Email is Required', () => {
    const fakeUser = {
      userName: 'kjhjk  hjh%',
      userEmail: faker.internet.email(),
      userPassword: faker.internet.password(),
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('name can only be alphabets and numbers');
  });
  it('returns Email is Required', () => {
    const fakeUser = {
      userName: 'kjhjkhjhgjhdgjbsjdbusbjdbsjbdjbdjbdjbdjdnbdnbd',
      userEmail: faker.internet.email(),
      userPassword: 'hfkjhfjkfhf',
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('name should be less than 20 char');
  });

  it('returns Email is Required', () => {
    const fakeUser = {
      userName: 'jjajsjsjsj',
      userEmail: faker.internet.email(),
      userPassword: 'kjhjkhjhgjhdgjbsjdbusbjdbsjbdjbdjbdjbdjdnbdnbdhjhkhkhjkjhjh',
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('Password must be less than 40 char');
  });
  it('returns Email is Required', () => {
    const fakeUser = {
      userName: 'jjajsjsjsj',
      userEmail: faker.internet.email(),
      userPassword: 'kjhjkhjhg',
      confirmPassword: 'kjhjkhj',
    };
    const error = authValidations.authSignup(fakeUser);
    expect(error).toEqual('Password must match with repeat password');
  });
});

describe('### authSignup Auth Validation', () => {
  it('returns Email is Required', () => {
    const fakeUser = {
      userName: faker.internet.userName,
    };
    const error = authValidations.authLogin(fakeUser);
    expect(error).toEqual('Email is Required');
  });

  it('returns Email is Required', () => {
    const fakeUser = {
      userName: faker.internet.userName,
      userEmail: faker.internet.email,
    };
    const error = authValidations.authLogin(fakeUser);
    expect(error).toEqual('Password is Required');
  });

  it('returns Email is Required', () => {
    const fakeUser = {
      userName: faker.internet.userName,
      userEmail: 'hkjhkdjhndkndkjdn',
      userPassword: 'hkf',
    };
    const error = authValidations.authLogin(fakeUser);
    expect(error).toEqual('Please Enter a valid Email');
  });

  it('returns Email is Required', () => {
    const fakeUser = {
      userName: 'jjajsjsjsj',
      userEmail: faker.internet.email(),
      userPassword: 'kjhjkhjhgjhdgjbsjdbusbjdbsjbdjbdjbdjbdjdnbdnbdhjhkhkhjkjhjh',
    };
    const error = authValidations.authLogin(fakeUser);
    expect(error).toEqual('Password must be less than 40 char');
  });
});
