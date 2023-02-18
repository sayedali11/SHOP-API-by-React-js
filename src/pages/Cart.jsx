import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  decreaseItemCart,
  deleteFromCart,
} from '../redux/actions/actions';

const Cart = () => {
  const state = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  const handleDel = (product) => {
    dispatch(decreaseItemCart(product));
  };

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const Subtotal = () => {
    let subtotal = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
    });
    return parseFloat(subtotal).toFixed(2);
  };

  const total = parseFloat(Subtotal()) + 20;

  return (
    <>
      {state.length === 0 ? (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4 text-center">
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      ) : (
        <section className="h-100 h-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100  ">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="mb-3 ">
                          <Link
                            to="/"
                            className="text-body text-decoration-none fs-4 d-flex align-items-center justify-content-start  "
                          >
                            <i className="ri-arrow-left-line  bg-warning text-dark"></i>
                            Continue shopping
                          </Link>
                        </h5>
                        <hr />

                        <div className="d-flex justify-content-center align-items-center mb-4">
                          <div>
                            <p className="mb-1 text-dark fs-3">Shopping cart</p>
                            <p className="mb-0 text-dark d-flex ">
                              You have &nbsp;
                              <p className="bg-warning ">
                                {state.length} &nbsp;
                              </p>
                              &nbsp; items in your cart
                            </p>
                          </div>
                        </div>
                        {state.map((product) => (
                          <div className="card mb-3">
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <Link to={`/products/${product.id}`}>
                                    <img
                                      src={product.image}
                                      className="img-fluid rounded-3"
                                      alt={product.title}
                                      style={{ width: '65px' }}
                                    />
                                  </Link>
                                  <div className="ms-3">
                                    <h5 className="text-dark">
                                      {product.title}
                                    </h5>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center ">
                                  <div
                                    className="text-dark border"
                                    style={{ width: '50px' }}
                                  >
                                    <span
                                      className="increase__btn "
                                      onClick={() => handleAdd(product)}
                                    >
                                      <i className="ri-add-line "></i>
                                    </span>
                                    <span className="quantity">
                                      {product.qty}
                                    </span>
                                    <span
                                      className="decrease__btn"
                                      onClick={() => handleDel(product)}
                                    >
                                      <i className="ri-subtract-line"></i>
                                    </span>
                                  </div>
                                  <div style={{ width: '80px' }}>
                                    <h5 className="mb-0 text-dark">
                                      ${product.price}
                                    </h5>
                                  </div>
                                  <span
                                    onClick={() =>
                                      handleDeleteFromCart(product.id)
                                    }
                                  >
                                    <i class="ri-close-circle-line"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="col-lg-5">
                        <div className="card   rounded-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                              <h5 className="mb-0 m-auto text-dark fs-1">
                                Summary
                              </h5>
                            </div>

                            <div className="d-flex justify-content-between">
                              <p className="mb-2 text-dark ">Subtotal</p>
                              <p className="mb-2 text-dark">${Subtotal()}</p>
                            </div>

                            <div className="d-flex justify-content-between">
                              <p className="mb-2 text-dark">Shipping</p>
                              <p className="mb-2 text-dark">$20.00</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                              <p className="mb-2 text-dark fw-bold">Total</p>
                              <p className="mb-2 text-dark fw-bold">
                                ${total.toFixed(2)}
                              </p>
                            </div>

                            <Link
                              to="/shipping"
                              type="button"
                              className="btn btn-outline-warning "
                            >
                              <div className="d-flex items-align-center text-dark">
                                <span>${total.toFixed(2)} &nbsp;</span>
                                <span className="d-flex items-align-center text-dark">
                                  Checkout &nbsp;
                                  <i className="ri-arrow-right-line bg-warning text-dark"></i>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
