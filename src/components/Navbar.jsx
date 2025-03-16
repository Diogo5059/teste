// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="flex items-center">
      {/* Botão menu mobile */}
      <button 
        className="md:hidden ml-2" 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      
      {/* Links desktop */}
      <div className="hidden md:flex space-x-6">
        <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>
          Início
        </NavLink>
        <NavLink to="/produtos" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>
          Produtos
        </NavLink>
        <NavLink to="/sobre" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>
          Sobre
        </NavLink>
        <NavLink to="/contato" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>
          Contato
        </NavLink>
      </div>
      
      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600"} onClick={toggleMenu}>
              Início
            </NavLink>
            <NavLink to="/produtos" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600"} onClick={toggleMenu}>
              Produtos
            </NavLink>
            <NavLink to="/sobre" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600"} onClick={toggleMenu}>
              Sobre
            </NavLink>
            <NavLink to="/contato" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600"} onClick={toggleMenu}>
              Contato
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;