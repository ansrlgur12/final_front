import React from "react";
import styled from "styled-components"

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

    return(
        <ListStyle>
            <div className="listContainer">
                <div className="leftSide">
                    <div className="imageContainer"></div>
                </div>
                <div className="rightSide">
                    <p>제목</p>
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