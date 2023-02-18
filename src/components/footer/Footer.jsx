import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return <footer>&copy; {year} - All Rights Reserved by Sayed Ali</footer>;
};

export default Footer;
