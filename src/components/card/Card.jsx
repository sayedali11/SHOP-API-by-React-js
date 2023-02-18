import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`} className="link ">
        <div className="card shadow-sm  ">
          <div className="card-img">
            <img src={product.image} alt="card" />
          </div>
          <div className="card-body">
            <h5 className="card-title mb-0 text-dark">
              {product.title.substring(0, 12)}...
            </h5>
            <p className="card-text lead fw-bold text-dark">${product.price}</p>
            <div className="btn btn-outline-warning text-dark">Buy Now</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
