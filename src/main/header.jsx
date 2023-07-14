import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImg from "../images/CAMO로고.png"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MarkerContext } from "../context/MarkerInfo";
import { IconButton, Badge } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../API/UserInfo";
import SearchBox from "./search/searchBox";
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Commons/Modal";

const HeaderStyle = styled.div`
    box-sizing: border-box;
    box-shadow: 1px 2px 5px #ccc;
    position: fixed;
    z-index: 10;
    background-color: white;
    width: 100vw;
    margin: 0;

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
        width: 240px;
        height: 80px;
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
        width: 60px;
        height: 60px;
        display: inline-block;
        align-items: center;
        font-size: 12px;
        cursor: pointer;
    }
    .menu1:hover,.menu2:hover,.menu3:hover,.menu4:hover{
        cursor: pointer;
        opacity: 0.5;
    }
    .logOut{
        cursor: pointer;
    }
    .hamburgerBtn{
        display: none;
    }
    .hamburgerHide{
        display: none;
    }
    .hamburgerMenu{
        display: none;
    }

    @media screen and (max-width: 768px) {
        .headerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logoImage {
      display: block; // 로고 보이기
      margin-left: 5vw;
    }
    
    .navContainer {
      display: none; // 네비게이션 바 숨기기
    }
    .hamburgerBtn{
        display: block;
        margin-right: 10vw;
        cursor: pointer;
    }
    .headerRight {
      display: none; // 오른쪽 상단 메뉴 보이기
    }
    .hamburgerHide{
        display: none;
    }
    .hamburgerShow{
        display: block;
    }
    .hamburgerMenu{
        display: flex;
        justify-content: right;
        align-items: center;
    }
    .hamburgerMenu > *{
        margin-right: 1em;
    }
    li {
        list-style: none;
        margin: 20px;
        font-size: 1em;
        color: green;
        font-weight: bold;
        margin-top: 0;
    }
  }
    
`;
export const ModalStyle = styled.div`

 

 .btnWrapper{
    display: flex;
  gap:4rem;
  .modalBtn{
    width:80px;
  border-radius: 10px;
  color: #fff;
  background-color: #2D6247;
  padding:10px;
  }
 
 }
`

const Header = () =>{
    
    const nav = useNavigate();
    const { cart } = useContext(CartContext); // CartContext를 사용하여 cart를 가져옵니다
    const context = useContext(MarkerContext);
    const {setCurrentData, setMarkerLat, setMarkerLng, setZoomLev} = context;
    const userInfo = useContext(UserContext);
    const {setUserEmail, setPassword, setIsLogin, IsLogin, userImage, id, userEmail} = userInfo;
    const itemsCount = cart.reduce((accum, item) => accum + item.quantity, 0); // 장바구니에 있는 모든 항목의 개수를 계산합니다
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    //const {setUserEmail, setPassword, setIsLogin, IsLogin} = userInfo;
    //const itemsCount = cart.reduce((count, item) => count + item.quantity, 0); // 장바구니에 있는 모든 항목의 개수를 계산합니다
    const [isOpen, setIsOpen] = useState(false);

   
       
      
    const handleCartClick = () => {
        if (!userEmail) {
            setIsOpen(true);
        } else {
            nav("/cart");
        }
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(()=>{

    },[hamburgerClicked])

    const onClickHamburger = () => {
        if(hamburgerClicked){
            setHamburgerClicked(false);
        }else{
            setHamburgerClicked(true);
        }
    }

    const logoImage = { // 로고 이미지를 객체로 만들어서 return 문에 객체만 삽입
        backgroundImage: `url(${logoImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    };

    const profileImg = {
        backgroundImage : `url(${userImage})`,
        backgroundSize : 'contain',
        backgroundRepeat : 'no-repeat'
        
    }
    
    const onClickNormalCamping = () => {
        setCurrentData("normal");
        setMarkerLat(37.50802)
        setMarkerLng(127.062835)
        setZoomLev(10)
        nav("/mapMain");
    }

    const onClickOjinojiCamping = () => {
        setCurrentData("ojinoji");
        nav("/ojinoji")
    }

    const logOut = () => {
        setUserEmail(""); 
        setPassword(""); 
        setIsLogin(false); 
        nav("/intro");
    }
    
    // 성능최적화. nav바에 적용
    // 전역관리

    // 테스트 

    return(
        <>
            <HeaderStyle>
                <div className="headerContainer">
                    <div className="logo">
                        <div className="logoImage logo" onClick={()=>nav("/")} style={logoImage}></div>
                    </div>
                    <div className="menu">
                        <nav className="navibar">
                            <ul className="navContainer">
                                <li className="menu1" onClick={onClickNormalCamping}>유료캠핑장</li>
                                <li className="menu2" onClick={onClickOjinojiCamping}>오지·노지</li>
                                <li className="menu3" onClick={()=>nav("/community")}>캠핑정보</li>
                                <li className="menu4" onClick={()=>nav("/shopMain")}>쇼핑</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="headerRight">
                        <SearchBox />
                        <UserOutlined onClick={()=>nav("/myPage")}/>
                        {/* <div className="logOut" onClick={logOut}>로그아웃</div> */}
                        <IconButton aria-label="cart" onClick={handleCartClick} >
                        <Badge badgeContent={itemsCount} color="success" >
                        <ShoppingCartRounded />
                        </Badge>
                        </IconButton>
                    </div>
                    <div className="hamburgerBtn" onClick={onClickHamburger}><FontAwesomeIcon icon={faBars} size="2xl" color="green"/></div>
                </div>
                <div className={hamburgerClicked ? "hamburgerShow" : "hamburgerHide"}>
                    <div className="hamburgerMenu">
                        <SearchBox />
                        <UserOutlined onClick={()=>nav("/myPage")}/>
                        <IconButton aria-label="cart" onClick={()=>nav("/cart")} >
                        <Badge badgeContent={itemsCount} color="success" >
                        <ShoppingCartRounded />
                        </Badge>
                        </IconButton>
                    </div>
                    <li className="menu1" onClick={onClickNormalCamping}>유료캠핑장</li>
                    <li className="menu2" onClick={onClickOjinojiCamping}>오지·노지</li>
                    <li className="menu3" onClick={()=>nav("/community")}>캠핑정보</li>
                    <li className="menu4" onClick={()=>nav("/shopMain")}>쇼핑</li>
                </div>
            </HeaderStyle>
            <ModalStyle>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <p>로그인 후 확인 가능합니다.</p>
                <div className="btnWrapper">
                    <button className="modalBtn" onClick={() => {
                        closeModal();
                        nav("/intro");
                    }}>
                        로그인
                    </button>
                </div>
            </Modal>
            </ModalStyle>
        </>
    );
}

export default Header;
