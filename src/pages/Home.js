import React, { useEffect } from 'react';
import { fetchProducts } from '../apis/apis';
import Cards from '../components/card/Cards';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/actions';
import Sliders from '../components/slider/Sliders.jsx';
import Categories from '../components/categories/Categories';
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(dispatch, setProducts);
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
