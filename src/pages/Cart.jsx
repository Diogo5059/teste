// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  
  // Calcular o total da compra
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Verificar se o carrinho está vazio
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="cart-container">
      <h1 className="page-title">Seu Carrinho</h1>
      
      {isCartEmpty ? (
        <div className="empty-cart">
          <p>Seu carrinho está vazio.</p>
          <Link to="/produtos" className="btn btn-primary">Continuar Comprando</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="cart-item">
                    <td>
                      <div className="cart-product-info">
                        <img src={item.image} alt={item.name} className="cart-product-image" />
                        <span className="cart-product-name">{item.name}</span>
                      </div>
                    </td>
                    <td>R$ {item.price.toFixed(2)}</td>
                    <td>
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn" 
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button 
                        className="remove-btn" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">R$ {calculateTotal()}</span>
            </div>
            
            <div className="cart-actions">
              <button className="btn btn-secondary" onClick={clearCart}>
                Limpar Carrinho
              </button>
              <Link to="/produtos" className="btn btn-outline">
                Continuar Comprando
              </Link>
              <button className="btn btn-primary">
                Finalizar Compra
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
