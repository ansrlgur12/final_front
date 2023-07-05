import React, { useState, useEffect,useContext } from 'react';
import { Table } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import { CartContext } from '../../../context/CartContext';

import DeleteButton from '../../../Commons/Buttons/deleteButton';
import { useNavigate } from 'react-router-dom';
import Payment from '../../Shop/test/inicis';
import AxiosApi from '../../../API/TestAxios';
import { UserContext } from '../../../API/UserInfo';
import OrderInput from '../../../Commons/OrderInput';
import SearchAddress from '../../../Commons/Adress';




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
.ant-table-thead > tr > th  {
  text-align: center;
}

tbody {
  text-align: center;
  

  align-items: center;
  justify-content: center;
}
.ant-table-cell div{
  align-items: center;
  justify-content: center;
}
.ant-table-tbody > tr.ant-table-row:hover > td {
  
 
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


const Container = styled.section`
box-sizing: border-box;
padding-top: 130px;
width: 70vw;
height: auto;
margin: auto;
h1 {
    padding-top: 3rem;
    text-align: center;
  }

  h3 {
    margin-top: 5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
  }

  .payerName {
    margin-left: 0.8rem;
    height: auto;
    line-height: normal;
    padding: 0.6em 0.5em;
  }
`;
const Wrapper = styled.div`
  margin-top: 2rem;
`;

const BtnWrapper = styled.div`
  margin-top: 3rem;

  button {
    width: 100%;
    border: 0;
  
    color: #ccc;
    background: green;
    padding: 1rem 2rem;
    border-radius: 0.4rem;
  }

  button:disabled {
    background: #ccc;
  }

`;


const OrderPage = () => { 

  const { setCart,removeFromCart,setQuantity } = useContext(CartContext); // cartContext사용
  const [data, setData] = useState([]);
  const nav = useNavigate();
  const { userEmail } = useContext(UserContext);
  
  const [orderList, setOrderList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalShipCost, setTotalShipCost] = useState(0);
  const [agree, setAgree] = useState(false);
  const orderNumber = Math.floor(Math.random() * 10000000) + 1;
  const orderTime = new Date().toLocaleString();

// 상태 정의
const [cartData, setCartData] = useState([]);

// 서버로부터 데이터를 받아오는 함수
// const fetchCartData= async()=> {
//     const response = await AxiosApi.cartList(userEmail);
//     if (response.status === 200) {
//         setCartData(response.data);
//         setCart(response.data);
//     }
// }

// useEffect 내에서 fetchCartData 호출
// useEffect(() => {
//     fetchCartData();
// }, []); // 의존성 배열에 아무것도 넣지 않으면 컴포넌트가 마운트될 때만 실행

  
useEffect(() => {
  const newData = cartData.map((item) => ({
      key: item.cartItemId, 
      id: item.cartItemId,
      productName: item.productName,
      imageUrl: item.imageUrl,
      paymentAmount: new Intl.NumberFormat('ko-KR').format(item.price) + "원",
      quantity: item.quantity,
  }));

  setData(newData);
}, [cartData]);


const [inputs, setInputs] = useState({
  ordererName: '',
  ordererPhone: '',
  ordererEmail: '',
  delivName: '',
  delivPhone: '',
  zipcode: '',
  fullAddress: '',
  detailAddress: '',
  payMethodId: 0,
  payerName: '',
});

const {
  ordererName,
  ordererPhone,
  ordererEmail,
  delivName,
  delivPhone,
  zipcode,
  fullAddress,
  detailAddress,
  shippingMemo,
  payMethodId,
  payerName,
} = inputs;

const handleChange = (e) => {
  const { value, name } = e.target;
  setInputs({
    ...inputs,
    [name]: value,
  });
};

const [isSameInfo, setIsSameInfo] = useState(false);

const handleIsSameInfo = () => {
  setIsSameInfo(!isSameInfo);
  if (!isSameInfo) {
    setInputs({
      ...inputs,
      delivName: ordererName,
      delivPhone: ordererPhone,
    });
  }
};

const handleAddress = (data) => {
  setInputs({
    ...inputs,
    fullAddress: data.fullAddress,
    zipcode: data.zipcode,
  });
};

const handleAgree = () => {
  setAgree(!agree);
};

const handleOrderConfirm = async () => {
  const orderdata = {
    orderNumber,
    orderTime,
    products: orderList,
    totalCost,
    orderer_name: ordererName,
    orderer_phone: ordererPhone,
    orderer_email: ordererEmail,
    deliv_name: delivName,
    deliv_Phone: delivPhone,
    address: fullAddress,
    payMethod: payMethodId,
    agree,
  };

}
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
      title: '수량',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '삭제하기',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record) => ( // 이 함수가 IconButton을 반환
       <DeleteButton />
       )
      },
    ];

 




    
  
 


  return (
    <>
      <Header />
     
        <Container>
           
             <Table  
                    columns={columns}
                    dataSource={data} /> 
            <TotalPayment>
             
            </TotalPayment>
            <h1>주문 결제</h1>
      <h3>주문 상품</h3>
      <Wrapper>
      <span>주문리스트</span>
      </Wrapper>
      <h3>주문자 정보</h3>
      <Wrapper>
        <OrderInput
          label={'보내는 분'}
          name="ordererName"
          value={ordererName}
          onChange={handleChange}
        />
        <OrderInput
          label={'휴대폰'}
          name="ordererPhone"
          value={ordererPhone}
          onChange={handleChange}
        />
        <OrderInput
          label={'이메일(선택)'}
          name="ordererEmail"
          type="email"
          value={ordererEmail}
          onChange={handleChange}
        />
      </Wrapper>
      <h3>배송 정보</h3>
      <Wrapper>
        <input type="checkbox" value={isSameInfo} onClick={handleIsSameInfo} />
        <label>주문자 정보와 동일</label>
        {isSameInfo ? (
          <>
            <OrderInput
              label={'받는 분'}
              name="ordererName"
              value={ordererName}
              onChange={handleChange}
            />
            <OrderInput
              label={'휴대폰'}
              name="ordererPhone"
              value={ordererPhone}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <OrderInput
              label={'받는 분'}
              name="delivName"
              value={delivName}
              onChange={handleChange}
            />
            <OrderInput
              label={'휴대폰'}
              name="delivPhone"
              value={delivPhone}
              onChange={handleChange}
            />
          </>
        )}
        <SearchAddress handleAddress={handleAddress} />
        <OrderInput label={'우편번호'} value={zipcode} readOnly={true} />
        <OrderInput label={'주소'} value={fullAddress} readOnly={true} />
        <OrderInput
          label={'상세주소'}
          name="detailAddress"
          value={detailAddress}
          onChange={handleChange}
        />
     
      </Wrapper>
      <h3>결제 수단</h3>
      <Wrapper>
        <input
          type="radio"
          name="payMethodId"
          value={0}
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="0">신용카드</label>
        <input
          type="radio"
          name="payMethodId"
          value={1}
          onChange={handleChange}
        />
        <label htmlFor="1">무통장입금</label>
        {payMethodId === '1' && (
          <input
            className="payerName"
            name="payerName"
            value={payerName}
            placeholder={'입금자명'}
            onChange={handleChange}
          />
        )}
      </Wrapper>
      <h3>개인정보 수집/제공</h3>
      <Wrapper>
        <input
          type="checkbox"
          name="agree"
          onClick={handleAgree}
          value={agree}
        />
        결제 진행 필수 전체 동의
        <BtnWrapper>
          {agree ? (
            <button type="button" onClick={handleOrderConfirm}>
              {totalCost}원 결제하기
            </button>
          ) : (
            <button type="button" onClick={handleOrderConfirm} disabled>
              {totalCost}원 결제하기
            </button>
          )}
        </BtnWrapper>
      </Wrapper>
         
        
          </Container>
      </>
  );
};export default OrderPage;