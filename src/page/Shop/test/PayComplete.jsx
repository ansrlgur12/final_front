import Header from "../../../main/header";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GridStlye } from "../shoppingMenu";
import Footer from "../../../main/footer";

const PayComplete= () => {
const nav = useNavigate();


    return(
        <>
        <Header/>
        <GridStlye>
        <h1>구매 완료!</h1>
        <button  onClick={()=>nav("/shopMain")}>쇼핑 계속하기</button>
        <button onClick={()=>nav("/orderProduct")}>구매 내역 확인</button>
        <Footer/>
        </GridStlye>
        </>
    );
}; export default PayComplete;