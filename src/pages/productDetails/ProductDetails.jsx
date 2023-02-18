import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div
        className="spinner-border text-dark  text-center m-auto"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  };

  const ShowProductDetails = () => {
    return (
      <>
        <div className="col-md-5  ">
          <img
            src={product.image}
            alt={product.title}
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-6 ">
          <h4 className="text-uppercase text-black-100  text-bg-warning w-50 mt-3">
            {product.category}
          </h4>
          <h1 className="fs-2 text-dark">{product.title}</h1>
          <p className="lead  text-dark">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star  text-warning"></i>
          </p>
          <h3 className="display-6 fw-bold my-4 text-dark ">
            $ {product.price}
          </h3>
          <p className="lead ">{product.description}</p>
          <button
            className="btn btn-outline-warning text-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link
            to="/cart"
            className="btn  ms-2 btn-outline-warning text-dark px-3"
          >
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProductDetails />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
