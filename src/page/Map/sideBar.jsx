import React, { useState } from "react";
import styled from "styled-components"
import SideBarList from "./sideBarList";

const SidebarStyle = styled.div`

position: absolute;
z-index: 1;
right: 1.5vw;

.container{
    width: 23vw;
    height: 75vh;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
}
    
.hide{
    display: none;
}

.titleBar{
    background-color: rgba(45, 98, 71, 0.8);
    height: 8%;
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

    const hideMenuBar = () => {
        if(closeMenu) setCloseMenu(false);
        else setCloseMenu(true);
    }

    return(
        <SidebarStyle>
            <div className={ closeMenu ? "hide" : "container"}>
                <div className="titleBar">
                    <input type="text" />
                    <button>검색</button>
                    <button onClick={hideMenuBar}>숨기기</button>
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
                    <SideBarList />
                </div>
            </div>
            <button className={ closeMenu ? "hideBtn" : "hide"} onClick={hideMenuBar}>펼치기</button>
        </SidebarStyle>
    )
}
export default Sidebar;