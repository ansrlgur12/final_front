import React from "react";
import { styled } from "styled-components";
import introLogo from "../images/CAMOLOGO.png"
import VideoBackground from "./introBack";

const IntroStyle = styled.div`
    box-sizing: border-box;
    .introLogoBox {
        width: 160px;
        height: 160px;
        left: 10vw;
    }
    .introHeader{
        display: flex;
        /* justify-content: space-evenly; */
        align-items: center;
        width: 100vw;
        color: #f9f9f9;
        /* border: 4px solid aqua; */
    }
    .introContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        margin: 40px 4px 4px 4px;
        /* border: 3px solid white; */
    }
    .line {
        height: 20px;
        width: 100vw;
        margin: 20px 0 20px 0;
        background-color: #f9f9f9;
    }
    .camoBody {
        font-size: 3rem;
        font-weight: bold;
        color: #f9f9f9;
        text-align: center;
        margin: 20px 0 20px 0;
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
                        <VideoBackground />
                        <div className="introHeader">
                            <div className="introLogoBox" style={introLogoImg}></div>
                            <div className="camoName">캠핑의 모든 것</div>
                            <div className="emptyBox"> 1</div>
                        </div>
                        
                        {/* <div className="line"></div> */}
                        <div className="introBody">
                            <div className="camoBody">환영합니다!<br /> 캠핑의 모든 것입니다.</div>
                        </div>
                        <button>로그인</button>
                </div>
            </IntroStyle>
        </>
    );
}

export default Intro;