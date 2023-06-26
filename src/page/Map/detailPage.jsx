import styled from "@emotion/styled";
import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MarkerContext } from "../../context/MarkerInfo";

const DetailContainer = styled.div`
    z-index: 2;
    position: fixed;
    right: -30rem;
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
.slideOut {
    
    transform: translateX(0%); /* 다시 제자리로 이동하여 펼쳐짐 */
   
  }

.slideIn {
    transform: translateX(-110%); /* 오른쪽으로 이동하여 숨김 */
}
.hide {
    display: none;
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

const DetailPage = (props) => {
    const {open, close, campInfo} = props;
    const context = useContext(MarkerContext);

const url = "https://map.naver.com/v5/directions/14111340.310128096,4535416.507812284,%EC%9D%BC%EC%82%B0%ED%9C%B4%EB%A8%BC%EB%B9%8C2%EC%B0%A8%EC%95%84%ED%8C%8C%ED%8A%B8,19055891,PLACE_POI/14205872.331903983,4501898.402669169,%EC%96%91%ED%8F%89%EC%88%98%EB%AA%A9%EC%9B%90%20%EC%BA%A0%ED%95%91%EC%9E%A5,32862772,PLACE_POI/-/transit?c=9,0,0,0,dh"
    return(
        <DetailContainer>
            <div className={`container ${open ? "slideIn" : "slideOut"}`}>
                <TitleBar></TitleBar>
                <button className={open ? "closeBtn" : "hide"} onClick={close}>숨기기</button>
                {campInfo && campInfo.map((campInfo) => (
                    <>
                    <div>{campInfo.facltNm}</div>
                    <a href={url}>길찾기</a>
                    <div>{campInfo.tooltip}</div>
                    </>
                ))}
            </div>
        </DetailContainer>
    )
}
export default DetailPage;