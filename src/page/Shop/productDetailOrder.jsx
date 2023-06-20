
import React from "react";
import OrderFormBody from "./orderFormBody";
import OrderFormFooter from "./productFormFooter";
import OrderFormHeader from "./orderFormHeader";
import styled from "styled-components";
import OrderInfo from "./orderInfo";
import { Button } from "@mui/material-next";
import { AddShoppingCart, DoneOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";





const ProductDetailOrder=()=> {
  const nav = useNavigate();
  return (
    <>
    
   
    <Container>
      <OrderFormHeader/>
      <OrderFormBody/>
      <OrderFormFooter />
      <OrderInfo  />
      
     <ButtonWrapper>
        
        <Button sx={{color:'green'}} size="large" onClick={()=>nav("/")}
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