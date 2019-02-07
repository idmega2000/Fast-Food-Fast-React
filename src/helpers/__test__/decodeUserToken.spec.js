/* eslint-disable max-len */
import decodeUserToken from '../decodeUserToken';


describe('## VerifyUser', () => {
  it('should decode Token', () => {
    expect(decodeUserToken()).toEqual(null);
  });
});
