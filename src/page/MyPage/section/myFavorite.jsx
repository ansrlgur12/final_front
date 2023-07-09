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



const TableContainer = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top:50px;
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







const MyFavorite = ({fetchCartData}) => { 
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); //현재 선택된 행의 key를 저장
  const {addToCart } = useContext(CartContext);
  const { favorite,removeFromFavorite,setFavorite } = useContext(FavoriteContext); // cartContext사용
  const [data, setData] = useState([]);
  const { userEmail } = useContext(UserContext);
  const nav = useNavigate();
  // 상태 정의
const [favoriteData, setFavoriteData] = useState([]);

// 서버로부터 데이터를 받아오는 함수
const fetchFavoriteData = async() =>{
    const response = await AxiosApi.favoriteList(userEmail);
    if (response.status === 200) {
        setFavoriteData(response.data);
        setFavorite(response.data);
    }
}
  // useEffect 내에서 fetchFavoriteData 호출
useEffect(() => {
  fetchFavoriteData();
}, []); // 의존성 배열에 아무것도 넣지 않으면 컴포넌트가 마운트될 때만 실행

  const handleMoveToCart = async(favoriteItemId) => {
    try {
      console.log(userEmail,favoriteItemId);
      const response = await AxiosApi.favoriteMoveToCart(favoriteItemId, userEmail);
      if (response.status === 200) {
        removeFromFavorite(favoriteItemId);
        fetchFavoriteData();
        fetchCartData();
      } else {
        console.log('삭제에 실패하였습니다.'); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromFavorite = async (favoriteItemId) => {
    try {
      console.log(userEmail,favoriteItemId);
      const response = await AxiosApi.favoriteDelete(favoriteItemId, userEmail);
      if (response.status === 200) {
        removeFromFavorite(favoriteItemId);
        fetchFavoriteData();
      } else {
        console.log('삭제에 실패하였습니다.'); 
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const newData = favoriteData.map((item) => ({
      
      key: item.favoriteItemId, 
      id: item.favoriteItemId,
      productName: item.productName,
      imageUrl: item.imageUrl ,
      paymentAmount:new Intl.NumberFormat('ko-KR').format(item.price) + "원",
  
      
    }));

    setData(newData);
  }, [favoriteData]);
  const columns = [
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
      render: (text, record) => (
        <div onClick={() => nav(`/ProductDetailForm/${record.id}`)} style={{  cursor: 'pointer' }}>{text}</div>
        ),
    },
    {
      title: '판매가',
      dataIndex: 'paymentAmount',
      key: 'paymentAmount',
    },
    {
      title: '삭제하기',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record) => ( // 이 함수가 IconButton을 반환
      <IconButton aria-label="delete" onClick={() => handleRemoveFromFavorite(record.key)}>
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
      
        
          <TableContainer>
           <h2> 찜목록</h2>
            <Table  rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data} />
                    <div className="btnContainer">
                    <Button type="primary" className='btn' onClick={() => {
    selectedRowKeys.forEach(key => {
        handleMoveToCart(key);
    });
}}>
                장바구니 추가
              </Button>
              </div>
          </TableContainer>
        
      
    </>
  );
};

export default MyFavorite;
