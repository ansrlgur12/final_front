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
    }
    
    section {
        margin-bottom: 10px;
    }
  `;

const MapMain = () => {
  const context = useContext(MarkerContext);
  const {overlayOpen, setOverlayOpen} = context;
  const nav = useNavigate();
  const [markerPositions, setMarkerPositions] = useState([]);
  const [mapLocations, setMapLocations] = useState([]);
  const [animalLocations, setAnimalLocations] = useState([]);
  const [marker, setMarker] = useState();
  
  const markerPositions2 = [
    [37.499590490909185, 127.0263723554437],
    [37.499427948430814, 127.02794423197847],
    [37.498553760499505, 127.02882598822454],
    [37.497625593121384, 127.02935713582038],
    [37.49629291770947, 127.02587362608637],
    [37.49754540521486, 127.02546694890695],
    [37.49646391248451, 127.02675574250912]
  ];
  useEffect(()=>{
    const getCampingData = async() => {
      const rsp = await AxiosApi.getCampData();
      const positions = rsp.data.map(item => [item.mapY, item.mapX]);
      setMapLocations(positions);
    }
    getCampingData();

    const getAnimalCampingData = async() => {
      const rsp = await AxiosApi.getAnimalCampData();
      const positions = rsp.data.map(item => [item.mapY, item.mapX]);
      setAnimalLocations(positions);
    }
    getAnimalCampingData();
  },[])

  const closeOverlay = () => {
    setOverlayOpen(false)
  }

  const setNormalMapInfo = () => {
    setMarkerPositions(mapLocations)
    setMarker(markerImage);
  }

  const setAnimalMapInfo = () => {
    setMarkerPositions(animalLocations);
    setMarker(animalCamp);
  }


  return (
    <>
    <Header/>
    <MainStyle>
    <div className="App">
      <section>
        <button onClick={setNormalMapInfo}>
          오지/노지
        </button>
        <button onClick={() => setMarkerPositions(markerPositions2)}>
          유료 야영장
        </button>
        <button onClick={setAnimalMapInfo}>
          애완동물 동반가능
        </button>
        <button onClick={()=> nav("/testPage")} >test</button>
      </section>
      <div id="wrap" style={{width:'100vw', height: '85vh'}}>
            <KakaoMap markerPositions={markerPositions} campLocMarkerImg={marker}/>
            <Sidebar />
            <Overlay open={overlayOpen} close={closeOverlay}/>
      </div>
    </div>
    </MainStyle>
    </>
  );
}

export default MapMain;
