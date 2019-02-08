import * as actionTypes from '../../../actions/auth/authTypes/signupActionTypes';
import updateObject from '../../../helpers/store/utility';


const initState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
};

const signUpStart = state => updateObject(state,
  { isLoading: true, error: false });

const signUpFail = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  response: action.payload,
});

const signUpSuccess = (state, action) => updateObject(state, {
  isLoading: false,
  success: true,
  response: action.payload,
});


const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_START:
      return signUpStart(state, action);
    case actionTypes.SIGN_UP_FAIL:
      return signUpFail(state, action);
    case actionTypes.SIGN_UP_SUCCESS:
      return signUpSuccess(state, action);
    default: return state;
  }
};

export default signUpReducer;
