import React, { useState } from 'react';
import styled from 'styled-components';

const QuantityInputWrapper = styled.div`
  display: flex;
  
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  background:  #2D6247;
  color: #fff;
  border: none;
 width: 40px;
  cursor: pointer;
  font-size: 26px;
  font-weight: bold;

`;

const Input = styled.input`
border: none;
  width: 80px;
  text-align: center;
  font-size: 18px;
`;

const QuantityInput = ({ quantity, setQuantity }) => {

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <QuantityInputWrapper>
      <Button onClick={handleDecrease}>-</Button>
      <Input type="number" value={quantity} readOnly />
      <Button onClick={handleIncrease}>+</Button>
    </QuantityInputWrapper>
  );
};

export default QuantityInput;
