import React, { createContext, useState,useContext } from 'react';
export const CartContext = createContext();
 const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => [...prevCart, { product, quantity }]);
  };
  
  const setQuantity = (productId, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };
  const removeFromCart = (productId) => {
    setCart(prevCart => 
      prevCart.filter(item => item.product.id !== productId) // 주어진 상품 ID와 일치하지 않는 상품들만을 남김
    );
  };
  return (
    <CartContext.Provider value={{ cart, addToCart,setQuantity,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );  
};
export const useCart = () => useContext(CartContext);
export default CartProvider;