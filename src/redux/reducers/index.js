import { combineReducers } from 'redux';
import {
  productsReducer,
  selectedReducer,
  productReducer,
  handleCart,
} from './productsReducer';

const reducers = combineReducers({
  carts: handleCart,
  products: productsReducer,
  product: productReducer,
  selected: selectedReducer,
});

export default reducers;
