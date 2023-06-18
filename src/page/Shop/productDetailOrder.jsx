
import React from "react";
import OrderFormBody from "./orderFormBody";
import OrderFormFooter from "./productFormFooter";
import OrderFormHeader from "./orderFormHeader";
import styled from "styled-components";
import OrderInfo from "./orderInfo";





const ProductDetailOrder=()=> {
 
  return (
    <>
    
   
    <Container>
      <OrderFormHeader/>
      <OrderFormBody/>
      <OrderFormFooter />
      <OrderInfo  />
      <ButtonWrapper>
        <button>
          ADD TO CART
        </button>
        <button>
          BUY NOW
        </button>
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