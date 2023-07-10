import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../API/TestAxios";

const Section3 = styled.div`
    margin-top: 40px;
    align-items: center;
    display: flex;
    justify-content: center;

    .select{
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 6px;
        margin: 10px;
        background-color: #ccc;
    }
    .menuChoice{
        display: flex;
        margin: 0;
    }
    .topNav{
        margin: 0;
    }
    .sTop{
        width: 90vw;
        height: auto;
        background-color: #56966b;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        margin-bottom: 0;
    }
    .sBottom{
        background-color: #eaeaea;
        height: 400px;
        margin-top: 0;
    }
`;

const MainSection3 = (props) => {
    const nav = useNavigate();
    const [campList, setCampList] = useState("");

    useEffect(() => {
        const campList = async() => {
            const rsp = await AxiosApi.getCampData(props.lt, props.sigungu);
            setCampList(rsp.data);
        }
        campList();
    }, [props.sigungu]);

    const onClick = (lt) => {
        nav(`/detailPage/${lt}`)
    }

    return(
        <Section3>
            <div className="select">
                <div className="sTop">
                    <nav className="topNav">
                        <ul className="menuChoice">
                            <li className="orderName">이름순</li>
                            <li className="orderNew">최신순</li>
                            <li className="orderLike">추천순</li>
                        </ul>
                    </nav>
                </div>
                <div className="sBottom">
                    {campList && campList.map(camp => (
                        <Swiper
                            loop={true}
                            modules={[Navigation, Pagination, Keyboard]}
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation
                            keyboard={{enable:true}}
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <div className="campContainer" key={camp.lt}>
                                    <div className="campWrap">
                                        <div className="campImg">{camp.firstImageUrl}</div>
                                        <div className="campTitle">{camp.facltNm}</div>
                                        <div className="camplikes">추천 수 : {camp.likes}</div>


                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    ))}
                </div>
            </div>
        </Section3>
    );
};

export default MainSection3;
/*
            <EventDescStyle>
                {eventList && eventList.map(event => (
                    <div className="eContainer" key={event.eventNum} onClick={()=>onClick(event.eventNum)}>
                        <div className="eventWarp">
                            <div className="eventPost" style={{backgroundImage: `url(${event.eventImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                            <div className="eNum">{event.eventNum}</div>
                            <div className="eTitle">{event.eventTitle}</div><br/>
                                <p className="eDate">
                                {event.startEvent} ~ {event.endEvent}
                                </p>
                        </div>
                    </div>
                ))}
            </EventDescStyle>
*/