import React from "react";
import { styled } from "styled-components";
import introLogo from "../images/CAMO로고3.png"
import VideoBackground from "./introBack";

const IntroStyle = styled.div`
    box-sizing: border-box;
    
    .introLogoBox {
        width: 140px;
        height: 140px;
    }
    .introContainer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(to right, black, transparent);
    }
    .introContainer2{
        margin: 20px;
        padding: 20px;
        padding-left: 10vw;
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
        height: 50px;
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
`;

const Intro = () => {
    const introLogoImg = {
        backgroundImage: `url(${introLogo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    };

    return(
        <>
            <IntroStyle>
                <div className="introContainer video">
                    <div className="introContainer2">
                        <VideoBackground />
                        <div className="introHeader">
                            <div className="introLogoBox" style={introLogoImg}></div>
                        </div>
                        
                        {/* <div className="line"></div> */}
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
                            <button className="loginBtn">로그인</button>
                        </div>
                    </div>
                </div>
            </IntroStyle>
        </>
    );
}

export default Intro;