import React from 'react';
import { Table } from 'antd';
import Header from '../../../main/header';
import Sidebar from '../sidebar';
import { Layout } from 'antd';

const columns = [
  {
    title: '번호', // 컬럼 제목
    dataIndex: 'number', // 데이터 필드 이름
    key: 'number', // 고유 키
    render: (text) => <a>{text}</a>, // 렌더링 함수
    width: 30, // 컬럼 너비
  },
  {
    title: '주문일',
    dataIndex: 'date',
    key: 'date',
    width: 80,
  },
  {
    title: '상품명',
    dataIndex: 'product',
    key: 'product',
    width: 120,
    ellipsis: true, // 길이가 길면 말줄임표 표시
  },
  {
    title: '결재 금액',
    dataIndex: 'paymentAmount',
    key: 'paymentAmount',
    width: 120,
    ellipsis: true,
  },
  {
    title: '주문 상세',
    dataIndex: 'orderDetails',
    key: 'orderDetails',
    width: 150,
    ellipsis: true,
  },
  {
    title: '배송 현황',
    dataIndex: 'shippingStatus',
    key: 'shippingStatus',
    width: 80,
    ellipsis: true,
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

const OrderedProduct = () => {
  return (
    <>

      <Header />

   
      <Layout>

        <Sidebar />

     
        <Table columns={columns} dataSource={data} />
      </Layout>
    </>
  );
};

export default OrderedProduct;
