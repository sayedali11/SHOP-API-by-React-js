const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PRODUCTS':
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_PRODUCT':
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedReducer = (
  state = { selected: 'all' },
  { type, payload }
) => {
  switch (type) {
    case 'SELECTED_CATEGORY':
      return { ...state, selected: payload };
    default:
      return state;
  }
};

const cart = [];

export const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case 'ADDITEM':
      // Check if product is Already Exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case 'DELITEM':
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    case 'DELETE_FROM_CART':
      const products = action.payload;
      const newState = state.filter((item) => item.id !== products.id);
      return newState;

    case 'DEFAULT_CART':
      return [];
    default:
      return state;
  }
};
