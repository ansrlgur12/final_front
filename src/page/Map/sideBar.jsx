import React, { useState } from "react";
import styled from "styled-components"
import SideBarList from "./sideBarList";

const SidebarStyle = styled.div`

position: fixed;
z-index: 1;
right: 1.5vw;

.container {
    width: 23vw;
    height: 75vh;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
  }

.slideOut {
    transform: translateX(110%); /* 오른쪽으로 이동하여 숨김 */
  }

.slideIn {
    transform: translateX(0%); /* 다시 제자리로 이동하여 펼쳐짐 */
}
    
.hide{
    display: none;
}

.hideBtn{
    border-radius: 50px;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 35vh;
    right: 24vw;
    border: 0px;
    background-color: rgba(146, 159, 139,0.8);
    color: white;
}
.hideBtn:hover{
    background-color: rgba(45, 98, 71, 0.8);
    font-size: 1em;
    font-weight: bold;
}
.searchBar{
    height: 45%;
    width: 17vw;
    outline: none;
}
.searchBtn{
    height: 60%;
}

.titleBar{
    background-color: rgba(45, 98, 71, 0.8);
    height: 9%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.locationSelect{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8%;
    border-bottom: 1px solid #ccc;
}

.selectBar{
    width: 30%;
    height: 70%;
    border-radius: 0px;
}
.selectBar + .selectBar{
    margin-left: 5px;
}
.sortBar{
    padding-left: 6px;
    height: 5%;
    display: flex;
    justify-content: baseline;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.sortBy{
    font-size: .7rem;
    margin: 5px 8px 5px 8px;
}
.selected{
    font-size: .8rem;
    color: orangered;
    font-weight: bold;
}
`;

const Sidebar = () => {

    const [closeMenu, setCloseMenu] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const hideMenuBar = () => {
        setCloseMenu(!closeMenu);
    }

    return(
        <SidebarStyle>
             <div className={`container ${closeMenu ? "slideOut" : "slideIn"}`}>
                <div className="titleBar">
                    <input className="searchBar" type="text" placeholder="캠핑장 이름을 검색하세요"/>
                    <button className="searchBtn">검색</button>
                </div>
                <div className="locationSelect">
                    <select className="selectBar" name="" id="">
                        <option value="">전국</option>
                    </select>
                    <select className="selectBar" name="" id="">
                        <option value="">시, 군, 구</option>
                    </select>
                    <select className="selectBar" name="" id="">
                        <option value="">읍, 면, 동</option>
                    </select>
                </div>
                <div className="sortBar">
                    <p className="sortBy selected">등록순</p>
                    <p className="sortBy">정복순</p>
                    <p className="sortBy">조회순</p>
                    <p className="sortBy">추천순</p>
                    <p className="sortBy">댓글순</p>
                </div>
                <div className="locationList">
                    <button className="hideBtn" onClick={hideMenuBar}>{closeMenu ? "펼치기" : "숨기기"}</button>
                    <SideBarList />
                </div>
            </div>
            
        </SidebarStyle>
    )
}
export default Sidebar;