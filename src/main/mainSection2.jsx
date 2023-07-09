import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";

const Section2 = styled.div`
    margin-top: 40px;
`;

const MainSection2 = () => {
    return(
        <Section2>
            <div>
                <Swiper
                    loop={true}
                    modules={[Navigation, Pagination, Keyboard]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    keyboard={{enable:true}}
                    scrollbar={{ draggable: true }}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </Swiper>
            </div>
        </Section2>
    );
}

export default MainSection2;