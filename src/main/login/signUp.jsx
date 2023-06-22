import React, { useState } from 'react';
import { styled } from 'styled-components';
import introLogo from "../../images/CAMO로고.png"


const SignUpStyle = styled.div`
    box-sizing: border-box;

    .logo{
        width: 100%;
        height: 100px;
        background-size: contain;
    }
    .signup-page {
        width: 380px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f2f2f2;
        border: 1px solid #ccc;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .signForm * {
        box-sizing: border-box;
        margin: 2px;
    }
    .signup-page .form-group {
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
    }
    .signup-page label {
        display: block;
    }
    .textInput {
        width: 100%;
        height: 2rem;
        border: 1px solid #ccc;
        border-radius: 3px;
        
    }
    .chSign button {
        padding: 10px 15px;
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
    .chSign button:hover {
        background-color: #45a049;
    }
    .agree label{
        display: flex;
        box-sizing: border-box;
        /* justify-content: space-around; */
        align-items: center;
    }
    .agree input{
        padding: 0;
        margin: 10px;
        width: 20px;
    }
    .chSign{
        display: flex;
        justify-content: space-evenly;
    }
`;


const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [goBackPage, setGoBackPage] = useState(false);

    const logo = {
        backgroundImage : `url(${introLogo})`,
        backgroundsize : 'contain',
        backgroundRepeat: 'no-repeat',
    };

    const nameChange = (e) => {
        setName(e.target.value);
        console.log("name : " + e);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
        console.log("email : " + e);
    };
    const checkEmailChange = (e) => {
        setCheckEmail(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
        console.log("Password : " + e);
    };
    const checkPasswordChange = (e) => {
        setCheckPassword(e.target.value);
        console.log("checkPwd : " + e);
    };

    const agreementChange = (e) => {
        setAgreed(e.target.checked);
        console.log("agree : " + e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreed) {
          alert('이용 약관에 동의해야 합니다.');
          return;
        }
        // 회원가입 로직
        console.log('회원가입 정보:', { name, email, password });
    };

    const goBack = () => {
        // setShowLogin(true);
        setGoBackPage(true);
    };


    return goBackPage ? null : (
        <SignUpStyle>
            <div className="signup-page">
                <div className="logo" style={logo}></div>
                <form className="signForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">닉네임:</label>
                        <button>중복확인</button>
                    </div>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={nameChange}
                        required
                        className='textInput'
                    />
                    <div className="form-group">
                        <label htmlFor="email">이메일:</label>
                        <button className='confirm'>이메일 인증</button>
                    </div>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={emailChange}
                        required
                        className='textInput email1'
                    />
                    <input
                        type="text"
                        id="checkEmail"
                        value={checkEmail}
                        onChange={checkEmailChange}
                        required
                        className='textInput email2'
                    />

                    <div className="form-group">
                        <label htmlFor="password">비밀번호:</label>
                    </div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={passwordChange}
                        required
                        className='textInput'
                    />
                    
                    <div className="form-group">
                        <label htmlFor="checkPassword">비밀번호 확인:</label>
                    </div>
                    <input
                        type="Password"
                        id="checkPassword"
                        value={checkPassword}
                        onChange={checkPasswordChange}
                        required
                        className='textInput'
                    />
                    <div className="agree">
                        <label>
                            <input
                            type="checkbox"
                            checked={agreed}
                            onChange={agreementChange}
                            required
                            />
                            <div>이용 약관에 동의합니다.</div>
                        </label>
                    </div>
                    <div className="chSign">
                        <button className="joinUs" type="submit">가입하기</button>
                        <button className="backBtn" onClick={goBack}>돌아가기</button>
                    </div>
                </form>
            </div>
        </SignUpStyle>
    );
};

export default SignUpPage;
