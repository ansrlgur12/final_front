/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import {faMinus,faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuantitySelector =()=> {

  return (
    <Container>
      <button >
        <FontAwesomeIcon icon={faMinus}/>
      </button>
      <span>1</span>
      <button>
      <FontAwesomeIcon icon={faPlus}/>
      </button>
    </Container>
  );
}; export default QuantitySelector;

const Container = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #ececec;
  padding: 4px 8px;
  color: #878787;
  font-size: 14px;

  button {
    border: none;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
`;