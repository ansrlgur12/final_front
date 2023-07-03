import React, {useState} from "react";
import { MainStyle } from "./mapMain";
import KakaoMap from "./Kakao";
import markerImage from "../../images/캠핑마커.png";
import Header from "../../main/header";
import Sidebar from "./sideBar";
import { useNavigate } from "react-router-dom";



const OjiNojiMapMain = () => {
    const [markerPositions, setMarkerPositions] = useState([]);
    const nav = useNavigate();
    return(
        <>
        <Header/>
        <MainStyle>
            <div className="App">
                <div id="wrap" style={{width: '100vw', height: '89vh'}}>
                <KakaoMap markerPositions={markerPositions} campLocMarkerImg={markerImage}/>
                <Sidebar />
                <button className="selectBtn" onClick={()=>nav("/newMark")}>장소 신청하기</button>
                </div>
            </div>
        </MainStyle>
        </>
    );
}
export default OjiNojiMapMain;