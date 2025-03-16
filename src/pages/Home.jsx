// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

function Home() {
  // Filtrar apenas para mostrar alguns produtos em destaque
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <div>
      <Hero />
      
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Loja Fofa</Link>
          <div>
            <Link to="/cart" className="text-blue-600 font-medium hover:underline">Carrinho</Link>
          </div>
        </div>
      </nav>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nossas Categorias</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/300" alt="Peças de Gesso" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Peças de Gesso</h3>
                <p className="text-gray-600 mb-4">Descubra nossa coleção de peças decorativas em gesso de alta qualidade.</p>
                <Link to="/produtos?categoria=gesso" className="text-blue-600 font-medium hover:underline">Ver produtos</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/300" alt="Peças de Jesmonite" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jesmonite Premium</h3>
                <p className="text-gray-600 mb-4">Peças exclusivas em jesmonite para decoração sofisticada.</p>
                <Link to="/produtos?categoria=jesmonite" className="text-blue-600 font-medium hover:underline">Ver produtos</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/300" alt="Kits e Materiais" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kits e Materiais</h3>
                <p className="text-gray-600 mb-4">Tudo que você precisa para criar suas próprias peças.</p>
                <Link to="/produtos?categoria=materiais" className="text-blue-600 font-medium hover:underline">Ver produtos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Produtos em Destaque</h2>
            <Link to="/produtos" className="text-blue-600 font-medium hover:underline">Ver todos</Link>
          </div>
          
          <ProductList products={featuredProducts} />
        </div>
      </section>
      
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Receba nossas novidades</h2>
          <p className="mb-8 max-w-2xl mx-auto">Inscreva-se para receber em primeira mão nossas ofertas e lançamentos de peças exclusivas.</p>
          
          <form className="flex flex-col md:flex-row justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="px-4 py-3 mb-2 md:mb-0 md:mr-2 rounded-md text-gray-800 w-full"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
            >
              Inscrever
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;