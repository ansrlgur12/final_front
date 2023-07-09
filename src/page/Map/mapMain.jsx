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
import animalCamp from "../../images/강아지발바닥.png";
import markerImage from "../../images/캠핑마커.png";


export const MainStyle = styled.div`
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
    

    .img{
        width: 3vw;
        height: 3vw;
    }
    .selectBtn{
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      top: 45vh;
      left: 2vh;
      z-index: 5;
      :hover{
        p{
          border: 1px solid #ccc;
          border-radius: 15px;
          margin-top: .5em;
          font-size: small;
          height: 2em;
          display: flex;
          align-items: center;
          padding: 0 .5em;
          background-color: black;
          color: white;
        }
      }
        p{
          display: none;
          /* border: 1px solid #ccc;
          border-radius: 15px;
          margin-top: .5em;
          font-size: small;
          height: 2em;
          display: flex;
          align-items: center;
          padding: 0 .5em;
          background-color: black;
          color: white; */
        }
    }
    .btnSection{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 1em;
    }
  `;

const MapMain = () => {
  const context = useContext(MarkerContext);
  const {overlayOpen, setOverlayOpen, setCurrentData, currentData, setSelectedSortBy} = context;
  const nav = useNavigate();
  const [markerPositions, setMarkerPositions] = useState([]);
  const [mapLocations, setMapLocations] = useState([]);
  const [animalLocations, setAnimalLocations] = useState([]);
  const [marker, setMarker] = useState();

  useEffect(()=>{
      const loading = async() => {
        const getCampingData = async() => {
          const rsp = await AxiosApi.getCampData("ALL", "시.군.구");
          const positions = rsp.data.map(item => [item.mapY, item.mapX, item.facltNm]);
          setMarkerPositions(positions);
          console.log(markerPositions);
          setMarker(markerImage);
          setSelectedSortBy("이름순");
        }
        getCampingData();
      } 
      loading();
  },[])

  useEffect(()=>{
    const getCampingData = async() => {
      const rsp = await AxiosApi.getCampData("ALL", "시.군.구");
      const positions = rsp.data.map(item => [item.mapY, item.mapX, item.facltNm]);
      setMapLocations(positions);
      console.log(markerPositions);
    }
    getCampingData();

    const getAnimalCampingData = async() => {
      const rsp = await AxiosApi.getAnimalCampData("ALL", "시.군.구");
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
              <div className="btnSection" onClick={setNormalMapInfo}>
                <img className="img" src={markerImage} alt="" />
                <p>전체 캠핑장</p>
              </div>
              <div className="btnSection" onClick={setAnimalMapInfo}>
                <img className="img" src={animalCamp} alt="" />
                <p>애완동물 동반가능</p>
              </div>
            </div>
      </div>
    </div>
    </MainStyle>
    </>
  );
}
export default MapMain;
