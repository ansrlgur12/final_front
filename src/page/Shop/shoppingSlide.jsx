import React, {useState,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import{Keyboard,  Navigation, Pagination } from "swiper";
import { Favorite, AddShoppingCart, ArrowCircleRightOutlined } from "@mui/icons-material";
import { Tooltip } from "@material-ui/core";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../API/TestAxios";


const SwiperStyle = styled.div`


.swiper {
    width: 800px;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
    border:none;

  }
  .swiper-slide{
    position: relative;
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
    border: none;
  }
  .swiper-slide:before{
    content:"";
  position:absolute;
  width:100%;
  height:100%;
  
  background-color:rgba(0,0,0,0);
  }
  .swiper-slide:hover::before {
  
    border-radius: 8px;
  background-color:#ede5e5;
  opacity: 0.8;
    
    transition: all 0.4s ease-out;
}
  .swiper-slide:hover button{
  display: block;
}
  
  .swiper-slide button{
    position:absolute;
  transform: translate(-50%, -50%);
  display: none;
  }
  .swiper-slide button.btn{
    top:50%;
    right:50%;
  }
  .swiper-slide button.btn2{
    top:50%;
    right:10%;
  }
  .swiper-slide button.btn3{
    top:88%;
    right:-5%;
  }  
  .swiper-slide img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1px 1px 1px #ccc;
    border: 1px solid #ccc;
     
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
  margin-top:-130px;
  

}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  margin-bottom: 10px;
}
  
 .brand{
  font-size: 0.5rem;
 } 
 .name{
  width:246px;
  height:35px;
  font-size: 0.8rem;
 }
 .price{
  font-size: 1rem;
  display: flex;
  justify-content: end;
  font-weight: bold;
 }



 
 
  
  
  
  
 

`




const SliderContainer = ({ selectedCategory }) => {
  
    const [products, setProducts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await AxiosApi.getItemList();
        if (response.status === 200) {
          setProducts(response.data);
          console.log(response.data)
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchProducts();
  }, []);

     const IconButtons = () =>{
    return(
      <>
      
     <Tooltip title="찜 하기">
    <IconButton className="btn" color="error" aria-label="favorite" >
    <Favorite />
  </IconButton>
  </Tooltip>
  <Tooltip title="장바구니 담기">
  <IconButton className="btn2" color="success" aria-label="add to shopping cart" >
  <AddShoppingCart />
</IconButton>
</Tooltip>
<Tooltip title="구매 페이지 이동" placement="top">
  <IconButton className="btn3"  aria-label="add to shopping cart" onClick={()=>nav("/ProductDetailForm")} >
  <ArrowCircleRightOutlined />
</IconButton>
</Tooltip>
</>
  )

  }
  return (
    
    <SwiperStyle>
      {selectedCategory === '텐트' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">1-2인용 텐트 </h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
      
      {products.filter(product => product.category4Name === '1-2인용').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       )) };
       
       
     
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">3-4인용 텐트</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
       
       {products.filter(product => product.category4Name === '3-4인용').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
       
     
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">5-6인용 텐트</h3>
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
       
       {products.filter(product => product.category4Name === '5-6인용').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
       
     
  
     </Swiper>
     </div>
     </div>
    }
     {selectedCategory === '취침장비' && 
     <div className="bedCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">침낭</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
       {products.filter(product => product.category4Name === '침낭').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">매트</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
       
       {products.filter(product => product.category4Name === '매트').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">야전침대</h3>
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
       
       {products.filter(product => product.category4Name === '야전침대').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     </div>
     </div>
}
{selectedCategory === '라이트' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">가스랜턴</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
      
      {products.filter(product => product.category4Name === '가스랜턴').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">LED랜턴</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
       
       {products.filter(product => product.category4Name === 'led랜턴').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">손전등</h3>
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
       
       {products.filter(product => product.category4Name === '손전등').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     </div>
     </div>
    }
     {selectedCategory === '키친' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">후라이팬</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
       {products.filter(product => product.category4Name === '후라이팬').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">조리도구</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
       
       {products.filter(product => product.category4Name === '조리도구').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">주전자</h3>
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
       
       {products.filter(product => product.category4Name === '주전자').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     </div>
     </div>
    }
     {selectedCategory === '캠핑가구' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">캠핑 의자</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
      
      {products.filter(product => product.category4Name === '캠핑의자').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">캠핑 테이블</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
       
       {products.filter(product => product.category4Name === '캠핑테이블').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">캠핑박스</h3>
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
       
       {products.filter(product => product.category4Name === '캠핑박스').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     </div>
     </div>
    }
     {selectedCategory === '수납용품' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">웨건</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
      
      {products.filter(product => product.category4Name === '웨건').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">루프백</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
       
       {products.filter(product => product.category4Name === '루프백').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">토일레트리</h3>
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
     > {products.filter(product => product.category4Name === '토일레트리').map(product => (
      <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
      ))}
     
  
     </Swiper>
     </div>
     </div>
    }
     {selectedCategory === '공구' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">멀티백</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
       {products.filter(product => product.category4Name === '멀티백').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">팩 망치</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
    {products.filter(product => product.category4Name === '팩망치').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">다용도 칼</h3>
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
       
       {products.filter(product => product.category4Name === '다용도칼').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     </div>
     </div>
    }
     {selectedCategory === 'bbq' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">화로</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
 {products.filter(product => product.category4Name === '화로').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">스토브</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
       
       {products.filter(product => product.category4Name === '스토브').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">연료</h3>
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
       
       {products.filter(product => product.category4Name === '연료').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     </div>
     </div>
    }
     {selectedCategory === '계절용품' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">전기요</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
      
      {products.filter(product => product.category4Name === '전기요').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">선풍기</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
       
       {products.filter(product => product.category4Name === '선풍기').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">팬 히터</h3>
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
       
       {products.filter(product => product.category4Name === '팬히터').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
  
     </Swiper>
     </div>
     </div>
    }
     {selectedCategory === 'rv용품' && 
   <div className="tentCategory">
    <div className="cardSlide">
    <h3 className="cartegory4Name">차박 텐트</h3>
    <Swiper
      loop ={true}
      
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      keyboard={{enable:true}}
      
      scrollbar={{ draggable: true }}
    >
      
      {products.filter(product => product.category4Name === '차박텐트').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
    
 
    </Swiper>
    
    </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">루프백</h3>
     <Swiper
       loop ={true}
       
       modules={[Navigation, Pagination, Keyboard]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       keyboard={{enable:true}}
       
       scrollbar={{ draggable: true }}
     >
       
       {products.filter(product => product.category4Name === '루프백').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
     
  
     </Swiper>
     
     </div>
     <div className="cardSlide">
     <h3 className="cartegory4Name">보온/보냉병</h3>
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
       
       {products.filter(product => product.category4Name === '보온/보냉병').map(product => (
       <SwiperSlide key={product.id}> <img src={product.imageUrl} alt="" /><IconButtons/><div className="title"><p className="brand">{product.brand || 'brand'}</p><div className="name">{product.productName}</div><span className="price">{product.price}원</span></div></SwiperSlide>
       ))}
  
     </Swiper>
     </div>
     </div>
    }
     </SwiperStyle>
     
     
   
  );
  };

export default SliderContainer;