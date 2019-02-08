import { combineReducers } from 'redux';
import signUpReducer from './auth/signUp/signUpReducer';
import loginReducer from './auth/login/loginReducer';
import menuReducer from './menu/menuReducer';

const allReducers = combineReducers({
  signUpReducer,
  loginReducer,
  menuReducer,
});

export default allReducers;
