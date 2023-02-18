import React from 'react';
import Header from './components/header/Header';

import Home from './pages/Home';
import ProductDetails from './pages/productDetails/ProductDetails';
import Footer from './components/footer/Footer';
import Shipping from './pages/Shipping';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />

        <Route>404 Not Found</Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
