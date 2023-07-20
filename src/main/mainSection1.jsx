import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import backImg1 from "../images/backgroundimg1.jpg";
import backImg2 from "../images/backgroundimg2.jpg";
import backImg3 from "../images/backgroundimg3.jpg";
import {Swiper, SwiperSlide} from 'swiper/react';
import "../font.css";
import{ Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css/autoplay'

export const Section1 = styled.div`
    display: flex;
    justify-content: center;
    font-family: "Nanum Myeongjo";

    .backImg {
        width: 100vw;
        height: 50vh;
        overflow: hidden;
        position: relative;
        display: flex;
    }
    img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        object-position: center;
    }
    .mainText {
        top: 50%;
        left: 30vw;
        z-index: 1;
        font-size: 2rem;
        color: rgb(186, 210, 170);
        font-weight: bold;
        position: absolute;
        transform: translate(-50%, -50%);
        opacity: 0; /* 초기에 텍스트를 숨김 */
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6); /* 테두리 색과 크기 설정 */
        transition: opacity 0.6s ease, top 0.6s ease-in; /* 애니메이션 효과 설정 */
    }
    .mainText2 {
        left: 30vw;
        z-index: 1;
        font-size: 2rem;
        color: rgb(186, 210, 170);
        font-weight: bold;
        position: absolute;
        transform: translate(-50%, -50%);
        opacity: 0; /* 초기에 텍스트를 숨김 */
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 테두리 색과 크기 설정 */
        transition: opacity 0.6s ease, top 0.6s ease-in-out; /* 애니메이션 효과 설정 */
    }
    .mainText3 {
        top: 50%;
        left: 30vw;
        z-index: 1;
        font-size: 2rem;
        color: rgb(186, 210, 170);
        font-weight: bold;
        position: absolute;
        transform: translate(-50%, -50%);
        opacity: 0; /* 초기에 텍스트를 숨김 */
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6); /* 테두리 색과 크기 설정 */
        transition: opacity 0.6s ease, top 0.6s ease-in; /* 애니메이션 효과 설정 */
    }
    
    .text2, .text3{
        color: white;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 테두리 색과 크기 설정 */
    }
    .text2{
        color: rgb(255, 254, 179);
        text-shadow: 2px 2px 5px rgba(121, 121, 121, 0.5);
    }
    .text3{
        color: rgb(214, 183, 146);
        text-shadow: 2px 2px 5px rgba(121, 121, 121, 0.5);
    }
    .show {
        opacity: 1; /* 텍스트를 나타냄 */
        top: calc(50% - 10px); /* 위로 10px 이동 */
    }

    .mainBtn{
        width: 5rem;
        height: 2.5rem;
        font-size: 1rem;
        border-radius: 10px;
    }
    .mainBtn:hover{
        background-color: #2D6247;
    }
    .textLine{
        border: 1px solid #afafaf;
    }
    .swiper-button-prev,
    .swiper-button-next {
        opacity: 0.5;
        color: white !important;
        display: none;
    }

    @media screen and (max-width: 768px) {
        .backImg {
            /* padding-top: 10vh; */
            width: 100vw;
            height: 30vh;
            overflow: hidden;
        }
        img {
            width: 100%;
            height: 50vh;
            object-fit: cover;
            object-position: center;
        }
        .mainText {
            margin-left: 7vw;
            margin-top: 7vh;
            z-index: 1;
            font-size: 1.1rem;
            font-weight: bold;
            position: absolute;
            transform: translate(-50%, -50%);
            opacity: 0; /* 초기에 텍스트를 숨김 */
            transition: opacity 0.6s ease, top 0.6s ease-in; /* 애니메이션 효과 설정 */
        } 
        .mainText2 {
            margin-left: 20vw;
            margin-top: 5vh;
            z-index: 1;
            width: 90vw;
            font-size: 0.9rem;
            color: rgb(186, 210, 170);
            font-weight: bold;
            position: absolute;
            transform: translate(-50%, -50%);
            opacity: 0; /* 초기에 텍스트를 숨김 */
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 테두리 색과 크기 설정 */
            transition: opacity 0.6s ease, top 0.6s ease-in; /* 애니메이션 효과 설정 */
        }
        .mainText3 {
            width: 80vw;
            margin-left: 15vw;
            margin-top: 7vh;
            z-index: 1;
            font-size: 0.9rem;
            font-weight: bold;
            position: absolute;
            transform: translate(-50%, -50%);
            opacity: 0; /* 초기에 텍스트를 숨김 */
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6); /* 테두리 색과 크기 설정 */
            transition: opacity 0.6s ease, top 0.6s ease-in; /* 애니메이션 효과 설정 */
        }
        .show {
            opacity: 1; /* 텍스트를 나타냄 */
            top: calc(50% - 10px); /* 위로 10px 이동 */
        }
        .swiper-button-prev,
        .swiper-button-next {
            opacity: 0.5;
            color: white !important;
            margin: 0;
            padding: 0;
            display: none;
        }
    }
`;

const MainSection1 = () => {
    const [showText, setShowText] = useState(false);

    useEffect(()=> {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const slideChange = () => {
        setShowText(false);
    };

    const slideChangeEnd = () => {
        setShowText(true);
    }
    

    return (
        <Section1>
            <div className='backImg'>
                <Swiper
                direction="horizontal" // 가로 방향 슬라이드 (기본값)
                loop = {true}
                modules = {[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                keyboard={{enable:true}}
                scrollbar={{ draggable: true}}
                onSlideChange={slideChange}
                onSlideChangeTransitionEnd={slideChangeEnd}
                autoplay={{
                    delay: 5000, // 3초마다 슬라이드 변경
                    disableOnInteraction: false, // 사용자 클릭 등 변경 시 자동 슬라이드 정지 여부 true : 멈춤
                }}
                >
                    <SwiperSlide>
                        <img src={backImg1} alt=""/>
                        <div className={`mainText ${showText ? 'show' : ''}`} >
                            <p className="textTitle">
                                '자연과 하나가 되십시오'
                                <br/>
                                완벽한 여행을 위해 필요한 것이 있습니다.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={backImg2} alt=""/>
                        <div className={`mainText2 ${showText ? 'show' : ''}`} >
                            <p className="textTitle text2">
                                도시의 소음과 시간의 구속을 벗어나,
                                <br/>
                                자연과 조화로운 휴식과 자유를 선사하는
                                <br/>
                                특별한 여정을 떠나보세요.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={backImg3} alt=""/>
                        <div className={`mainText3 ${showText ? 'show' : ''}`} >
                            <p className="textTitle text3">
                                자연 속에서 불을 지피고 별을 바라보며, 
                                <br/>
                                내 안에 잠든 평화를 깨워보아요.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Section1>
    );
};

export default MainSection1;

