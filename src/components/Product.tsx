import React from 'react';
import { ProductProps } from '../types';

function Product({ productInfo }: ProductProps) {
  const { title, price, image } = productInfo;
  return (
    <li>
      <div className="product">
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <img src={ image } alt={ title } />
    </li>
  );
}

export default Product;
