
import React from "react";
import styled from "styled-components";
import ProductDetailOrder from "./productDetailOrder";
import Header from "../../main/header";
import { GridStlye } from "./shoppingMenu";


const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 80px;


`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 620px;

  img {
    width: 100%;
    max-width: 620px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const OrderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 80px;

  
`;


const ProductDetailForm =() => {
  return (
    <>
    <Header/>
    <GridStlye>
    <Container>
      <OrderWrapper>
        <ImageWrapper>
          <img src="https://source.unsplash.com/1024x768/?nature" alt="img" />
        </ImageWrapper>
        <ProductDetailOrder />
      </OrderWrapper>
     
    </Container>
    </GridStlye>
    </>
  );
}; export default ProductDetailForm;

