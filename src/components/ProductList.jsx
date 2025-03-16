// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Nenhum produto encontrado.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;