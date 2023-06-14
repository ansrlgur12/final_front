import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import{  Navigation, Pagination } from "swiper";


const SwiperStyle = styled.div`


.swiper {
    width: 800px;
    padding-top: 50px;
    padding-bottom: 50px;
    border:none;

  }
  .swiper-slide{
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
 
   
  }
  .swiper-slide img{
    display: block;
    width: 100%;
    border-radius: 8px;
  }
  .swiper-slide :hover{
    cursor: pointer;
    opacity: 0.5;
  }
  .swiper-scrollbar{
    display: none;

  }
  .swiper-pagination-bullet{
    display: none;
  }
  .swiper-button-prev,
.swiper-button-next {
  background-color: #fff;
  opacity: 0.5;
  padding: 15px 3px;
  border-radius: 20px;
  color: black !important;
  margin-top: -44px;
  

}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  margin-bottom: 10px;
}
  .cardSlide{
    border:none;
  }
 
  
  
  
  
 

`




const SliderContainer = () => {
  
  
  return (
    <SwiperStyle>
   
    <div className="cardSlide">
    <h3>1~2인용 텐트</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      
      scrollbar={{ draggable: true }}
    >
      
      <SwiperSlide> <img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3>3~4인용 텐트</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       
       scrollbar={{ draggable: true }}
     >
       
       <SwiperSlide> <img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
     
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3>5~6인용 텐트</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       
       scrollbar={{ draggable: true }}
     >
       
       <SwiperSlide> <img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://source.unsplash.com/1024x768/?nature" alt="" /></SwiperSlide>
     
  
     </Swiper>
     </div>
     </SwiperStyle>
   
  );
  };

export default SliderContainer;