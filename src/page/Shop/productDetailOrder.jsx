
import React, {useState} from "react";
import OrderFormFooter from "./productFormFooter";
import OrderFormHeader from "./orderFormHeader";
import styled from "styled-components";
import OrderInfo from "./orderInfo";
import { Button } from "@mui/material-next";
import { AddShoppingCart, DoneOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import QuantityInput from "./quantityInput";





const ProductDetailOrder=({product})=> {
    const [quantity, setQuantity] = useState(0);
  const nav = useNavigate();
  return (
    <>
    
   
    <Container>
      <OrderFormHeader product={product}/>
      <QuantityInput quantity={quantity} setQuantity={setQuantity}/>
      <OrderFormFooter />
      <OrderInfo  quantity={quantity} price={product.price}/>
      
     <ButtonWrapper>
        
        <Button sx={{color:'green'}} size="large" onClick={()=>nav("/shopCart")}
          variant="elevated" startIcon={<AddShoppingCart color="success"/>}>
          ADD TO CART
        </Button>
     
        <Button onClick={()=>nav("/")} endIcon={<DoneOutline color="success" onClick={()=>nav("/inicis")}/>} sx={{color:'green'}}  size="large"
          variant="elevated" >
          BUY NOW
        </Button>
    
        </ButtonWrapper>
        
      
    </Container>
   
    </>
  );
}; export default ProductDetailOrder;

const Container = styled.div`
  padding: 32px 24px;
  width: 100%;

 
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  button {
    border-radius: 10px;
    
    flex: 1;
    padding: 20px;
    &:hover {
      opacity: 0.7;
    }
  }
`;