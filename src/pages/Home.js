import React, { useEffect } from 'react';
import Cards from '../components/card/Cards';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/actions';
import Sliders from '../components/slider/Sliders.jsx';
import Categories from '../components/categories/Categories';
import { fetchProduct } from '../data/fetchApi';
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct(dispatch, setProducts);
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <Sliders />
        <Categories />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
