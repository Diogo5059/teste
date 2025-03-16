// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <Link to={`/produto/${product.id}`}>
        <img 
          src={product.image || "/api/placeholder/300/300"} 
          alt={product.name}
          className="w-full h-64 object-cover" 
        />
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">
              R$ {product.price.toFixed(2)}
            </span>
            
            <button 
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700"
            >
              Adicionar
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;