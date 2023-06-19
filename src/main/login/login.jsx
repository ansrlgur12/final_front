import React from "react";
import { styled } from 'styled-components';
import introLogo from "../../images/CAMO로고.png"
import KakaoLogin from "../../API/KaKaoLogin";

const LoginStyle = styled.div`
    box-sizing: border-box;

    .loginLogo{
        width: 100px;
        height: 100px;
        z-index: 1;
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
        justify-content: center;
        align-items: center;
    }
    .kakao {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: yellow;
        border: 0;
    }

`;

const Login = () => {
    const logo = {
        backgroundImage : `url(${introLogo})`,
        backgroundsize : 'contain',
        backgroundRepeat: 'no-repeat'
    };

    return(
        <LoginStyle>
            <div class="container">
                <div className="loginLogo" style={{logo}}></div>
                <h2>로그인</h2>
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
                    <div className="kakao"><KakaoLogin /></div>
                    <div className="google"></div>
                </div>
            </div>

        </LoginStyle>
    );

}

export default Login;