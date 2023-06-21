import React from "react";
import styled from "styled-components";
import { useState } from "react";
import SideBarDetail from "./detailBtn";
import { useContext } from "react";
import { MarkerContext } from "../../context/MarkerInfo";

const MapStyled = styled.div`
    position: relative;
    z-index: 1;
    .wrap {
      border-radius: 15px;
      position: absolute;
      left: 0;
      bottom: 40px;
      margin-left: -144px;
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

const Overlay = (position, clickClose, clickDetail) => {

  console.log(position)

    const stripHtmlTags = (html) => {
      const tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }

    return (
      <MapStyled>
      <div className="wrap">
        <div className="info">
          <div className="title">
            <p>{stripHtmlTags(position.position.La)}</p>
            <div className="close" title="닫기"></div>
          </div>
          <div className="body">
            <div className="img"></div>
            <div className="desc">
              <div className="ellipsis">캠핑장이름</div>
              <div className="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
              <div className="jibun ellipsis">전화번호 : 010-12</div>
            </div>
          </div>
          <div className="bottomLine">
                <p className="icon">icon</p>
                <p className="icon">icon</p>
                <p className="icon">icon</p>
                <button>상세페이지</button>
          </div>
        </div>
      </div>
      </MapStyled>
      
    );
};

export default Overlay;
