// show  products base on select any category from dropdown
export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};
// show all products
export const setProduct = (product) => {
  return {
    type: 'SET_PRODUCT',
    payload: product,
  };
};
// show the selected product category from dropdown
export const setSelectedCategory = (selected) => {
  return {
    type: 'SELECTED_CATEGORY',
    payload: selected,
  };
};
// add item to cart
export const addToCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};
// decrease item by 1 and delete item from cart
export const decreaseItemCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};
// remove item from cart
export const deleteFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: { id },
  };
};
// default cart to zero
export const defaultCart = () => {
  return {
    type: 'DEFAULT_CART',
  };
};
