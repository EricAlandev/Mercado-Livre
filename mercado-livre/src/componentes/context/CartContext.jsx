import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

//Arquivo feito para as funcionalidades do carrinho 
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Adicionar item no carrinho
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Verifica se o item já está no carrinho (por id)
      const itemExists = prevItems.find((i) => i.id === item.id);
      if (itemExists) {
        // Se quiser atualizar quantidade, poderia fazer aqui
        return prevItems; // não adiciona duplicado
      }
      return [...prevItems, item];
    });
  };

  // Remover item do carrinho pelo id
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Limpar o carrinho inteiro
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
