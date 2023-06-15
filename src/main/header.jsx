import React from "react";
import styled from "styled-components";
import logoImg from "../images/CAMO로고.png"
import { useNavigate } from "react-router-dom";

const HeaderStyle = styled.div`
    box-sizing: border-box;
    box-shadow: 1px 2px 5px gray;

    * {
        margin: 0;
        padding: 0;
    }
    .headerContainer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logoImage {
        width: 280px;
        height: 120px;
        cursor: pointer;
    }
    
    .navContainer{
        display: flex;
    }
    li {
        list-style: none;
        margin: 20px;
        font-size: 1.5em;
    }
    .headerRight {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .headerRight > * {
        margin: 10px;
    }
    .myProfile {
        border: 1px solid black;
        border-radius: 50%;
        width: 70px;
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 12px;
      }
    .menu1:hover,.menu2:hover,.menu3:hover,.menu4:hover{
        cursor: pointer;
        opacity: 0.5;
    }
    
`;

const Header = () =>{
    const nav = useNavigate();
    
    const logoImage = { // 로고 이미지를 객체로 만들어서 return 문에 객체만 삽입
        backgroundImage: `url(${logoImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      };

    return(
        <>
            <HeaderStyle>
                <div className="headerContainer">
                    <div className="logo">
                        <div className="logoImage logo" style={logoImage} onClick={()=>nav("/")}></div>
                    </div>
                    <div className="menu">
                        <nav className="navibar">
                            <ul className="navContainer">
                                <li className="menu1" onClick={()=>nav("/mapMain")}>오지・노지</li>
                                <li className="menu2">캠핑장</li>
                                <li className="menu3">캠핑정보</li>
                                <li className="menu4" onClick={()=>nav("/shopMain")}>쇼핑</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="headerRight">
                        <div>
                            <input type="search" />
                        </div>
                        <div className="myProfile" onClick={()=>nav("/myPage")}>mypage 임시</div>
                        <div>로그아웃</div>
                    </div>
                </div>
            </HeaderStyle>
        </>
    );
}

export default Header;
