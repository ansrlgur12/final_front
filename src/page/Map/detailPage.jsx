import styled from "@emotion/styled";
import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MarkerContext } from "../../context/MarkerInfo";
import VisibilityButton from "../../Commons/visibility";
import FavoriteButton from "../../Commons/favoriteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faFlag, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import ShareButton from "../../Commons/shareButton";

const DetailContainer = styled.div`
    z-index: 2;
    position: fixed;
    right: -67rem;
    bottom: 6vh;
.container{
    width: 40vw;
    height: 78vh;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
}
.closeBtn{
    border-radius: 50px;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 35vh;
    right: 41vw;
    border: 0px;
    background-color: rgba(146, 159, 139,0.8);
    color: white;
}
.closeBtn:hover{
    background-color: rgba(45, 98, 71, 0.8);
    font-size: 1em;
    font-weight: bold;
}
.slideOut {
    
    transform: translateX(0%); /* 다시 제자리로 이동하여 펼쳐짐 */
   
  }

.slideIn {
    transform: translateX(-180%); /* 오른쪽으로 이동하여 숨김 */
}
.hide {
    display: none;
}   
    
    
`;
const TitleBar = styled.div`
    background-color: rgba(45, 98, 71, 0.8);
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;
const TitleBarLeft = styled.h3`
    margin-left: 1em;
    color: #f6f6f6;
`;
const TitleBarLeftLong = styled.div`
    margin-left: 1em;
    color: #f6f6f6;
    font-size: 1.1em;
    font-weight: bold;
`;
const TitleBarRight = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
`;
const Addr = styled.div`
    font-size: .75em;
    font-weight: 600;
    margin-right: .5em;
    display: flex;
    justify-content: space-between;
    line-height: 1;
    margin-top: 1em;
    .addr{
        padding: 0;
        color: white;
        margin: 0;
    }
    .addr + .addr{
        margin-left: .3em;
    }
`;
const ViewCount = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 1em;
    
    .countNm{
        font-weight: 600;
        color: #313131;
    }
`;
const LickCommentShare = styled.div`
    height: 7vh;
    width: 90%;
    margin: auto;
    border-bottom: .5px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LikeCommentArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
const Number = styled.p`
    margin-left : .5em;
    margin-right: .8em;
    font-weight: 600;
`;
const ShareArea = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: .9em;
`;
const Section = styled.div`
    height: 7vh;
    display: flex;
    align-items: center;
    width: 80%;
    margin-left: 1em;
    justify-self: baseline;
    .km{
        color: red;
        font-weight: bold;
        margin-left: 1em;
    }
    .campInfo{
        font-weight: bold;
        font-size: .85em;
        margin-left: .5em;
    }
`;

const DetailPage = (props) => {
    const {open, close, campInfo} = props;
    const context = useContext(MarkerContext);

    const splitAddress = (address) => {
        const addressParts = address.split(' ');
        const province = addressParts[0]; // '강원도'
        const city = addressParts[1]; // '춘천시'
        const town = addressParts[2]; // '남면 가옹개길 52-9'
        return { province, city, town };
    };

const url = "https://map.naver.com/v5/directions/14111340.310128096,4535416.507812284,%EC%9D%BC%EC%82%B0%ED%9C%B4%EB%A8%BC%EB%B9%8C2%EC%B0%A8%EC%95%84%ED%8C%8C%ED%8A%B8,19055891,PLACE_POI/14205872.331903983,4501898.402669169,%EC%96%91%ED%8F%89%EC%88%98%EB%AA%A9%EC%9B%90%20%EC%BA%A0%ED%95%91%EC%9E%A5,32862772,PLACE_POI/-/transit?c=9,0,0,0,dh"
    return(
        <DetailContainer>
            <div className={`container ${open ? "slideIn" : "slideOut"}`}>
                
                <button className={open ? "closeBtn" : "hide"} onClick={close}>숨기기</button>
                {campInfo && campInfo.map((campInfo) => {
                    const { province, city, town } = splitAddress(campInfo.addr1);

                    return(
                    <>
                    <div className="detailPage" key={campInfo.facltNm}>
                    <TitleBar>
                        <TitleBarLeft>{campInfo.facltNm}</TitleBarLeft>
                        <TitleBarRight>
                            <Addr>
                                <p className="addr">{province}</p>
                                <p className="addr">＞</p>
                                <p className="addr">{city}</p>
                                <p className="addr">＞</p>
                                <p className="addr">{town}</p>
                            </Addr>
                            <ViewCount>
                                <VisibilityButton />
                                <div className="countNm">3</div>
                            </ViewCount>
                        </TitleBarRight>
                    </TitleBar>
                    <LickCommentShare>
                        <LikeCommentArea>
                            <FontAwesomeIcon icon={faHeart} size="lg" color="red"/>
                            <Number>3</Number>
                            <FontAwesomeIcon icon={faComment} size="lg" color="green"/>
                            <Number>3</Number>
                            <FontAwesomeIcon icon={faFlag} size="lg" color="#ff8400"/>
                            <Number>3</Number>
                        </LikeCommentArea>
                        <ShareArea>
                            공유하기
                            <ShareButton />
                        </ShareArea>
                    </LickCommentShare>
                    <Section>
                        <FontAwesomeIcon icon={faLocationDot} size="lg" color="#9c9c9c" />
                        <div className="km">152.4km</div>
                        <div className="campInfo">{campInfo.addr1}</div>
                    </Section>
                    <Section>
                        <FontAwesomeIcon icon={faPhone} size="lg" color="#9c9c9c" />
                        <div className="campInfo">{campInfo.tel ? campInfo.tel : "전화번호 없음"}</div>
                    </Section>
                    
                    <div></div>
                    <a href={url}>길찾기</a>
                    <div>{campInfo.tooltip}</div>
                    </div>
                    </>
                    );
                })}
            </div>
        </DetailContainer>
    )
}
export default DetailPage;