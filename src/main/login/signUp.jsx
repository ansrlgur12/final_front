import React, { useState } from 'react';
import { styled } from 'styled-components';
import introLogo from "../../images/CAMO로고.png"
import AxiosApi from '../../API/TestAxios';
import Modal from '../../util/modal';
import { useNavigate } from 'react-router-dom';


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
    .joinSuccess{
        width: 90px;
        height: 40px;
        padding: 10px 15px;
        background-color: #2D6247;
        color: #fff;
        border: none;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
    }
    .backBtn{
        width: 90px;
        height: 40px;
        padding: 10px 15px;
        background-color: #2D6247;
        color: #fff;
        border: none;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
    }
    .joinFail{
        width: 90px;
        height: 40px;
        padding: 10px 15px;
        background-color: white;
        border: .5px solid black;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
    }
    .joinSuccess:hover {
        background-color: #45a049;
    }
    .agree {
        padding: 0;
        margin: 0;
    }
    .agree label{
        display: flex;
        box-sizing: border-box;
        align-items: center;
    }
    .agree input{
        padding: 0;
        margin: 10px 10px 10px 0;
        width: 20px;
    }
    .chSign{
        display: flex;
        justify-content: space-evenly;
    }
    &.goBackStyle {
        display: none;
    }
    
    .message{
        font-size: .8rem;
    }
    .success {
        color: royalblue;
    }
    .error {
        color: red;
    }
`;

const SignUpPage = () => {
    const nav = useNavigate();
    const [nickName, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [goBackPage, setGoBackPage] = useState(false);


    // 유효성 검ㅏ
    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false)
    const [isConPw, setIsConPw] = useState(false);
    const [isMail, setIsMail] = useState(false);

    // 오류 메시지
    const [nameMessage, setNameMessage] = useState("");
    const [pwdMessage, setPwdMessage] = useState("");
    const [checkPwdMessage, setCheckPwdMessage] = useState("");
    const [mailMessage, setMailMessage] = useState("");

    // 팝업
    const [modalOpen, setModalOpen] = useState(false);
    const [finishModal, setFinishModal] = useState(false);
    const [modalText, setModelText] = useState("중복된 아이디 입니다.");
    const closeModal = () => {
        setModalOpen(false);
    };

    // 로고 이미지
    const logo = {
        backgroundImage : `url(${introLogo})`,
        backgroundSize : 'contain',
        backgroundRepeat: 'no-repeat',
    };

    // 닉네임(아이디를 입력하지 않아서 닉네임 부분을 isId로 대체)
    const nameChange = (e) => {
        setNickName(e.target.value);
        if (e.target.value.length < 5 || e.target.value.length > 12) {
            setNameMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
            setIsId(false);    
        } else {
            setNameMessage("올바른 형식 입니다.");
            setIsId(true);
        }
    };

    // 이메일
    const emailChange = (e) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);
        if (!emailRegex.test(emailCurrent)) {
            setMailMessage('이메일을 확인하세요');
            setIsMail(false);
        } else {
            setEmail(e.target.value);
            setMailMessage('이메일 형식에 맞습니다.');
            setIsMail(true);
        }
    }

    // 이메일 인증
    const checkEmailChange = (e) => {
        setCheckEmail(e.target.value);
    };

    // 비밀번호
    const passwordChange = (e) => {
        //const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value ;
        setPassword(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPwdMessage('숫자+영문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else {
            setPwdMessage('안전한 비밀번호에요 : )')
            setIsPw(true);
        }  
        console.log("Password : " + e);
    };

    // 비밀번호 검사
    const checkPasswordChange = (e) => {
        const passwordCurrent = e.target.value ;
        setCheckPassword(passwordCurrent)
        if (passwordCurrent !== password) {
            setCheckPwdMessage('비밀 번호가 일치하지 않습니다.')
            setIsConPw(false)
        } else {
            setCheckPassword(e.target.value);
            setCheckPwdMessage('비밀 번호가 일치 합니다.')
            setIsConPw(true);
        }  
        console.log("checkPwd : " + e);
    };

    // 약관 동의
    const agreementChange = (e) => {
        setAgreed(e.target.checked);
        console.log("agree : " + e);
    };

    const onClickLogin = async() => {
        const memberReg = await AxiosApi.memberReg(nickName, email, password, agreed);
        console.log(memberReg.data);
        if(memberReg.data === true) {
            setFinishModal(true);
        } else {
            if (!agreed) {
                setModalOpen(true);
                setModelText("이용 약관에 동의해야 합니다.");
                return;
            }
            setModalOpen(true);
            setModelText("회원 가입에 실패 했습니다.");
        }
    }

/*  Back 구현 후 등록 예정
            // 가입 여부 우선 확인
            const memberCheck = await AxiosApi.memberRegCheck(email);
            console.log("가입 가능 여부 확인 : ", memberCheck.data);
            // 가입 여부 확인 후 가입 절차 진행

            if (memberCheck.data === true) {
                console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
                const memberReg = await AxiosApi.memberReg(nickName, email, password, agreed);
                console.log(memberReg.data);
                if(memberReg.data === true) {
                    setFinishModal(true);
                } else {
                    setModalOpen(true);
                    setModelText("회원 가입에 실패 했습니다.");
                }
            } else {
                console.log("이미 가입된 회원 입니다.")
                setModalOpen(true);
                setModelText("이미 가입된 회원 입니다.");
            } 
*/

    const goBack = () => {
        setGoBackPage(true);
    };


    return (
        <SignUpStyle className={goBackPage ? 'goBackStyle' : ''}>
            <div className="signup-page">
                <div className="logo" style={logo}></div>
                <div className="signForm" /*onSubmit={handleSubmit}*/>
                    <div className="form-group">
                        <label htmlFor="name">닉네임:</label>
                        <button>중복확인</button>
                    </div>
                    <input
                        type="text"
                        id="name"
                        value={nickName}
                        onChange={nameChange}
                        required
                        className='textInput'
                    />
                    <div className="hint">
                        {nickName.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{nameMessage}</span>}
                    </div>
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
                    <div className="hint">
                        {email.length > 0 && <span className={`message ${isMail ? 'success' : 'error'}`}>{mailMessage}</span>}
                    </div>
{/*                       이메일 중복 확인 예정    
                    <input
                        type="text"
                        id="checkEmail"
                        value={checkEmail}
                        onChange={checkEmailChange}
                        required
                        className='textInput email2'
                    />
*/}                        
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
                    <div className="hint">
                        {password.length > 0 && <span className={`message ${isPw ? 'success' : 'error'}`}>{pwdMessage}</span>}
                    </div>
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
                    <div className="hint">
                        {checkPassword.length > 0 && <span className={`message ${isConPw ? 'success' : 'error'}`}>{checkPwdMessage}</span>}
                    </div>
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
                        {(isId && isPw && isConPw && agreed && isMail) ?
                        <div className="joinUs joinSuccess" onClick={onClickLogin}>가입하기</div> :
                        <div className="joinFail" onClick={onClickLogin}>가입하기</div>}
                        <div className="backBtn" onClick={goBack}>돌아가기</div>
                    </div>
                    <Modal open={modalOpen} confirm={closeModal} justConfirm={true} header="오류">{modalText}</Modal>
                    <Modal open={finishModal} confirm={()=>nav("/intro")} justConfirm={true} header="성공">회원가입에 성공했습니다!</Modal>
                </div>
            </div>
        </SignUpStyle>
    );
};

export default SignUpPage;
