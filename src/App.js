import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './main/mainPage';
import ShopMain from './page/Shop/shopMain';
import MapMain from './page/Map/mapMain';
import Login from './main/login/login';
import KakaoLogin from './API/KaKaoLogin';

// 게시판
// import Post from './page/MyPage/section/post'; // 회의 후 진행

// 마이 페이지
import MyPage from './page/MyPage/myPage';
import UserInfo from './page/MyPage/section/userInfo';
import Delete from './page/MyPage/section/delete';
import OrderedProduct from './page/MyPage/section/orderProduct';
import Cart from './page/MyPage/section/cart';
import NewPassword from './page/MyPage/section/newPassword';
import UserEdit from './page/MyPage/section/userEdit';
import MarkerStore from './context/MarkerInfo';
import MyComments from './page/MyPage/section/myComments';
import ProductDetailForm from './page/Shop/productDetail';
import Intro from './main/intro';


function App() {
/*
  ChannelService.boot({
    "pluginKey": "c9dca6c0-c10b-43ae-8b33-46985229621d",
    "memberId": "유저ID",
    "profile": {
      "name": "유저Name",
      "email": "유저Email",
      "id": "유저ID"
    }
  });
*/
  return (
    <div className="App">
      <MarkerStore>
      <Router>

          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/intro' element={<Intro/>} />
            <Route path='/shopMain' element={<ShopMain />} />
            <Route path='/mapMain' element={<MapMain />} />
            {/* <Route path='/post' element={<Post />} /> */}
            <Route path='/MyComments' element={<MyComments />} />
            <Route path='/myPage' element={<MyPage />} />
            <Route path='/userInfo' element={<UserInfo />} />
            <Route path="/UserInfo" element={<UserInfo />} />
            <Route path="/Delete" element={<Delete />} />
            <Route path="/OrderedProduct" element={<OrderedProduct />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/NewPassword" element={<NewPassword />} />
            <Route path="/UserEdit" element={<UserEdit />} />
            <Route path='/productDetailForm' element={<ProductDetailForm/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/kakaologin' element={<KakaoLogin />} />

          </Routes>

      </Router>
      </MarkerStore>
    </div>
  );
}

export default App;
