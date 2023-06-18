/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { faWonSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderInfo =()=> {
  return (
    <Container>
      <div>
        <InfoTag>OPTIONS</InfoTag>
        <span>사이즈</span>
      </div>
      <div>
        <InfoTag>TOTAL PRICE</InfoTag>
        <TotalPriceWrapper>
          <FontAwesomeIcon icon={faWonSign}/>
          <span>가격</span>
        </TotalPriceWrapper>
      </div>
    </Container>
  );
}; export default OrderInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  padding: 1rem 0;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 1rem;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    span {
      &:nth-child(2) {
        font-weight: 600;
        font-size: 20px;
      }
    }
  }
`;

const InfoTag = styled.span`
  font-size: 1rem;
  color: #878787;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;