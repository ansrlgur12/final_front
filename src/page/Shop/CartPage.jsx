/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShopCart from "./cart";
import { GridStlye } from "./shoppingMenu";




const CartForm=()=> {


  return (
    <GridStlye>
    <Container>
      <FormHeader>
        <MenuBox>PRODUCT NAME</MenuBox>
        <MenuBox>OPTION</MenuBox>
        <MenuBox>TOTAL</MenuBox>
      </FormHeader>
      <FormBody>
       
              <ShopCart/>
       
      </FormBody>
      <FormFooter>
        <SubTotal>
          <span>총가격</span>
      
            
           <span>가격</span>
          
        </SubTotal>
      </FormFooter>
      <button>
        ORDER NOW
        </button>
      
    </Container>
    </GridStlye>
  );
}; export default CartForm;

const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-top: 64px;
`;

const FormHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d4d4d4;
  font-size: 14px;
`;

const MenuBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 600;

  &:nth-child(1) {
    flex: 2;
  }

  &:last-child {
    flex: 0.8;
  }
`;

const FormBody = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const FormFooter = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 40px;

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const SubTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    font-weight: 600;
    color: #525252;

    &:last-child {
      font-size: 20px;
      font-weight: 600;
    }

    svg {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
  }
`;