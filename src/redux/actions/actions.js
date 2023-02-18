export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

export const setProduct = (product) => {
  return {
    type: 'SET_PRODUCT',
    payload: product,
  };
};

export const setSelectedCategory = (selected) => {
  return {
    type: 'SELECTED_CATEGORY',
    payload: selected,
  };
};

export const addToCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

export const decreaseItemCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: { id },
  };
};

export const defaultCart = () => {
  return {
    type: 'DEFAULT_CART',
  };
};
