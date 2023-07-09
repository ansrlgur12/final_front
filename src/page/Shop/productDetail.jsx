
import React, {useState,useEffect} from "react";
import styled from "styled-components";
import ProductDetailOrder from "./productDetailOrder";
import Header from "../../main/header";
import { GridStlye } from "./shoppingMenu";
import {useParams} from "react-router-dom";
import AxiosApi from "../../API/TestAxios";


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
    border: 2px solid #ccc;
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
    const {id} = useParams();
    const [product,setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await AxiosApi.productDetail(id); // productId를 이용해 상품 정보를 가져옵니다.
            if (response.status === 200) {
              setProduct(response.data); // 가져온 상품 정보를 product 상태에 저장합니다.
            }
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchProduct();
      }, [id]);
  return (
    <>
    <Header/>
    <GridStlye>
    <Container>
      <OrderWrapper>
        <ImageWrapper>
        {product &&  <img src={product.imageUrl} alt="img" />}
        </ImageWrapper>
        {product && <ProductDetailOrder product={product} />}
      </OrderWrapper>
     
    </Container>
    </GridStlye>
    </>
  );
}; export default ProductDetailForm;

