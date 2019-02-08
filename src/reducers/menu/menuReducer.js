import * as actionTypes from '../../actions/menu/actionTypes';
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

const placeOrderStart = state => updateObject(state,
  { placeLoading: true, error: false });

const placeOrderFail = (state, action) => updateObject(state, {
  placeLoading: false,
  error: true,
  response: action.payload,
});

const placeOrderSuccess = (state, action) => updateObject(state, {
  placeLoading: false,
  success: true,
  response: action.payload,
});

const updateCart = (state, action) => updateObject(state, {
  cartOrderQuantity: action.payload,
});


const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_MENU_START:
      return viewMenuStart(state, action);
    case actionTypes.VIEW_MENU_FAIL:
      return viewMenuFail(state, action);
    case actionTypes.VIEW_MENU_SUCCESS:
      return viewMenuSuccess(state, action);
    case actionTypes.UPDATE_CART:
      return updateCart(state, action);
    case actionTypes.PLACE_ORDER_START:
      return placeOrderStart(state, action);
    case actionTypes.PLACE_ORDER_FAIL:
      return placeOrderFail(state, action);
    case actionTypes.PLACE_ORDER_SUCCESS:
      return placeOrderSuccess(state, action);
    default: return state;
  }
};

export default menuReducer;
