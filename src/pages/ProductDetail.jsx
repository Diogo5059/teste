// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simular carregamento de dados
    setLoading(true);
    
    // Buscar produto pelo ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setLoading(false);
  }, [id]);
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product?.stock || 10)) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      // Adicionar produto ao carrinho com a quantidade selecionada
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 w-64 bg-gray-300 rounded mb-4 mx-auto"></div>
          <div className="h-4 w-32 bg-gray-300 rounded mx-auto"></div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <p className="text-gray-600 mb-8">O produto que você está procurando não está disponível.</p>
        <Link to="/produtos" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
          Ver outros produtos
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-blue-600">Início</Link>
        <span className="mx-2">/</span>
        <Link to="/produtos" className="hover:text-blue-600">Produtos</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Imagem do produto */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={product.image || "/api/placeholder/600/600"} 
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Informações do produto */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              {product.category}
            </span>
            <span className="ml-4 text-gray-600 text-sm">
              {product.stock} unidades em estoque
            </span>
          </div>
          
          <div className="text-2xl font-bold text-gray-900 mb-6">
            R$ {product.price.toFixed(2)}
          </div>
          
          <p className="text-gray-700 mb-8">{product.description}</p>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center mb-6">
              <label htmlFor="quantity" className="mr-4 font-medium">Quantidade:</label>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l"
                >
                  -
                </button>
                <input 
                  type="number" 
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 text-center border-t border-b border-gray-200 py-1"
                  min="1"
                  max={product.stock}
                />
                <button 
                  onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 mb-4"
            >
              Adicionar ao Carrinho
            </button>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Detalhes do produto:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><span className="font-medium">Dimensões:</span> {product.dimensions}</li>
                <li><span className="font-medium">Peso:</span> {product.weight}</li>
                <li><span className="font-medium">Material:</span> {product.category === 'gesso' ? 'Gesso' : 'Jesmonite'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Produtos relacionados */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold mb-6">Produtos relacionados</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(p => (
              <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/produto/${p.id}`}>
                  <img 
                    src={p.image || "/api/placeholder/300/300"} 
                    alt={p.name}
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-gray-900 font-bold mt-2">R$ {p.price.toFixed(2)}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;