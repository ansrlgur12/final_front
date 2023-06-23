import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { MarkerContext } from "../../context/MarkerInfo";
import { useContext } from "react";
import AxiosApi from "../../API/TestAxios";
import noImage from "../../images/CAMOLOGO.png"

const ListStyle = styled.div`

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
`;

const SideBarList = () => {
    const context = useContext(MarkerContext);
    const {setMarkerLat, setMarkerLng, setZoomLev, setViewOverlay, viewOverlay, currentData, setOverlayOpen, setLocation} = context;
    const [currentPage, setCurrentPage] = useState(1);
    const [campListData, setCampListData] = useState([]);
    const pageSize = 4;
    
    
    useEffect(()=>{
        if(currentData === 'animal') {
            const getAnimalList = async() => {
                const rsp = await AxiosApi.getAnimalCampData();
                setCampListData(rsp.data);
                setCurrentPage(1);
            }
            getAnimalList();
        } else if(currentData === 'normal') {
            const getCampList = async() => {
                const rsp = await AxiosApi.getCampData();
                setCampListData(rsp.data);
                setCurrentPage(1);
            }
            getCampList();
        }
    },[currentData])
    


    const onClickData = (x, y) => {

        console.log(x)
        console.log(y)
        setMarkerLng(x);
        setMarkerLat(y);
        setZoomLev(1);
        setLocation([x, y]);
        setOverlayOpen(true);
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedCamps = campListData.slice(startIndex, endIndex);

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
          {displayedCamps && displayedCamps.map((campListData) => {
            const { province, city, town } = splitAddress(campListData.addr1);
    
            return (
              <div className="listContainer" key={campListData.id}>
                <div className="leftSide">
                  <div className="imageContainer" style={{ backgroundImage: `url(${campListData.firstImageUrl ? campListData.firstImageUrl : noImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                </div>
                <div className="rightSide" onClick={() => onClickData(campListData.mapX, campListData.mapY)}>
                  <div className="campTitle">
                    {campListData.facltNm.length > 12 ? campListData.facltNm.substring(0, 12) + "..." : campListData.facltNm}
                  </div>
                  <div className="campAddr">
                    <p className="addr">{province}</p>
                    <p className="addr">{city}</p>
                    <p className="addr">{town}</p>
                  </div>
                </div>
              </div>
            );
            })}
            <div className="btnBox">
                {startPage > 1 && (<button onClick={() => handlePageChange(startPage - 1)}>{"<"}</button>)}
                {[...Array(endPage - startPage + 1)].map((_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button className={pageNumber === currentPage ? "numBtn active" : "numBtn"} key={pageNumber} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
                    );
                })}
                {endPage < totalPages && (<button onClick={() => handlePageChange(endPage + 1)}>{">"}</button>)}
            </div>
        </ListStyle>
    )
}

export default SideBarList;