import React from "react";
import styled from "@emotion/styled";
import { useContext } from "react";
import { MarkerContext } from "../../context/MarkerInfo";
const ReviewCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    margin: 0 2vw;
    padding: 1em;
    box-shadow: 1px salmon;
    .name{
        padding-bottom: 2vh;
        border-bottom: .5px solid #ccc;
        margin-bottom: 2vh;
    }
`;
const ReviewList = styled.div`
    padding-bottom: 2vh;
    height: 14vh;
    display: flex;
    border-bottom: .5px solid #ccc;
    .left{
        flex-basis: 30%;
        background-color: #ccc;
    }
    .right{
        flex-basis: 70%;
        margin-left: 2vw;
    }
    .desc{
        display: flex;
        flex-wrap: wrap;
    }
    .blogNm{
        margin-top: 1vh;
        color: royalblue;
        font-weight: bold;
        font-size: .9em;
    }
    .date{
        font-size: .9em;
    }
`;
const CampReview = () => {

    const context = useContext(MarkerContext);
    const {contentId} = context;

    return(
        <ReviewCard>
            <div className="name">{contentId.facltNm} 의 리뷰</div> {/*참고용 이름입니다*/}
            <ReviewList>
                <div className="left">
                    이미지
                </div>
                <div className="right">
                    <div className="desc">설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명</div>
                    <div className="blogNm">블로그이름</div>
                    <div className="date">2023.05.02</div>
                </div>
            </ReviewList>

        </ReviewCard>
    )
};
export default CampReview;