import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import QuantityInput from "./quantityInput";
import { faWonSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
  padding: 16px 0;
`;

const ItemProfile = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg {
    fill: #656565;
  }

  a {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 24px;
  }

  
`;

const ImageWrapper = styled.div`
  img {
    border-radius: 10px;
    width: 126px;
    height: 126px;
    object-fit: cover;
  }
`;

const ItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #525252;
  gap: 4px;



  span {
    font-weight: 600;
    &:nth-child(2) {
      font-weight: normal;
      font-size: 14px;
      color: #707070;
    }
  }
`;

const ItemOptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const OptionWrapper = styled.div`
  display: flex;
  max-width: 180px;
  gap: 1rem;
  justify-content: space-between;
  border-bottom: ${(props) => props.border === "bottom" && "1px solid #d4d4d4"};

  padding: ${(props) =>
    props.border === "bottom" ? "0 0 1rem 0" : "1rem 0 0 0"};
  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;

    span {
      font-size: 15px;
      font-weight: 600;
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 1rem;
    svg {
      fill: #656565;
    }
  }

`;

const TotalPrice = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 700;
  justify-content: space-between;

  svg {
    fill: #656565;
    margin-bottom: -2px;
  }


`;

const ShopCart = () => {


  return (
    <>
    <Container>
      <ItemProfile>
       
          <ImageWrapper>
            <span>이미지</span>
          </ImageWrapper>
          <ItemTextWrapper>
            <span>d</span>
            <span>d</span>
          </ItemTextWrapper>
       
      </ItemProfile>
      <ItemOptions>
        <OptionWrapper>
          <div>
            <span>d</span>
            <QuantityInput/>
          </div>
          <span>
          <FontAwesomeIcon icon={faWonSign}/>
           
          </span>
        </OptionWrapper>
      </ItemOptions>
      <TotalPrice>
        <div>
        <FontAwesomeIcon icon={faWonSign}/>
        
        </div>
     <button>삭제</button>
      </TotalPrice>
    </Container>
    </>
  );
}; export default ShopCart;
