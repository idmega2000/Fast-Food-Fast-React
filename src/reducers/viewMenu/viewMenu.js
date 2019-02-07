import * as actionTypes from '../../actions/ViewMenu/actionTypes';
import updateObject from '../../helpers/store/utility';

const initState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
  cartOrderQuantity: null,
  placeLoading: null,
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

const postMenuStart = state => updateObject(state,
  { placeLoading: true, error: false });

const postMenuFail = (state, action) => updateObject(state, {
  placeLoading: false,
  error: true,
  response: action.payload,
});

const postMenuSuccess = (state, action) => updateObject(state, {
  placeLoading: false,
  success: true,
  response: action.payload,
});

const updateCartIcon = (state, action) => updateObject(state, {
  cartOrderQuantity: action.payload,
});


const viewMenuReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_MENU_START:
      return viewMenuStart(state, action);
    case actionTypes.VIEW_MENU_FAIL:
      return viewMenuFail(state, action);
    case actionTypes.VIEW_MENU_SUCCESS:
      return viewMenuSuccess(state, action);
    case actionTypes.UPDATE_CART_ICON:
      return updateCartIcon(state, action);
    case actionTypes.POST_MENU_START:
      return postMenuStart(state, action);
    case actionTypes.POST_MENU_FAIL:
      return postMenuFail(state, action);
    case actionTypes.POST_MENU_SUCCESS:
      return postMenuSuccess(state, action);
    default: return state;
  }
};

export default viewMenuReducer;
