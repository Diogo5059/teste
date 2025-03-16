// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="navbar">
      {/* Botão menu mobile */}
      <button 
        className="menu-button" 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </button>
      
      {/* Links desktop */}
      <div className="desktop-links">
        <NavLink to="/" className={({isActive}) => isActive ? "active-link" : "link"}>
          Início
        </NavLink>
        <NavLink to="/produtos" className={({isActive}) => isActive ? "active-link" : "link"}>
          Produtos
        </NavLink>
        <NavLink to="/sobre" className={({isActive}) => isActive ? "active-link" : "link"}>
          Sobre
        </NavLink>
        <NavLink to="/contato" className={({isActive}) => isActive ? "active-link" : "link"}>
          Contato
        </NavLink>
      </div>
      
      {/* Menu Mobile */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-links">
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : "link"} onClick={toggleMenu}>
              Início
            </NavLink>
            <NavLink to="/produtos" className={({isActive}) => isActive ? "active-link" : "link"} onClick={toggleMenu}>
              Produtos
            </NavLink>
            <NavLink to="/sobre" className={({isActive}) => isActive ? "active-link" : "link"} onClick={toggleMenu}>
              Sobre
            </NavLink>
            <NavLink to="/contato" className={({isActive}) => isActive ? "active-link" : "link"} onClick={toggleMenu}>
              Contato
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;