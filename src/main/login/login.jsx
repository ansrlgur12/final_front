import React from "react";
import { styled } from 'styled-components';
import introLogo from "../../images/CAMO로고.png"
import kakaologo from "../../images/kakaoLogo.png"
import googlelogo from "../../images/googleLogo.png"
import KakaoLogin from "../../API/KaKaoLogin";
import { useNavigate } from "react-router-dom";

const LoginStyle = styled.div`
    box-sizing: border-box;

    .loginLogo{
        width: 100%;
        height: 120px;
        background-size: contain;
    }
    .container {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        padding: 20px;
        background-color: #f2f2f2;
        border: 1px solid #ccc;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

    }
    h2 {
        color: #333;
    }
    input[type="text"], input[type="password"] {
        width: 90%;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    .loginBtn {
        width: 94%;
        padding: 10px;
        margin: 10px;
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
    .snsLogin{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .kakao {
        margin: 10px;
        width: 100px;
        height: 60px;
        background-size: contain;
        cursor: pointer;
    }
    .google {
        margin: 10px;
        width: 100px;
        height: 60px;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
    }

`;

const Login = () => {
    const nav = useNavigate();
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
                    <div className="kakao" style={kakaoLogo} onClick={()=>nav(<KakaoLogin/>)}></div>
                    <div className="google" style={googleLogo}></div>
                </div>
            </div>

        </LoginStyle>
    );

}

export default Login;