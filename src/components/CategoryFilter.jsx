// src/components/CategoryFilter.jsx
import React from 'react';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  // Função para formatar nome da categoria
  const formatCategoryName = (category) => {
    if (category === 'todos') return 'Todos os Produtos';
    
    // Capitalizar primeira letra
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="font-semibold text-lg mb-4">Categorias</h2>
      
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedCategory === category 
                  ? 'bg-blue-100 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {formatCategoryName(category)}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="border-t border-gray-200 mt-6 pt-6">
        <h3 className="font-semibold mb-3">Filtro de Preço</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">
              Preço Mínimo:
            </label>
            <input
              type="range"
              id="min-price"
              min="0"
              max="200"
              defaultValue="0"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600">R$ 0</span>
          </div>
          
          <div>
            <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">
              Preço Máximo:
            </label>
            <input
              type="range"
              id="max-price"
              min="0"
              max="200"
              defaultValue="200"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600">R$ 200</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;