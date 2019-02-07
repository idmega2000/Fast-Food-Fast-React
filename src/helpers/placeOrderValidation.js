
/**
   * This function validate the place order inputs.
   * @param {object} data - the login data object
   * @returns {object} Returns error
   */
const placeOrderValidation = (data) => {
  const {
    ordererName, ordererPhone, ordererAddress,
  } = data;

  const nigNumber = (/^[0]\d{10}$/);
  const alphnumaOnly = (/^[a-zA-Z0-9 ]*$/);
  if (!ordererName || ordererName.trim() === 0) {
    return 'Please Enter a name';
  }
  if (!ordererPhone || ordererPhone.trim() === 0) {
    return 'Please Enter Phone number';
  }
  if (!ordererAddress || ordererAddress.trim() === 0) {
    return 'Please Enter Delivery Address';
  }
  if (!ordererName.match(alphnumaOnly)) {
    return 'Please Enter a valid name';
  }
  if (!ordererPhone.match(nigNumber)) {
    return 'Please Enter a valid Phone number';
  }
};


export default placeOrderValidation;
