import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';

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
`;

const TableContainer = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const TotalPayment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const columns = [
  {
    title: '번호',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '담은 상품',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: '상품 금액',
    dataIndex: 'paymentAmount',
    key: 'paymentAmount',
  },
  {
    title: '주문 상세',
    dataIndex: 'orderDetails',
    key: 'orderDetails',
  },
  {
    title: '수량',
    dataIndex: 'quantity',
    key: 'quantity',
  },
];

const data = [
  {
    key: '1',
    number: '1',
    product: '상품 A',
    paymentAmount: '100,000원',
    orderDetails: '주문 상세 내용 A',
    quantity: 3,
  },
  {
    key: '2',
    number: '2',
    product: '상품 B',
    paymentAmount: '50,000원',
    orderDetails: '주문 상세 내용 B',
    quantity: 1,
  },
  {
    key: '3',
    number: '3',
    product: '상품 C',
    paymentAmount: '80,000원',
    orderDetails: '주문 상세 내용 C',
    quantity: 2,
  },
];

const Cart = () => { 
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); //현재 선택된 행의 key를 저장
  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0); //현재 선택된 항목들의 총합계 금액

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
      setSelectedRowKeys(selectedRowKeys);
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
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            <TotalPayment>
              <TotalAmount>
                총 합계 금액: {totalPaymentAmount.toLocaleString()}원
              </TotalAmount>
              <Button type="primary" onClick={handlePurchase}>
                구매하기
              </Button>
            </TotalPayment>
          </TableContainer>
        </ContentContainer>
      </LayoutContainer>
    </>
  );
};

export default Cart;
