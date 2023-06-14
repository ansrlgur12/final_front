import ShopCategory from "./shoppingMenu";
import SliderContainer from "./shopping";
import { GridStlye } from "./shoppingMenu";
import Header from "../../main/header";



const ShopMain = () => {

    return(
        <>
        <Header/>
        <GridStlye>
        <ShopCategory/>
        <SliderContainer/>
        </GridStlye>
        </>
    );
 

}; export default ShopMain;