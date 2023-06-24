import React, { useContext, useState } from "react";
import { styled } from 'styled-components';
import introLogo from "../../images/CAMO로고.png"
import kakaologo from "../../images/kakaoLogo.png"
import naverlogo from "../../images/naverLogo.png"
import googlelogo from "../../images/googleLogo.png"
import KakaoLogin from "../../API/KaKaoLogin";
import SignUpPage from "./signUp";
import AxiosApi from "../../API/TestAxios";
import { useNavigate } from "react-router-dom";
import Modal from "../../util/modal";
import { UserContext } from "../../API/UserInfo";

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
    .notLoginButton{
        width: 94%;
        height: 2.2rem;
        padding: 0px;
        margin: 4px;
        background-color: white;
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

const SignUpStyle = styled.div`
    position: absolute;
    top: 46%;
    right: -100%;
    transform: translateY(-50%);
    /* transition: right 0.6s ease-in-out; */

    &.showSign {
        right: 0%;
    }

    &.cutSign{
        display: none;
    }
`;

const Login = () => {
    const [showSign, setShowSign] = useState(false);
    const nav = useNavigate();

    const onKeyPress = (e) => {
      if (e.key === 'Enter') {
        onClickLogin();
      }
    };

    // Context API에 값을 저장
    const context = useContext(UserContext);
    const {setUserId, setPassword, setIsLogin, setUserImage} = context;

    // 아이디, 패스워드 입력
    const[inputId, setInputId] = useState("");
    const[inputPw, setInputPw] = useState("");

    // 오류메세지
    const[idMessage, setIdMessage] = useState("");
    const[pwMessage, setPwMessage] = useState("");

    // 유효성검사
    const[isId, setIsId] = useState(false);
    const[isPw, setIsPw] = useState(false);

    // 팝업처리(모달)
    const[modalOpen, setModalOpen] = useState(false);
    const[loginFinishOpen, setLoginFinishOpen] = useState(false);

  
    const closeModal = () => {
        setModalOpen(false);
    }

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
    };
    const naverLogo = {
        backgroundImage: `url(${naverlogo})`,
        backgroundRepeat: 'no-rereat'
    };

    const signBtnClick = () => {
        setShowSign(true);
    };

    const onChangeId = (e) => {
        // 5 ~ 20자리의 영문자, 숫자, 언더스코어로 이루어진 문자열 체크
        const regexId = /^\w{5,20}$/;
        setInputId(e.target.value);
        if(!regexId.test(e.target.value)){
            setIdMessage("5자리 이상 20자리 미만으로 입력해주세요");
            setIsId(false);
        } else {
            setIdMessage("올바른 형식 입니다.");
            setIsId(true);
        }
    };
    
    const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value;
        setInputPw(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else {
            setPwMessage('안전한 비밀번호에요 : )');
            setIsPw(true);
        }
    };

    const onClickLogin = async() => {
        // 로그인을 위해 Axios 호출
        const response = await AxiosApi.memberLogin(inputId, inputPw);
        console.log(response.data);
        if(response.data.success === true) {
            console.log("로그인");
            setLoginFinishOpen(true);
            setUserId(inputId);
            setPassword(inputPw);
            setIsLogin(true);
            setUserImage(response.data.userImage);   
        } else {
            console.log("로그인 에러");
            setModalOpen(true);
        }
    };
        
    return(
        <LoginStyle>
                <div class="container">
                    <div className="loginLogo" style={logo}></div>
                    <div>
                        <input value={inputId} onChange={onChangeId} placeholder="사용자 이름 또는 이메일" className="loginInput"/>
                    </div>
                    <div>
                        <input type="password" value={inputPw} onChange={onChangePw} placeholder="비밀번호" className="loginInput" onKeyPress={onKeyPress}/>
                    </div>
                    <div>
                        {(isId && isPw) ? 
                        <button className="loginButton" onClick={onClickLogin}>로그인</button> :
                        <button className="notLoginButton" onClick={onClickLogin}>로그인</button> }
                    </div>
                    <Modal open={modalOpen} confirm={closeModal} justConfirm = {true} header = {"오류"}>계정을 다시 확인해 주세요.</Modal>
                    <Modal open={loginFinishOpen} confirm={()=>nav("/main")} justConfirm = {true} header={"환영합니다."}>로그인에 성공했습니다.</Modal>
                    <div className="other">
                        <div className="other1">계정찾기</div>
                        <div className="other2" onClick={signBtnClick}>회원가입</div>
                    </div>
                    <div className="snsLogin">
                        <div className="kakao" style={kakaoLogo}><KakaoLogin/></div>
                        <div className="naver" style={naverLogo}></div>
                        <div className="google" style={googleLogo}></div>
                    </div>
                </div>
                <SignUpStyle className={showSign ? "showSign" : "cutSign"}>
                    {showSign && <SignUpPage />}
                </SignUpStyle>
        </LoginStyle>
    );
}

export default Login;