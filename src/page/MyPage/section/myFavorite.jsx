import React, { useState, useEffect,useContext } from 'react';
import { Table, Button } from 'antd';
import styled from 'styled-components';
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { FavoriteContext } from '../../../context/FavoriteContext';





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
  background-color: #2D6247; 
   &:hover {
    background-color: #2D6247; 
      opacity: 0.7;
    }
}



`;







const MyFavorite = () => { 
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); //현재 선택된 행의 key를 저장
 
  const { favorite,removeFromFavorite } = useContext(FavoriteContext); // cartContext사용
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const newData = favorite.map((item, index) => ({
      
      key: item.product.id, 
      
      productName: item.product.productName,
      imageUrl: item.product.imageUrl ,
      paymentAmount: item.product.price + "원",
  
      
    }));

    setData(newData);
  }, [favorite]);
  const columns = [
    {
      title: '',
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
      title: '삭제하기',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record) => ( // 이 함수가 IconButton을 반환
      <IconButton aria-label="delete" onClick={() => removeFromFavorite(record.key)}>
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
           <Button type="primary">
                장바구니 추가
              </Button>
          </TableContainer>
        
      
    </>
  );
};

export default MyFavorite;
