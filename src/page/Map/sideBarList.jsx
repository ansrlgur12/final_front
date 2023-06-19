import React from "react";
import styled from "styled-components"
import { MarkerContext } from "../../context/MarkerInfo";
import { useContext } from "react";

const ListStyle = styled.div`

.listContainer{
    height: 11vh;
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;



}
.leftSide{
    flex-basis: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imageContainer{
    width: 100px;
    height: 10vh;
    background-color: #ccc;
}
.rightSide{
    padding-left: 10px;
}
`;

const SideBarList = () => {
    const context = useContext(MarkerContext);
    const {setMarkerLat, setMarkerLng, setZoomLev, setViewOverlay, viewOverlay} = context;

    const onClickTitle = () => {
        setMarkerLat(37.499590490909185);
        setMarkerLng(127.0263723554437);
        setZoomLev(1);
        setViewOverlay(true);
        console.log("context set!");
        console.log("zoom set!");
        console.log(viewOverlay);
    }

    const onClickTitle2 = () => {
        setMarkerLat(42.499590490909185);
        setMarkerLng(127.0263723554437);
        setZoomLev(1);
        setViewOverlay(true);
        console.log("context set!");
        console.log("zoom set!");
        console.log(viewOverlay);
    }

    return(
        <ListStyle>
            <div className="listContainer">
                <div className="leftSide">
                    <div className="imageContainer"></div>
                </div>
                <div className="rightSide">
                    <p onClick={onClickTitle}>37.4</p>
                    <p>127.026</p>
                </div>
            </div>
            <div className="listContainer">
                <div className="leftSide">
                    <div className="imageContainer"></div>
                </div>
                <div className="rightSide">
                    <p onClick={onClickTitle2}>제목</p>
                    <p>내용입니다.</p>
                </div>
            </div>
            <div className="listContainer">
                <div className="leftSide">
                    <div className="imageContainer"></div>
                </div>
                <div className="rightSide">
                    <p>제목</p>
                    <p>내용입니다.</p>
                </div>
            </div><div className="listContainer">
                <div className="leftSide">
                    <div className="imageContainer"></div>
                </div>
                <div className="rightSide">
                    <p>제목</p>
                    <p>내용입니다.</p>
                </div>
            </div>
            
        </ListStyle>
    )
}

export default SideBarList;