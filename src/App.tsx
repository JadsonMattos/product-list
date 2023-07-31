import React from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
import products from './data';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <ProductsList>
        {products
          .map((product) => <Product key={ product.id } productInfo={ product } />)}
      </ProductsList>
    </div>
  );
}

export default App;
