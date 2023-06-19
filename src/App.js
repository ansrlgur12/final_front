import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './main/mainPage';
import ShopMain from './page/Shop/shopMain';
import MapMain from './page/Map/mapMain';

//마이 페이지
import MyPage from './page/MyPage/myPage';
import UserInfo from './page/MyPage/section/userInfo';
import Delete from './page/MyPage/section/delete';
import OrderedProduct from './page/MyPage/section/orderProduct';
import Cart from './page/MyPage/section/cart';
import NewPassword from './page/MyPage/section/newPassword';
import UserEdit from './page/MyPage/section/userEdit';
import MarkerStore from './context/MarkerInfo';


function App() {
  return (
    <div className="App">
      <MarkerStore>
      <Router>

          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/shopMain' element={<ShopMain />} />
            <Route path='/mapMain' element={<MapMain />} />
            <Route path='/myPage' element={<MyPage />} />
            <Route path='/userInfo' element={<UserInfo />} />
            <Route path="/UserInfo" element={<UserInfo />} />
            <Route path="/Delete" element={<Delete />} />
            <Route path="/OrderedProduct" element={<OrderedProduct />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/NewPassword" element={<NewPassword />} />
            <Route path="/UserEdit" element={<UserEdit />} />
          </Routes>

      </Router>
      </MarkerStore>
    </div>
  );
}

export default App;
