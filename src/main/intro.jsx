import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import introLogo from "../images/CAMO로고3.png"
import VideoBackground from "./introBack";
import Modal from "../util/modal";
import { useNavigate } from "react-router-dom";

const IntroStyle = styled.div`
    box-sizing: border-box;
    
    .introLogoBox {
        width: 140px;
        height: 140px;
    }
    .introContainer {
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        padding-top: 10vh;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(to right, black, transparent);
    }
    .introContainer2{
        padding-left: 10vw;
        opacity: 0;
        transition: opacity 0.6s ease-in-out;
    }
    .introContainer2.show{
        opacity: 1;
    }
    .introBody{

    }
    .camoBody {
        font-size: 3rem;
        font-weight: bold;
        color: #f9f9f9;
        margin: 20px 0 20px 0;
    }
    .loginBtn{
        width: 80px;
        height: 40px;
        font-size: 1.2rem;
        border-radius: 8px;
        padding: 0;
        cursor: pointer;
    }
    .loginBtn:hover{
        background-color: #2D6247;
        padding: 0;
    }
    .p2 {
        font-size: 1.2rem;
    }
    p{
        margin: 8px;
    }
`;

const Intro = () => {
    const nav = useNavigate();
    const[modalOpen, setModalOpen] = useState(false);
    const needLogin = () => {
      setModalOpen(true);
    }
    const closeModal = () => {
      setModalOpen(false);
    }
    
    const [showText, setShowText] = useState(false);
    const introLogoImg = {
        backgroundImage: `url(${introLogo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 600);
        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            <IntroStyle>
                <div className="introContainer video">
                    <VideoBackground />
                    <div className={`introContainer2 ${showText ? 'show' : ''}`}>
                        <div className="introHeader">
                            <div className="introLogoBox" style={introLogoImg}></div>
                        </div>
                        <div className="introBody">
                            <div className="camoBody">
                                    <p className="p1">
                                        환영합니다!<br /> 캠핑의 모든 것입니다.
                                    </p>
                                    <p className="p2">
                                        로그인해서 혜택을 누리세요!
                                    </p>
                                </div>
                        </div>
                        <div className="btnDiv">
                            <button className="loginBtn" >로그인</button>
                        </div>
                        <Modal open={modalOpen} type={true} confirm={()=>nav("/Login")} close={closeModal} header={"확인"}>로그인이 필요합니다</Modal>
                    </div>
                </div>
            </IntroStyle>
        </>
    );
}

export default Intro;