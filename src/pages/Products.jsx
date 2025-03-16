// src/pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import { products } from '../data/products';

function Products() {
  const location = useLocation();
  const [queryParams, setQueryParams] = useState(new URLSearchParams(location.search));
  const categoryParam = queryParams.get('categoria');
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'todos');
  const [sortBy, setSortBy] = useState('relevancia');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Atualizar queryParams quando location.search mudar
  useEffect(() => {
    setQueryParams(new URLSearchParams(location.search));
  }, [location.search]);
  
  // Obter categorias únicas dos produtos
  const categories = ['todos', ...new Set(products.map(product => product.category))];
  
  // Filtrar e ordenar produtos
  useEffect(() => {
    let result = [...products];
    
    // Filtrar por categoria se não for 'todos'
    if (selectedCategory !== 'todos') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filtrar por termo de pesquisa
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    // Ordenar produtos
    switch (sortBy) {
      case 'precoAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'precoDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'nomeAsc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nomeDesc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default: // relevancia (featured first)
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortBy, searchTerm]);
  
  // Atualizar URL quando a categoria mudar
  useEffect(() => {
    const newQueryParams = new URLSearchParams(location.search);
    
    if (selectedCategory === 'todos') {
      newQueryParams.delete('categoria');
    } else {
      newQueryParams.set('categoria', selectedCategory);
    }
    
    const newSearch = newQueryParams.toString();
    const newUrl = newSearch ? `${location.pathname}?${newSearch}` : location.pathname;
    
    window.history.replaceState({}, '', newUrl);
  }, [selectedCategory, location.pathname, location.search]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nossos Produtos</h1>
      
      {/* Barra de pesquisa */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-grow">
            <div className="relative">
              <input 
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          
          {/* Ordenação */}
          <div className="md:w-64">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="relevancia">Ordenar por: Relevância</option>
              <option value="precoAsc">Preço: Menor para Maior</option>
              <option value="precoDesc">Preço: Maior para Menor</option>
              <option value="nomeAsc">Nome: A-Z</option>
              <option value="nomeDesc">Nome: Z-A</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar com filtros */}
        <div className="lg:col-span-1">
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        
        {/* Lista de produtos */}
        <div className="lg:col-span-3">
          <p className="mb-4 text-gray-600">
            {filteredProducts.length} produtos encontrados
          </p>
          
          <ProductList products={filteredProducts} />
          
          {filteredProducts.length === 0 && (
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <svg 
                className="mx-auto mb-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-600">
                Tente ajustar seus filtros ou pesquisar por outros termos.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;