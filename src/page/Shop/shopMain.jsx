import ShopCategory from "./shoppingMenu";
import SliderContainer from "./shoppingSlide";
import { GridStlye } from "./shoppingMenu";
import Header from "../../main/header";
import { useState } from "react";



const ShopMain = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  

    return(
        <>
        <Header/>
       
        <GridStlye>
       
        <ShopCategory onCategoryChange={handleCategoryChange}/>
        <SliderContainer selectedCategory={selectedCategory}/>
     
        </GridStlye>
       
        </>
    );
 

}; export default ShopMain;