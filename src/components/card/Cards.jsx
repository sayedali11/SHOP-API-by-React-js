import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import './cards.css';

const Cards = () => {
  const products = useSelector((state) => state.products.products);
  const category = useSelector((state) => state.selected.selected);

  const displayProducts = () => {
    const display = products.map((product) => (
      <Card key={product.id} product={product} />
    ));
    return display;
  };

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
  return (
    <div className="cards text-center">
      <h2 className="uppercase mt-5 mb-5 text-center text-bg-warning text-capitalize">
        {category === 'all' ? 'All Products' : category}{' '}
      </h2>
      {
        <div className="cards-content  grid-small">
          {products.length !== 0 && displayProducts()}
        </div>
      }
      {products.length === 0 && <Loading />}
    </div>
  );
};

export default Cards;
