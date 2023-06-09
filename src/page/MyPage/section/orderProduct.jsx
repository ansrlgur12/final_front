import React, { useState, useEffect,useContext } from 'react';
import { Table, Button } from 'antd';
import styled from 'styled-components';
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { FavoriteContext } from '../../../context/FavoriteContext';
import { CartContext } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import AxiosApi from '../../../API/TestAxios';
import { UserContext } from '../../../API/UserInfo';
import Header from '../../../main/header';
import Sidebar from '../sidebar';
import { LayoutContainer,SidebarContainer,ContentContainer } from './cart';
import SmallSideBar from '../smallSidebar';



const TableContainer = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  /* margin-top:50px; */
  .ant-checkbox-checked .ant-checkbox-inner {
  background-color:#2D6247;
  border-color: #2D6247; 
  
}
button.ant-btn{
    display: flex;
    justify-content: right;
    margin-top: 20px;
  background-color: #2D6247; 
   &:hover {
    background-color: #2D6247; 
      opacity: 0.7;
    }
}
.btnContainer{
    display: flex;
    justify-content: right;
}
.ant-table-thead > tr > th  {
  text-align: center;
}

tbody {
  text-align: center;
}






`;







const OrderList = () => { 
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); //현재 선택된 행의 key를 저장
 
  const [data, setData] = useState([]);
  const { userEmail } = useContext(UserContext);
  const nav = useNavigate();
  // 상태 정의
const [orderData, setOrderData] = useState([]); 

const fetchOrderData = async () => {
  const response = await AxiosApi.getOrderList(userEmail);
  if (response.status === 200) {
    console.log(response.data);
    setOrderData(response.data);
  }
}
useEffect(() => {
  fetchOrderData();
}, []); // 의존성 배열에 아무것도 넣지 않으면 컴포넌트가 마운트될 때만 실행



  // const handleRemoveFromFavorite = async (favoriteItemId) => {
  //   try {
  //     console.log(userEmail,favoriteItemId);
  //     const response = await AxiosApi.favoriteDelete(favoriteItemId, userEmail);
  //     if (response.status === 200) {
  //       removeFromFavorite(favoriteItemId);
  //       fetchFavoriteData();
  //     } else {
  //       console.log('삭제에 실패하였습니다.'); 
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    const newData = orderData.map((item) => {
      // 주문 항목이 있는 경우 첫 번째 항목만 사용
      if (item.orderItemDtoList && item.orderItemDtoList.length > 0) {
        const firstItem = item.orderItemDtoList[0];
        
        return {
          key: item.orderId, 
          id: item.orderId,
          orderDate: item.orderDate,
          productName: firstItem.productName,
          imageUrl: firstItem.imageUrl,
          quantity: firstItem.quantity,
          paymentAmount: new Intl.NumberFormat('ko-KR').format(firstItem.orderPrice) + "원",
        };
      }
  
      // 주문 항목이 없는 경우 기본 값을 사용
      return {
        key: item.orderId, 
        id: item.orderId,
        orderDate: '',
        productName: '',
        imageUrl: '',
        quantity:'',
        paymentAmount: '',
      };
    });
  
    setData(newData);
  }, [orderData]);


  const columns = [
    {
      title: '구매 날짜',
      dataIndex:'orderDate',
      key:'orderDate',

    },
    {
      title: '상품 이미지',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (text, record) => <img src={record.imageUrl} alt={record.imageUrl} style={{ width: '200px', height: '200px', border:'1px solid #ccc', borderRadius:'8px'}} />
    },
    {
      title: '상품명',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: '판매가',
      dataIndex: 'paymentAmount',
      key: 'paymentAmount',
    },
    {
      title: '취소하기',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record) => ( // 이 함수가 IconButton을 반환
      <IconButton aria-label="delete" >
        <Delete/>
      </IconButton>
    )
    },
  ];



  

  const rowSelection = { //선택항목 제어 및 상태관리
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
     
    },
    
  };
 
 

  return (
    <>
       <Header />
      <LayoutContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <SmallSideBar />
        <ContentContainer>
          <TableContainer>
           <h2> 구매 내역</h2>
            <Table  rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data} />
               
          </TableContainer>
          </ContentContainer>
          </LayoutContainer>
      
    </>
  );
};

export default OrderList;
