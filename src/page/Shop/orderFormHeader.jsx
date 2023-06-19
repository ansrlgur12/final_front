/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import { faWonSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const  OrderFormHeader =()=> {
  return (
    <Container>
      <TitleBox>
        <h2>타이틀</h2>
        <span>내용</span>
      </TitleBox>
      <PriceBox>
        <FontAwesomeIcon icon={faWonSign}/>
        <span>가격</span>
      </PriceBox>
    </Container>
  );
}; export default OrderFormHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #888;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #525252;
  }

  span {
    color: #707070;
    font-size: 1rem;
  }
`;

const PriceBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: 700;
  }

  svg {
    margin-bottom: 4px;
  }
`;