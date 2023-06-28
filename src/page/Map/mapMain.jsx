import React, { useState, useEffect } from "react";
import KakaoMap from "./Kakao";
import { styled } from "styled-components";
import Header from "../../main/header";
import Sidebar from "./sideBar";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../API/TestAxios";
import { useContext } from "react";
import { MarkerContext } from "../../context/MarkerInfo";
import Overlay from "./overlay";
import DetailPage from "./detailPage";
import animalCamp from "../../images/강아지발바닥.png";
import markerImage from "../../images/캠핑마커.png";

const MainStyle = styled.div`
    .App {
        font-family: sans-serif;
        position: relative;
    }
    
    #wrap {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        margin-top: .2em;
    }
    
    .selectBtn{
      display: flex;
      z-index: 5;
      position: fixed;
      top: 10vh;
      left: 8vw;
      
    }

    .selType {
      width: 100px;
      height: 50px;
      border-radius: 50px;
      margin: .5em 1em;
    }
  `;

const MapMain = () => {
  const context = useContext(MarkerContext);
  const {overlayOpen, setOverlayOpen, setCurrentData, currentData} = context;
  const nav = useNavigate();
  const [markerPositions, setMarkerPositions] = useState([]);
  const [mapLocations, setMapLocations] = useState([]);
  const [animalLocations, setAnimalLocations] = useState([]);
  const [marker, setMarker] = useState();
  

  useEffect(()=>{
      const loading = async() => {
        const getCampingData = async() => {
          const rsp = await AxiosApi.getCampData();
          const positions = rsp.data.map(item => [item.mapY, item.mapX, item.facltNm]);
          setMarkerPositions(positions);
          setMarker(markerImage);
        }
        getCampingData();
      } 
      loading();
  },[])

  useEffect(()=>{
    const getCampingData = async() => {
      const rsp = await AxiosApi.getCampData();
      const positions = rsp.data.map(item => [item.mapY, item.mapX, item.facltNm]);
      setMapLocations(positions);
    }
    getCampingData();

    const getAnimalCampingData = async() => {
      const rsp = await AxiosApi.getAnimalCampData();
      const positions = rsp.data.map(item => [item.mapY, item.mapX, item.facltNm]);
      setAnimalLocations(positions);
      }
      getAnimalCampingData();
  },[currentData])

  const closeOverlay = () => {
    setOverlayOpen(false)
  }

  const setNormalMapInfo = () => {
    setCurrentData("normal");
    setMarkerPositions(mapLocations)
    setMarker(markerImage);
  }

  const setAnimalMapInfo = () => {
    setCurrentData("animal");
    setMarkerPositions(animalLocations);
    setMarker(animalCamp);
  }


  return (
    <>
    <Header/>
    <MainStyle>
    <div className="App">
      <div id="wrap" style={{width:'100vw', height: '89vh'}}>
            <KakaoMap markerPositions={markerPositions} campLocMarkerImg={marker}/>
            <Sidebar />
            <Overlay open={overlayOpen} close={closeOverlay}/>
            <div className="selectBtn">
              <button className="selType normal" onClick={setNormalMapInfo}>
                전체보기
              </button>
              <button className="selType animal" onClick={setAnimalMapInfo}>
                애완동물 동반가능
              </button>
            </div>
      </div>
    </div>
    </MainStyle>
    </>
  );
}

export default MapMain;
