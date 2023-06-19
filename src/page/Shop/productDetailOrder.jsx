
import React from "react";
import OrderFormBody from "./orderFormBody";
import OrderFormFooter from "./productFormFooter";
import OrderFormHeader from "./orderFormHeader";
import styled from "styled-components";
import OrderInfo from "./orderInfo";
import { Button } from "@mui/material-next";
import { AddShoppingCart, DoneOutline } from "@mui/icons-material";





const ProductDetailOrder=()=> {
 
  return (
    <>
    
   
    <Container>
      <OrderFormHeader/>
      <OrderFormBody/>
      <OrderFormFooter />
      <OrderInfo  />
      <ButtonWrapper>
        <Button sx={{color:'green'}} size="large"
          variant="elevated" startIcon={<AddShoppingCart color="success"/>}>
          ADD TO CART
        </Button>
        <Button endIcon={<DoneOutline color="success"/>} sx={{color:'green'}}  size="large"
          variant="elevated">
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