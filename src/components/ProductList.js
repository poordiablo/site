import React from 'react';
import Product from './product';
import putinImage from '../assets/images/putin.jpg';
import rickoImage from '../assets/images/ricko.webp';
import cheetosImage from '../assets/images/cheetos.jpg';

const products = [
  { id: 1, name: 'T-shirt PUTINTeam', description: 'T-shirt from Putin', price: 29.99, image: putinImage },
  { id: 2, name: 'Rick Owens Horse Feet 2', description: 'Дизайнерские повседневные кроссовки Rick Owens Horse Feet 2', price: 259.99, image: rickoImage },
  { id: 3, name: 'T-shirt Cheetos', description: 'Keasmto крутые футболки с 3D принтом и графическим дизайном, повседневные летние модные футболки с короткими рукавами для мужчин и женщин', price: 19.99, image: cheetosImage },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
