import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/modal/Modal';

const Shipping = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="container">
        <h1 className="text-dark">Shipping Address</h1>
        <div className="row mx-0 justify-content-center ">
          <div className="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 px-xxl-3 w-75">
            <form
              method="POST"
              className="w-100 rounded-1 p-4 border bg-white "
              action="https://herotofu.com/start"
            >
              <label className="d-block mb-4">
                <span className="form-label d-block ">Your name</span>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="sayed ali"
                />
              </label>

              <label className="d-block mb-4">
                <span className="form-label d-block">Address line 1</span>
                <input
                  name="address1"
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </label>

              <label className="d-block mb-4">
                <span className="form-label d-block">Address line 2</span>
                <input
                  name="address2"
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </label>

              <label className="d-block mb-4">
                <span className="form-label d-block">City</span>
                <input
                  name="city"
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </label>

              <label className="d-block mb-4">
                <span className="form-label d-block">State/Province</span>
                <input
                  name="state"
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </label>

              <label className="d-block mb-4">
                <span className="form-label d-block">Zip/Postal code</span>
                <input
                  name="zip"
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </label>

              <label className="d-block mb-4">
                <span className="form-label d-block">Country</span>
                <input
                  name="country"
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </label>

              <label className="d-block mb-4">
                <span className="form-label d-block">Telephone</span>
                <input
                  name="telephone"
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </label>

              <label className="d-block mb-4">
                <span className="form-label d-block">Delivery information</span>
                <textarea
                  name="message"
                  className="form-control"
                  rows="3"
                  placeholder="floor/door lock code/etc."
                ></textarea>
              </label>

              <div className="mb-3 d-flex justify-content-between">
                <Link
                  to="/cart"
                  type="submit"
                  className="btn btn-outline-warning text-dark px-3 rounded-3"
                >
                  Back to Cart
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-warning text-dark px-3 rounded-3"
                  onClick={() => setShow(true)}
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Ok
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {show && <Modal />}
    </>
  );
};

export default Shipping;
