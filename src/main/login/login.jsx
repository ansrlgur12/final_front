import React from "react";
import { styled } from 'styled-components';
import introLogo from "../../images/CAMO로고.png"
import kakaologo from "../../images/kakaoLogo.png"
import naverlogo from "../../images/naverLogo.png"
import googlelogo from "../../images/googleLogo.png"
import KakaoLogin from "../../API/KaKaoLogin";

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
    input[type="text"], input[type="password"] {
        width: 90%;
        padding: 10px;
        margin: 10px auto;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    .loginBtn {
        width: 94%;
        padding: 0px;
        margin: 4px;
        background-color: #4CAF50;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
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

const Login = () => {
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
    
    return(
        <LoginStyle>
                <div class="container">
                    <div className="loginLogo" style={logo}></div>
                    <form>
                        <input type="text" placeholder="사용자 이름 또는 이메일" required />
                        <input type="password" placeholder="비밀번호" required />
                        <button className="loginBtn" type="submit">로그인</button>
                    </form>
                    <div className="other">
                        <div className="other1">비밀번호 재설정</div>
                        <div className="other2">회원가입</div>
                    </div>
                    <div className="snsLogin">
                        <div className="kakao" style={kakaoLogo}><KakaoLogin/></div>
                        <div className="naver" style={naverLogo}></div>
                        <div className="google" style={googleLogo}></div>
                    </div>
                </div>
        </LoginStyle>
    );
}

export default Login;