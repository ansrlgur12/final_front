import styled from "@emotion/styled";
import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MarkerContext } from "../../context/MarkerInfo";

const DetailContainer = styled.div`
    position: fixed;
    z-index: 3;
    right: 1.5vw;
    bottom: 6vh;
.container{
    width: 30vw;
    height: 76vh;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
}
.closeBtn{
    border-radius: 50px;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 35vh;
    right: 31vw;
    border: 0px;
    background-color: rgba(146, 159, 139,0.8);
    color: white;
}
.closeBtn:hover{
    background-color: rgba(45, 98, 71, 0.8);
    font-size: 1em;
    font-weight: bold;
}

    
    
`;
const TitleBar = styled.div`
    background-color: rgba(45, 98, 71, 0.8);
    height: 9%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

const DetailPage = () => {

    const context = useContext(MarkerContext);
    const {closeMenu, setCloseMenu} = context;


    const hideMenuBar = () => {
        setCloseMenu(!closeMenu);
        console.log(closeMenu + "현재상태")
    }

    return(
        <DetailContainer>
            <div className={`container ${closeMenu ? "slideIn" : "slideOut"}`}>
                <TitleBar></TitleBar>
                <button className={closeMenu ? "closeBtn" : ""}onClick={hideMenuBar}>숨기기</button>
            </div>
        </DetailContainer>
    )
}
export default DetailPage;