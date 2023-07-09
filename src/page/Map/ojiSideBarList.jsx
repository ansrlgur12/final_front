import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { MarkerContext } from "../../context/MarkerInfo";
import { useContext } from "react";
import AxiosApi from "../../API/TestAxios";
import noImage from "../../images/CAMOLOGO.png"

const ListStyle = styled.div`

.count{
    margin-left: .5em;
    margin-top: .5em;
    font-size: .8em;
    display: flex;
    align-items: center;
}

.red{
    margin: 0;
    padding: 0;
    margin-left: .4em;
    color: royalblue;
    font-weight: bold;
}

.listContainer{
    height: 13vh;
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
    margin-left: 1em;
    width: 100px;
    height: 10vh;
    background-color: #ccc;
    border-radius: 15px;
}
.rightSide{
    padding-left: 10px;
    display: flex;
    flex-direction: column;
}
.campTitle{
    margin-top: 1em;
    font-weight: bold;
}
.campAddr{
    display: flex;
    flex-direction: row;
}
.addr{
    margin-top: .5em;
    font-size: .8em;
    margin-right: .3em;
    color: royalblue;
    font-weight: bold;
}
.btnBox{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.numBtn{
    width: 30px;
    height: 30px;
    border: .5px solid #ccc;
    background-color: white;
    font-size: large;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
}
.numBtn + .numBtn{
    margin-left: 10px;
}
.active{
    background-color: rgb(45, 98, 71);
    color: white;
}

.arrowBtn{
    margin: 0 10px;
    border: .5px solid #ccc;
    background-color: white;
}

.arrowBtn:active{
    background-color: rgb(45, 98, 71);
    color: white;
}
`;

const OjiSideBarList = (props) => {
    const context = useContext(MarkerContext);
    const {searchValue, change, dho, sigungu} = props;
    const {setMarkerLat, setMarkerLng, setZoomLev, setChange, currentData, setOverlayOpen, setLocation, selectedSortBy} = context;
    const [currentPage, setCurrentPage] = useState(1);
    const [campListData, setCampListData] = useState([]);
    const pageSize = 4;
    
    
    useEffect(()=>{
            const getOjiList = async ()=> {
                const rsp = await AxiosApi.getOjiNojiData(dho, sigungu);
                setCampListData(rsp.data);
                setCurrentPage(1);
            }
            getOjiList();
        
    },[currentData, dho, sigungu])

    useEffect(()=>{
        if(change === 1) {
            console.log(searchValue)
            const searchCamp = async() => {
                const rsp = await AxiosApi.searchOjiCampData(searchValue);
                console.log(rsp);
                setCampListData(rsp.data);
                setCurrentPage(1);
                setChange(0);
            }
            searchCamp();
        }
    },[change, searchValue, currentData, selectedSortBy])


    const onClickData = (x, y) => {
        console.log(x)
        console.log(y)
        setMarkerLng(x);
        setMarkerLat(y);
        setZoomLev(1);
        setLocation([x, y]);
        setOverlayOpen(true);
    }
    
    const sortCamps = (camps) => {
        switch (selectedSortBy) {
          case '이름순':
            return camps.sort((a, b) => a.facltNm.localeCompare(b.facltNm));
          case '등록순':
            return camps.sort((a, b) => new Date(a.createdtime) - new Date(b.createdtime));
          case '조회순':
            return camps.sort((a, b) => b.viewCount - a.viewCount);

          // 다른 정렬 기준에 따른 분기 처리 작성
          default:
            return camps;
        }
      };
    
      // 정렬된 캠핑장 목록
      const sortedCamps = sortCamps(campListData);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedCamps = sortedCamps.slice(startIndex, endIndex);

    const totalCamps = campListData.length;
    const totalPages = Math.ceil(totalCamps / pageSize);
    
        // 현재 페이지를 중심으로 앞/뒤로 표시할 페이지 버튼의 개수
    const maxPageButtons = 5;
    const pageButtonRange = Math.floor(maxPageButtons / 2);

    // 현재 페이지를 기준으로 표시할 페이지 버튼의 범위 계산
    let startPage = Math.max(currentPage - pageButtonRange, 1);
    let endPage = Math.min(currentPage + pageButtonRange, totalPages);

    // 표시할 페이지 버튼의 개수가 maxPageButtons보다 작을 경우 범위 조정
    if (endPage - startPage < maxPageButtons - 1) {
        if (currentPage - startPage < pageButtonRange) {
        endPage = Math.min(startPage + maxPageButtons - 1, totalPages);
        } else {
        startPage = Math.max(endPage - maxPageButtons + 1, 1);
        }
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    const splitAddress = (address) => {
        const addressParts = address.split(' ');
        const province = addressParts[0]; // '강원도'
        const city = addressParts[1]; // '춘천시'
        const town = addressParts[2]; // '남면 가옹개길 52-9'
        return { province, city, town };
    };

    return (
        <ListStyle>
            <div className="count">총 <p className="red">'{campListData.length}'</p> 개의 검색결과가 있습니다</div>
          {displayedCamps && displayedCamps.map((campListData) => {
            const { province, city, town } = splitAddress(campListData.addr1);
    
            return (
              <div className="listContainer" key={campListData.facltNm}>
                <div className="leftSide">
                  <div className="imageContainer" style={{
                      backgroundImage: `url(${campListData.url
                        ? campListData.url.split(",")[0]
                        : noImage})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}></div>
                </div>
                <div className="rightSide" onClick={() => onClickData(campListData.mapX, campListData.mapY)}>
                  <div className="campTitle">
                    {campListData.facltNm.length > 12 ? campListData.facltNm.substring(0, 12) + "..." : campListData.facltNm}
                  </div>
                  <div className="campAddr">
                    <p className="addr">{province}</p>
                    <p className="addr">＞</p>
                    <p className="addr">{city}</p>
                    <p className="addr">{town ? "＞" : ""}</p>
                    <p className="addr">{town ? town : ""}</p>
                  </div>
                </div>
              </div>
            );
            })}
            <div className="btnBox">
                {startPage > 1 && (<button className="arrowBtn" onClick={() => handlePageChange(startPage - 1)}>{"<"}</button>)}
                {[...Array(endPage - startPage + 1)].map((_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button className={pageNumber === currentPage ? "numBtn active" : "numBtn"} key={pageNumber} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
                    );
                })}
                {endPage < totalPages && (<button className="arrowBtn" onClick={() => handlePageChange(endPage + 1)}>{">"}</button>)}
            </div>
        </ListStyle>
    )
}

export default OjiSideBarList;