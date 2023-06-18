import React from 'react';
import { Table } from 'antd';
import { Layout } from 'antd';
import Header from '../../../main/header';
import Sidebar from '../sidebar';

const columns = [
  {
    title: '번호',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '주문일',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '상품명',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: '결재 금액',
    dataIndex: 'paymentAmount',
    key: 'paymentAmount',
  },
  {
    title: '주문 상세',
    dataIndex: 'orderDetails',
    key: 'orderDetails',
  },
  {
    title: '배송 현황',
    dataIndex: 'shippingStatus',
    key: 'shippingStatus',
  },
];

const data = [
  {
    key: '1',
    number: '1',
    date: '2023-06-14',
    product: '상품 A',
    paymentAmount: '100,000원',
    orderDetails: '주문 상세 내용 A',
    shippingStatus: '배송준비중',
  },
  {
    key: '2',
    number: '2',
    date: '2023-06-13',
    product: '상품 B',
    paymentAmount: '50,000원',
    orderDetails: '주문 상세 내용 B',
    shippingStatus: '배송중',
  },
  {
    key: '3',
    number: '3',
    date: '2023-06-12',
    product: '상품 C',
    paymentAmount: '80,000원',
    orderDetails: '주문 상세 내용 C',
    shippingStatus: '배송완료',
  },
];

// 테이블에서 선택한 행에 대한 정보를 출력하는 함수
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
};

// 장바구니 함수
const Cart = () => {
  return (
    <>
     
      <Header />

      <Layout>
       
        <Sidebar />

    
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </Layout>
    </>
  );
};

export default Cart;
