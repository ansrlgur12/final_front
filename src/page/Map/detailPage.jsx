import styled from "@emotion/styled";
import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MarkerContext } from "../../context/MarkerInfo";

const DetailContainer = styled.div`
    z-index: 2;
    position: fixed;
    right: 1.5vw;
    bottom: 6vh;
    .container {
    width: 30vw;
    height: 76vh;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${props => (props.open ? "0%" : "110%")});
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
// .slideOut {
//     transform: translateX(110%); /* 오른쪽으로 이동하여 숨김 */
//     display: none;
//   }
// 
// .slideIn {
//     transform: translateX(0%); /* 다시 제자리로 이동하여 펼쳐짐 */
// }
    
    
    
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
    const {open, close} = props;
    const context = useContext(MarkerContext);

    useEffect(() => {
        if (!open) {
          const timer = setTimeout(() => {
            close();
          }, 1500);
          return () => clearTimeout(timer);
        }
      }, [open, close]);
    


    return(
        <DetailContainer open={open}>
            <div className="container">
                <TitleBar></TitleBar>
                <button className="closeBtn" onClick={close}>숨기기</button>
            </div>
        </DetailContainer>
    )
}
export default DetailPage;