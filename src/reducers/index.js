import { combineReducers } from 'redux';
import signUpReducer from './authReducers/signUp/signUpReducer';

const allReducers = combineReducers({
  signUpReducer,
});

export default allReducers;
