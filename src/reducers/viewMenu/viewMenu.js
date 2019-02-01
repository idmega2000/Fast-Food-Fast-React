import * as actionTypes from '../../actions/ViewMenu/actionTypes';
import updateObject from '../../helpers/store/utility';

const initState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
};

const viewMenuStart = state => updateObject(state,
  { isLoading: true, error: false });

const viewMenuFail = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  response: action.payload,
});

const viewMenuSuccess = (state, action) => updateObject(state, {
  isLoading: false,
  success: true,
  response: action.payload,
});


const viewMenuReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_MENU_START:
      return viewMenuStart(state, action);
    case actionTypes.VIEW_MENU_FAIL:
      return viewMenuFail(state, action);
    case actionTypes.VIEW_MENU_SUCCESS:
      return viewMenuSuccess(state, action);
    default: return state;
  }
};

export default viewMenuReducer;
