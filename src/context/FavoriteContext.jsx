import React, { createContext, useState,useContext } from 'react';
export const FavoriteContext = createContext();
 const FavoriteProvider = ({ children }) => {
  const [favorite,setFavorite] = useState([]);

  const addToFavorite = (product) => {
    setFavorite(prevFavorite => [...prevFavorite, { product}]);
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