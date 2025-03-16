// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('cart', []);
  const [cartTotal, setCartTotal] = useState(0);
  
  // Calcular o total sempre que os itens do carrinho mudam
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity, 
      0
    );
    setCartTotal(total);
  }, [cartItems]);
  
  // Adicionar ao carrinho
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Verificar se o produto já está no carrinho
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id
      );
      
      if (existingItemIndex >= 0) {
        // Se o produto já existe, aumentar a quantidade
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // Se o produto não existe, adicionar com quantidade 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  
  // Remover do carrinho
  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };
  
  // Atualizar quantidade
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };
  
  // Limpar carrinho
  const clearCart = () => {
    setCartItems([]);
  };
  
  const value = {
    cartItems,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}