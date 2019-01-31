import { combineReducers } from 'redux';
import signUpReducer from './authReducers/signUp/signUpReducer';
import loginReducer from './authReducers/login/loginReducer';

const allReducers = combineReducers({
  signUpReducer,
  loginReducer,
});

export default allReducers;
