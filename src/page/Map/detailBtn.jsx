import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useContext } from "react";
import { MarkerContext } from "../../context/MarkerInfo";
import DetailPage from "./detailPage";

const DetailBtn = styled.div`
    border: none;
    position: fixed;
    z-index: 1;
    right: 41.5vw;
    bottom: 50vh;

    .hideBtn{
        opacity: 0;
    }
`;



const SideBarDetail = () => {

    const context = useContext(MarkerContext);
    const {closeMenu, setCloseMenu} = context;

    const onClickBtn = () => {
        console.log("dd")
        setCloseMenu(true)
        console.log(closeMenu + "현재상태")
    }

    return(
        <DetailBtn>
            <button onClick={onClickBtn} className="hideBtn">상세페이지</button>
            {closeMenu && <DetailPage/>}
            
            
        </DetailBtn>
    )
};

export default SideBarDetail;