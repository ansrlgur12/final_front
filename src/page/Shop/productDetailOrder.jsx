
import React, {useState,useContext} from "react";
import OrderFormFooter from "./productFormFooter";
import OrderFormHeader from "./orderFormHeader";
import styled from "styled-components";
import OrderInfo from "./orderInfo";
import { Button } from "@mui/material-next";
import { AddShoppingCart, DoneOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import QuantityInput from "./quantityInput";
import { CartContext } from "../../context/CartContext";
import Modal from "../../Commons/Modal";





const ProductDetailOrder=({product})=> {
    const [quantity, setQuantity] = useState(1);
  const nav = useNavigate();
  const {addToCart} = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
    {/* onClick={()=> { addToCart(product, quantity);nav("/cart");} */}
   
    <Container>
      <OrderFormHeader product={product}/>
      <QuantityInput quantity={quantity} setQuantity={setQuantity}/>
      <OrderFormFooter />
      <OrderInfo  quantity={quantity} price={product.price}/>
      
     <ButtonWrapper>
        
        <button onClick={openModal}>ADD TO CART</button>
       
        <Modal isOpen={isOpen} onClose={closeModal}>
       
        <p>상품을 카트에 추가하시겠습니까?</p>
         <div className="btnWrapper">
        <button className="modalBtn" onClick={() => {  addToCart(product, quantity); closeModal(); }}>예</button>
        <button className="modalBtn" onClick={() => {  closeModal(); }}>아니오</button>  
         
        </div>
      </Modal>
        <button>BUY NOW</button>    
        </ButtonWrapper>
        
      
    </Container>
   
    </>
  );
}; export default ProductDetailOrder;

const Container = styled.div`
  padding: 32px 24px;
  width: 100%;
  .modalBackground{
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
}
 
/* 모달창 영역을 꾸민다 */
.modalBox{
  position: absolute;
  top: calc(50vh - 100px); left: calc(50vw - 200px);
  background-color: white;
  display: flex; justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  width: 400px;
  height: 200px;
}
 .btnWrapper{
    display: flex;
  gap:4rem;
  .modalBtn{
    width:80px;
  border-radius: 10px;
  color: #fff;
  background-color: #2D6247;
  padding:10px;
  }
 
 }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  button {
    cursor: pointer;
    font-weight: bold;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #ccc;
    border-radius: 10px;
    color:#2D6247; 
    background-color: #fff;
    flex: 1;
    padding: 20px;
    &:hover {
      opacity: 0.7;
    }
  }
`;