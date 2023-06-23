import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { MarkerContext } from "../../context/MarkerInfo";
import { useContext } from "react";
import AxiosApi from "../../API/TestAxios";

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
    const {setMarkerLat, setMarkerLng, setZoomLev, setViewOverlay, viewOverlay, campListData} = context;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    console.log(campListData[1]);
    
    // for(let camp of campListData) {
    //     console.log(camp)
    // }
    
    // const arr = [{1: "2"},{3: "4"}]


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

    // const startIndex = (currentPage - 1) * pageSize;
    // const endIndex = startIndex + pageSize;
    // const displayedCamps = campListData.slice(startIndex, endIndex);

    // const totalCamps = campListData.length;
    // const totalPages = Math.ceil(totalCamps / pageSize);
    
    //     // 현재 페이지를 중심으로 앞/뒤로 표시할 페이지 버튼의 개수
    // const maxPageButtons = 5;
    // const pageButtonRange = Math.floor(maxPageButtons / 2);

    // // 현재 페이지를 기준으로 표시할 페이지 버튼의 범위 계산
    // let startPage = Math.max(currentPage - pageButtonRange, 1);
    // let endPage = Math.min(currentPage + pageButtonRange, totalPages);

    // // 표시할 페이지 버튼의 개수가 maxPageButtons보다 작을 경우 범위 조정
    // if (endPage - startPage < maxPageButtons - 1) {
    //     if (currentPage - startPage < pageButtonRange) {
    //     endPage = Math.min(startPage + maxPageButtons - 1, totalPages);
    //     } else {
    //     startPage = Math.max(endPage - maxPageButtons + 1, 1);
    //     }
    // }
    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    //   };

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
            {campListData && campListData.map((campListData)=>(
                <div className="listContainer">
                    <div className="leftSide">
                        <div className="imageContainer"></div>
                    </div>
                    <div className="rightSide">
                        <p>{campListData.facltNm}</p>
                        <p>내용입니다.</p>
                    </div>
                </div>
            ))}
            <div className="btnBox">
                {/* {startPage > 1 && (<button onClick={() => handlePageChange(startPage - 1)}>{"<"}</button>)}
                {[...Array(endPage - startPage + 1)].map((_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button className={pageNumber === currentPage ? "numBtn active" : "numBtn"} key={pageNumber} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
                    );
                })}
                {endPage < totalPages && (<button onClick={() => handlePageChange(endPage + 1)}>{">"}</button>)} */}
            </div>
        </ListStyle>
    )
}

export default SideBarList;