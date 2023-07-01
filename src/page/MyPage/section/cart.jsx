import React, { useState, useEffect,useContext } from 'react';
import { Table, Button } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';
import { CartContext } from '../../../context/CartContext';
import QuantityInput from '../../Shop/quantityInput';
import MyFavorite from './myFavorite';
import DeleteButton from '../../../Commons/Buttons/deleteButton';
import { useNavigate } from 'react-router-dom';
import Payment from '../../Shop/test/inicis';

const LayoutContainer = styled.div` 
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 200px;
  height: 100vh;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;

`;

const TableContainer = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
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

const TotalPayment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
`;





const Cart = () => { 
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); //현재 선택된 행의 key를 저장
  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0); //현재 선택된 항목들의 총합계 금액
  const { cart,removeFromCart } = useContext(CartContext); // cartContext사용
  const [data, setData] = useState([]);
  const nav = useNavigate();
  
  useEffect(() => {
    const newData = cart.map((item, index) => ({
      
      key: item.product.id, 
      id: item.product.id,
      productName: item.product.productName,
      imageUrl: item.product.imageUrl ,
      paymentAmount:new Intl.NumberFormat('ko-KR').format(item.product.price) + "원",
      quantity: item.quantity, 
      
    }));

    setData(newData);
  }, [cart]);
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
      title: '수량',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '삭제하기',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record) => ( // 이 함수가 IconButton을 반환
       <DeleteButton onClick={() => removeFromCart(record.key)}/>
    )
    },
  ];

  useEffect(() => { //선택된 항목들의 총금액을 다시 계산하고, 상태 업데이트
    const totalAmount = calculateTotalPaymentAmount();
    setTotalPaymentAmount(totalAmount);
  }, [selectedRowKeys]);

  const calculateTotalPaymentAmount = () => { //선택된 항목들의 총 금액을 계산하는 함수
    let totalAmount = 0; //선택된 항목들의 총금액 저장 용도
    selectedRowKeys.forEach((key) => { //각 항목 반복문 실행
      const item = data.find((d) => d.key === key); 
      const paymentAmount = parseFloat(
        item.paymentAmount.replace(',', '').replace('원', '')
      );
      const quantity = item.quantity;
      totalAmount += paymentAmount * quantity;
    });
    return totalAmount;
  };

  const rowSelection = { //선택항목 제어 및 상태관리
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
     
    },
    
  };
 
  const handlePurchase = () => {//구매금액 출력 핸들러
    alert(`구매하기: ${totalPaymentAmount.toLocaleString()}원`);
  };

  return (
    <>
      <Header />
      <LayoutContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          <TableContainer>
          <h2> 장바구니</h2>
            <Table  rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data} />
            <TotalPayment>
              <TotalAmount>
                총 합계 금액: {totalPaymentAmount.toLocaleString()}원
              </TotalAmount>
              <Payment/>
            </TotalPayment>
          </TableContainer>
          <MyFavorite/>
        </ContentContainer>
        
        
      </LayoutContainer>
    </>
  );
};

export default Cart;
