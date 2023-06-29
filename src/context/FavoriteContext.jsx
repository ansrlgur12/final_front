import React, { createContext, useState,useContext } from 'react';
export const FavoriteContext = createContext();
 const FavoriteProvider = ({ children }) => {
  const [favorite,setFavorite] = useState([]);

  const addToFavorite = (product) => {
    // 이미 favorite에 해당 상품이 있는지 확인
  const existingProduct = favorite.find(item => item.product.id === product.id);

  // 이미 favorite에 해당 상품이 있다면 아무 작업도 하지 않음
  if (existingProduct) {
    return true;
  }

  // favorite에 해당 상품이 없다면 추가
  setFavorite([...favorite, { product }]);
  return false;
  };
  
 
  const removeFromFavorite = (productId) => {
    setFavorite(prevFavorite => 
      prevFavorite.filter(item => item.product.id !== productId) // 주어진 상품 ID와 일치하지 않는 상품들만을 남김
    );
  };
  return (
    <FavoriteContext.Provider value={{ favorite, addToFavorite,removeFromFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );  
};
export const useFavorite = () => useContext(FavoriteContext);
export default FavoriteProvider;