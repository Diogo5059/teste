// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Decoração de Ambientes com Arte em Gesso
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Peças únicas, feitas à mão com materiais de alta qualidade para transformar seu espaço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/produtos" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 text-center">
                Ver Produtos
              </Link>
              <Link to="/contato" className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 text-center">
                Fale Conosco
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <img src="/api/placeholder/300/400" alt="Peça decorativa em gesso" className="rounded-lg h-full object-cover" />
              <div className="grid grid-rows-2 gap-4">
                <img src="/api/placeholder/300/200" alt="Decoração em jesmonite" className="rounded-lg object-cover" />
                <img src="/api/placeholder/300/200" alt="Escultura em gesso" className="rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;