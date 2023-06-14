import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import{Keyboard,  Navigation, Pagination } from "swiper";


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




const SliderContainer = ({ selectedCategory }) => {
  
  
  return (
    
    <SwiperStyle>
      {selectedCategory === '텐트' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3>1~2인용 텐트</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
    }
     {selectedCategory === '침낭' && 
     <div className="bedCategory">
    <div className="cardSlide">
    <h3>침낭</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
     <h3>매트</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
     <h3>야전 침대</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
}
{selectedCategory === '라이트' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3>가스 랜턴</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
     <h3>LED 랜턴</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
     <h3>손전등</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
    }
     {selectedCategory === '키친' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3>후라이팬</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
     <h3>조리도구</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
     <h3>주전자</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
    }
     {selectedCategory === '의자' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3>의자</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
     <h3>테이블</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
     <h3>캠핑박스</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
    }
     {selectedCategory === '수납용품' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3>웨건</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
     <h3>루프백</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
     <h3>토일레트리</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
    }
     {selectedCategory === '공구' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3>멀티백</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
     <h3>팩망치</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
     <h3>나이프</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
    }
     {selectedCategory === 'bbq' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3>화로</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
     <h3>스토브</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
     <h3>연료</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
    }
     {selectedCategory === '계절용품' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3>전기요</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
     <h3>선풍기</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
     <h3>팬 히터</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
    }
     {selectedCategory === 'rv용품' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3>차박 텐트</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
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
     <h3>루프백</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
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
     <h3>보온병</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination,Keyboard ]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{
        enabled: true,
      }}
       
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
     </div>
    }
     </SwiperStyle>
     
     
   
  );
  };

export default SliderContainer;