import React, { useState } from "react";
import { styled } from 'styled-components';
import introLogo from "../../images/CAMO로고.png"
import kakaologo from "../../images/kakaoLogo.png"
import naverlogo from "../../images/naverLogo.png"
import googlelogo from "../../images/googleLogo.png"
import KakaoLogin from "../../API/KaKaoLogin";
import SignUpPage from "./signUp";

const LoginStyle = styled.div`
    box-sizing: border-box;

    .loginLogo{
        width: 100%;
        height: 120px;
        background-size: contain;
    }
    .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f2f2f2;
        border: 1px solid #ccc;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .loginInput {
        width: 90%;
        padding: 10px;
        margin: 10px auto;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    .loginButton {
        width: 94%;
        height: 2.2rem;
        padding: 0px;
        margin: 4px;
        background-color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .loginButton:hover {
        background-color: #2D6247;
        color: #f2f2f2;
    }
    .other {
        margin: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
    }
    .other1{
        cursor: pointer;
    }
    .other2{
        cursor: pointer;
    }
    .snsLogin{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .kakao {
        margin: 10px;
        width: 100px;
        height: 46px;
        background-size: cover;
        background-position: center;
        object-fit: contain;
        border-radius: 8px;
        cursor: pointer;
    }
    .google {
        margin: 10px;
        width: 100px;
        height: 46px;
        border-radius: 8px;
        background-size: cover;
        background-position: center;
        object-fit: contain;
        cursor: pointer;
    }
    .naver {
        margin: 10px;
        width: 100px;
        height: 46px;
        border-radius: 8px;
        background-size: cover;
        background-position: center;
        object-fit: contain;
        cursor: pointer;
    }
`;

const SignUpStyle = styled.div`
    position: absolute;
    top: 46%;
    right: -100%;
    transform: translateY(-50%);
    /* transition: right 0.6s ease-in-out; */

    &.showSign {
        right: 0%;
    }
`;

const Login = () => {
    const [showSign, setShowSign] = useState(false);

    const logo = {
        backgroundImage : `url(${introLogo})`,
        backgroundsize : 'contain',
        backgroundRepeat: 'no-repeat',
    };
    const kakaoLogo = {
        backgroundImage: `url(${kakaologo})`,
        backgroundRepeat: 'no-repeat'
    };
    const googleLogo = {
        backgroundImage: `url(${googlelogo})`,
        backgroundRepeat: 'no-rereat'
    }
    const naverLogo = {
        backgroundImage: `url(${naverlogo})`,
        backgroundRepeat: 'no-rereat'
    }

    const signBtnClick = () => {
        setShowSign(true);
    };
        
    return(
        <LoginStyle>
                <div class="container">
                    <div className="loginLogo" style={logo}></div>
                    <form>
                        <input type="text" name="id" placeholder="사용자 이름 또는 이메일" required className="loginInput"/>
                        <input type="password" name="pwd" placeholder="비밀번호" required className="loginInput"/>
                        <button className="loginButton" type="submit" disabled>로그인</button>
                    </form>
                    <div className="other">
                        <div className="other1">비밀번호 재설정</div>
                        <div className="other2" onClick={signBtnClick}>회원가입</div>
                        
                    </div>
                    <div className="snsLogin">
                        <div className="kakao" style={kakaoLogo}><KakaoLogin/></div>
                        <div className="naver" style={naverLogo}></div>
                        <div className="google" style={googleLogo}></div>
                    </div>
                </div>
                <SignUpStyle className={showSign ? "showSign" : ""}>
                    {showSign && <SignUpPage />}
                </SignUpStyle>
        </LoginStyle>
    );
}

export default Login;