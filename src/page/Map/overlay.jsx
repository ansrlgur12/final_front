import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MarkerContext } from "../../context/MarkerInfo";
import AxiosApi from "../../API/TestAxios";
import DetailPage from "./detailPage";

const MapStyled = styled.div`
    position: relative;
    z-index: 1;
    .wrap {
      display: none;
      border-radius: 15px;
      position: absolute;
      right: 41vw;
      bottom: 49vh;
      margin-left: -144px;
    }
    .openOverlay {
      display: flex;
    }

    .wrap * {padding: 0;margin: 0;}

    .wrap .info {
      width: 286px;
      height: auto;
      border-radius: 15px;
      border-bottom: 2px solid #ccc;
      border-right: 1px solid #ccc;
      background: #fff;
      display: flex;
      flex-direction: column;
      
    }
    .info .title {
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      padding: 5px 0 0 10px;
      height: 30px;
      background: rgba(45, 98, 71, 0.8);
      border-bottom: 1px solid #ddd;
      font-size: 18px;
      font-weight: bold;
      color: white;
    }
    .info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
    .info .close:hover {cursor: pointer;}

    .info .body {
      display: flex;
    }
    .info .desc {
      
      flex-basis: 60%;
      height: 75px;
    }
    .desc .ellipsis {
      padding: .3em;
      font-size: .8em;
      font-weight: bold;
    }
    .desc .jibun {
      font-size: 11px;
      color: #888;
      margin-top: -2px;
    }
    .info .img {
      background-color: #5085BB;
      flex-basis: 40%;
    }
    /* .info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')} */
    .info .link {color: #5085BB;}
    .bottomLine{
      display: flex;
      justify-content: space-between;
      padding: 0 8px 8px 8px;
      margin-top: 5px;
    }
    .detailPageBtn{
      cursor: pointer;
    }
 `;

const Overlay = (props) => {
  const context = useContext(MarkerContext);
  const {location, setDetailOpen} = context;
  const {open, close} = props
  const [campInfo, setCampInfo] = useState("");
  
  useEffect(()=>{
    const loading = async() => {
      console.log(location)
      const getOverlay = async() => {
        const rsp = await AxiosApi.getOverlayInfo(location[0], location[1]);
        setCampInfo(rsp.data);
        console.log(campInfo);
    };
    getOverlay();
    }
    loading();
  },[location])

  const detailPageOpen = () => {
    setDetailOpen(true);
  }

    return (
      <MapStyled>
      <div className={open ? "openOverlay wrap" : "wrap" }>
        {open && campInfo.map((campInfo) => (
        <div className="info">
          <div className="title">
            <p>{campInfo.facltNm}</p>
            <div onClick={close} className="close" title="닫기"></div>
          </div>
          <div className="body">
            <div className="img" style={{backgroundImage: `url(${campInfo.firstImageUrl})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}></div>
            <div className="desc">
              <div className="ellipsis">{campInfo.addr1}</div>
              <div className="ellipsis jibun">{campInfo.tel ? campInfo.tel : "전화번호 없음"}</div>
            </div>
          </div>
          <div className="bottomLine">
                <p className="icon">icon</p>
                <p className="icon">icon</p>
                <p className="icon">icon</p>
                <button onClick={detailPageOpen}>상세페이지</button>
          </div>
        </div> 
        ))}
      </div>
      </MapStyled>
      
    );
};

export default Overlay;
