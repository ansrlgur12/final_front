// import React, { useContext, useState } from "react";
// import { styled } from 'styled-components';
// import KakaoLogin from "../../API/KaKaoLogin";
// import SignUpPage from "./signUp";
// import AxiosApi from "../../API/TestAxios";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../API/UserInfo";

// const LoginStyle = styled.div`
// // 스타일 부분
// `;

// const SignUpStyle = styled.div`
// // 스타일 부분
// `;

// const Login = () => {
//     const { isLogin, setIsLogin } = useContext(UserContext);
//     const [showSign, setShowSign] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const navigate = useNavigate();

//     const onKeyPress = (e) => {
//       if (e.key === 'Enter') {
//         onClickLogin();
//       }
//     };

//     const closeModal = () => {
//         setModalOpen(false);
//     }

//     const validateEmail = (email) => {
//         // 이메일 유효성 검사 로직 구현
//         // true: 유효한 이메일, false: 유효하지 않은 이메일
//     };

//     const validatePassword = (password) => {
//         // 비밀번호 유효성 검사 로직 구현
//         // true: 유효한 비밀번호, false: 유효하지 않은 비밀번호
//     };

//     const onClickLogin = async () => {
//         if (validateEmail(email) && validatePassword(password)) {
//             try {
//                 await AxiosApi.memberLogin(email, password);
//                 setIsLogin(true);
//                 console.log("로그인 성공");
//                 navigate("/dashboard"); // 로그인 성공 후 이동할 경로 설정
//             } catch (error) {
//                 console.error("로그인 실패:", error);
//             }
//         } else {
//             console.log("유효하지 않은 이메일 또는 비밀번호");
//         }
//     };

//     const signBtnClick = () => {
//         setShowSign(true);
//     };

        
//     return(
//         <LoginStyle>
//                 <div class="container">
//                     <div className="loginLogo" style={logo}></div>
//                     <form>
//                         <input type="text" placeholder="사용자 이름 또는 이메일" required className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
//                         <input type="password" placeholder="비밀번호" required className="loginInput" onKeyPress={onKeyPress} value={password} onChange={(e) => setPassword(e.target.value)}/>
//                         {((email.length >= 5 && validateEmail(email)) || validateEmail(email) && validatePassword(password)) ? 
//                         <button className="loginButton" type="submit" onClick={onClickLogin}>로그인</button> :
//                         <button className="notLoginButton" type="submit" onClick={onClickLogin}>로그인</button> }
//                     </form>
//                     <div className="other">
//                         <div className="other1">계정찾기</div>
//                         <div className="other2" onClick={signBtnClick}>회원가입</div>
                        
//                     </div>
//                     <div className="snsLogin">
//                         <div className="kakao" style={kakaoLogo}><KakaoLogin/></div>
//                         <div className="naver" style={naverLogo}></div>
//                         <div className="google" style={googleLogo}></div>
//                     </div>
//                 </div>
//                 <SignUpStyle className={showSign ? "showSign" : ""}>
//                     {showSign && <SignUpPage />}
//                 </SignUpStyle>
//         </LoginStyle>
//     );
// }
// export default Login;

