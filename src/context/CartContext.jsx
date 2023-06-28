import React, { createContext, useState,useContext } from 'react';
export const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (product, quantity) => {
      setCart(prevCart => {
        const existingProductIndex = prevCart.findIndex(item => item.product.id === product.id);
        if (existingProductIndex !== -1) {
          // 상품이 이미 장바구니에 있는 경우, 수량만 증가
          const newCart = [...prevCart];
          newCart[existingProductIndex].quantity += quantity;
          return newCart;
        } else {
          // 상품이 장바구니에 없는 경우, 새 항목 추가
          return [...prevCart, { product, quantity }];
        }
      });
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