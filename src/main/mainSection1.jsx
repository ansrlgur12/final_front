import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import backImg1 from "../images/backgroundimg1.jpg";
import backImg2 from "../images/backgroundimg2.jpg";
import backImg3 from "../images/backgroundimg3.jpg";


export const Section1 = styled.div`
    width: 100vw;
    margin-top: 10px;
    padding-top: 20%;
    padding-bottom: 25%;
    position: relative;
`;

const MainSection1 = () => {
    const [ImgIndex, setImgIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    // 배경 화면 변경
    useEffect(() => {
        const timer = setTimeout(() => {
            // 다음 배경 화면 인덱스로 변경
            setOpacity(0); // 페이드 아웃 효과를 위해 투명도를 0으로 설정

            setTimeout(() => {
                setImgIndex(prevIndex => (prevIndex + 1) % 3);
            }, 1000); // 1초 후에 이미지 인덱스 변경

            setTimeout(() => {
                setOpacity(1); // 페이드 인 효과를 위해 투명도를 1로 설정
            }, 1100); // 1.1초 후에 투명도를 1로 변경하여 페이드 인 효과 적용
        }, 5000); // 5초마다 변경 (1000ms = 1초)

        return () => clearTimeout(timer);
    }, [ImgIndex]);

    const backImgs1 = {
        backgroundImage: `url(${backImg1})`,
        backgroundSize : 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: ImgIndex === 0 ? opacity : 0, // 현재 인덱스에 해당하는 이미지에만 투명도 적용
        transition: 'opacity 1s ease-in-out' // 페이드 인/아웃 애니메이션 효과 적용
    };
    const backImgs2 = {
        backgroundImage: `url(${backImg2})`,
        backgroundSize : 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: ImgIndex === 1 ? opacity : 0, // 현재 인덱스에 해당하는 이미지에만 투명도 적용
        transition: 'opacity 1s ease-in-out' // 페이드 인/아웃 애니메이션 효과 적용
    };
    const backImgs3 = {
        backgroundImage: `url(${backImg3})`,
        backgroundSize : 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: ImgIndex === 2 ? opacity : 0, // 현재 인덱스에 해당하는 이미지에만 투명도 적용
        transition: 'opacity 1s ease-in-out' // 페이드 인/아웃 애니메이션 효과 적용
    };

    return (
        <Section1>
            <div className='backImg'>
                {ImgIndex === 0 && <div className='backImgs' style={backImgs1} />}
                {ImgIndex === 1 && <div className='backImgs' style={backImgs2} />}
                {ImgIndex === 2 && <div className='backImgs' style={backImgs3} />}
            </div>
            <section></section>
        </Section1>
    );
};

export default MainSection1;
