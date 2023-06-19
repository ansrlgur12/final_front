/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import QuantitySelector from "./quantitySelector";


const OrderFormBody=()=> {
  return (
    <Container>
      <SizeWrapper>
        <span>개수</span>
        <button>1</button>
      </SizeWrapper>
      <SubWrapper>
       
        <div>
          <span>Quantity</span>
          <QuantitySelector/>
        </div>
      </SubWrapper>
    </Container>
  );
}; export default OrderFormBody;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;

  span {
    font-size: 1rem;
    color: #878787;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  /* gap: 160px; */

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 32px;
`;

const ColorBox = styled.div`
  width: 18px;
  height: 18px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border:3px solid #2D7DF4;
  border-radius: none;
  transition: 0.04s;
  background-color:  #fff;
`;

const SizeWrapper = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #d4d4d4;
`;