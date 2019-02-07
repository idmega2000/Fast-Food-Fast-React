

const emailReg = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const alphaOnly = (/^[a-zA-Z0-9]*$/);
const alphaWithSpace = (/^[a-zA-Z0-9 ]*$/);
/**
 * @class  authValidation
 * @description - SignUp display component
 */
class authValidation {
  /**
   * This function validate the user input and register the user
   * @param {object} user - the login data object
   * @returns {object} Returns error or the signup credentials.
   */
  static authSignup(user) {
    const {
      userEmail, userName, userPassword, confirmPassword,
    } = user;
    if (!userName) {
      return 'Name is Required';
    }
    if (!userEmail) {
      return 'Email is Required';
    }
    if (!userPassword) {
      return 'Password is Required';
    }
    if (!String(userEmail).match(emailReg)) {
      return 'Please Enter a valid Email';
    }
    if (!String(userName).match(alphaWithSpace)) {
      return 'name can only be alphabets and numbers';
    }
    if (userPassword.length < 6) {
      return 'Password can only be six character and above';
    }
    if (!String(userPassword).match(alphaOnly)) {
      return 'Password can only be alphabets and numbers';
    }
    if (userName.length >= 20) {
      return 'name should be less than 20 char';
    }
    if (userPassword.length > 40) {
      return 'Password must be less than 40 char';
    }
    if (userPassword !== confirmPassword) {
      return 'Password must match with repeat password';
    }
  }

  /**
     * This function validate the user and login the user.
     * @param {object} user - the login data object
     * @returns {object} Returns error or the login credentials.
     */
  static authLogin(user) {
    const {
      userEmail, userPassword,
    } = user;
    if (!userEmail) {
      return 'Email is Required';
    }
    if (!userPassword) {
      return 'Password is Required';
    }
    if (!String(userEmail).match(emailReg)) {
      return 'Please Enter a valid Email';
    }
    if (userPassword.length > 40) {
      return 'Password must be less than 40 char';
    }
  }
}

export default authValidation;
