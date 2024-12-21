import React, { useState, useEffect } from 'react';
import { useProduct } from './useProduct';
import Confirmation from './Confirmation';

function Product() {
  const { products, status, error, fetchProducts, incrementStock, decrementStock } = useProduct();
  const [adjustValues, setAdjustValues] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);


  const handleInputChange = (productId, value) => {
    setAdjustValues((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  const handleIncrement = (productId) => {
    const value = adjustValues[productId] || 1;
    incrementStock({ id: productId, value });
    showMessage(`Stock increased by ${value} for product ID: ${productId}`);
  };

  const handleDecrement = (productId) => {
    const value = adjustValues[productId] || 1;
    decrementStock({ id: productId, value });
    showMessage(`Stock decreased by ${value} for product ID: ${productId}`);
  };

  const getInputValue = (productId) => {
    return adjustValues[productId] || '';
  };

  return (
    <>
      <h1>Products</h1>
      
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>quantity: {product.quantity}</p>
            <input
              type="number"
              value={getInputValue(product.id)}
              onChange={(e) => handleInputChange(product.id, parseInt(e.target.value) || 0)}
              placeholder="Enter stock amount"
            />
            <button onClick={() => handleIncrement(product.id)}>
              Increase
            </button>
            <button onClick={() => handleDecrement(product.id)}>
              Decrease Stock
            </button>
          </div>
        ))}
      
    </>
  );
}

export default Confirmation(Product);

