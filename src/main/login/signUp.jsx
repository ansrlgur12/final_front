import React, { useState } from 'react';
import { styled } from 'styled-components';

const SignUpStyle = styled.div`

    .signup-page {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f2f2f2;
        border-radius: 5px;
    }
    .signup-page h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }
    .signup-page .form-group {
        margin-bottom: 15px;
    }
    .signup-page label {
        display: block;
        margin-bottom: 5px;
    }
    .signup-page input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    .signup-page button {
        padding: 10px 15px;
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
    .signup-page button:hover {
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

`;

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleAgreementChange = (e) => {
        setAgreed(e.target.checked);
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

    return (
        <SignUpStyle>
            <div className="signup-page">
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">이름:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">닉네임:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일 인증:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkPassword">비밀번호 확인:</label>
                        <input
                            type="checkPassword"
                            id="checkPassword"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkPassword">주소:</label>
                        <input
                            type="checkPassword"
                            id="checkPassword"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkPassword">전화번호:</label>
                        <input
                            type="checkPassword"
                            id="checkPassword"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="form-group agree">
                        <label>
                            <input
                            type="checkbox"
                            checked={agreed}
                            onChange={handleAgreementChange}
                            required
                            />
                            <div>이용 약관에 동의합니다.</div>
                        </label>
                    </div>

                    <button type="submit">가입하기</button>
                </form>
            </div>
        </SignUpStyle>
    );
};

export default SignUpPage;
