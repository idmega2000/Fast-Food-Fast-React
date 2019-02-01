import { combineReducers } from 'redux';
import signUpReducer from './authReducers/signUp/signUpReducer';
import loginReducer from './authReducers/login/loginReducer';
import viewMenuReducer from './viewMenu/viewMenu';

const allReducers = combineReducers({
  signUpReducer,
  loginReducer,
  viewMenuReducer,
});

export default allReducers;
