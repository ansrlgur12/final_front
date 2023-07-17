import React, { useState, useEffect,useContext } from 'react';
import { Table } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import { CartContext } from '../../../context/CartContext';
import { ContentContainer } from '../../MyPage/section/cart';
import { useNavigate } from 'react-router-dom';
import Danal from './danal';
import OrderInput from '../../../Commons/OrderInput';
import SearchAddress from '../../../API/Address';
import { useOrderContext } from '../../../context/OrderContext';
import KakaoPay from './kakaoPay';
import EllipsisText from '../../../Commons/ellipsis';


const TableContainer = styled.div`
  background-color: #FFFFFF;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 5rem;
  width: 64vw;
  margin-left:18rem;


  .ant-checkbox-checked .ant-checkbox-inner {
  background-color:#2D6247;
  border-color: #2D6247; 
  margin-bottom: 20rem;
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



@media screen and (max-width:768px) {
    padding:0.4rem;
   width: 86vw;
   overflow-x: auto;
  display:block;
  margin-left:0;

    .ant-table {
      
      width: 100%;
    display:flex;
  font-size: 0.1rem;
}
.ant-table-tbody > tr > td {
  padding: 12px 14px;
  
}
.ant-table-thead > tr > th  {
  white-space: nowrap;
  padding: 8px 6px;
}
}
`;




const Container = styled.section`

border-radius: 4px;
border: none;
   background: #2D6247; 
display: flex;
box-sizing: border-box;
padding-top: 70px;
width: 100vw;
height: auto;
margin: auto;
h1 {
    padding-top: 3rem;
    text-align: center;
  }

  h3 {
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
  }

  .payerName {
    margin-left: 0.8rem;
    height: auto;
    line-height: normal;
    padding: 0.6em 0.5em;
  }
  @media screen and (max-width:768px) {
  width:auto;
 

}
`;
const Wrapper = styled.div`
  margin-top: 2rem;
  @media screen and (max-width:768px) {
 margin-top: 1rem;

}
`;

const BtnWrapper = styled.div`
  margin-top: 3rem;

  button {
    width: 100%;
    border: 0;
  cursor: pointer;
  
    color: #fff;
    background: #2D6247; 
    padding: 1rem 2rem;
    border-radius: 0.4rem;
  }

  button:disabled {
    background: #ccc;
  }

`;


const OrderPage = () => { 


  const [data, setData] = useState([]);
  const nav = useNavigate();
  const {selectedItems} = useContext(CartContext);
  const [orderList, setOrderList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [agree, setAgree] = useState(false);
  const { setOrderData } = useOrderContext();
  const [payMethodId, setPayMethodId] = useState(0); 


// 상태 정의
const [cartData, setCartData] = useState([]);



  
useEffect(() => {
  console.log(selectedItems);
  const newData = selectedItems.map((item) => ({
    key: item.cartItemId,
    id: item.productId,
    productName: item.productName,
    imageUrl: item.imageUrl,
    price: item.price,
    quantity: item.quantity,
  }));

  setData(newData);
  const cost = selectedItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ""));  
    return acc + price * item.quantity;
  }, 0);
  setTotalCost(cost);
  console.log(cost);
}, [selectedItems]);




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
} = inputs;

const handleChange = (e) => {
  const { value, name } = e.target;
  if (name === "ordererPhone" || name === "delivPhone") {
  
    let digitOnlyValue = value.replace(/\D/g, "");

    //하이픈 추가
    if (digitOnlyValue.length > 2) {
      if (digitOnlyValue.length < 7) {
        digitOnlyValue = digitOnlyValue.replace(/(\d{3})(\d{1,4})/, "$1-$2");
      } else {
        digitOnlyValue = digitOnlyValue.replace(
          /(\d{3})(\d{4})(\d{1,4})/,
          "$1-$2-$3"
        );
      }
    }
    setInputs({
      ...inputs,
      [name]: digitOnlyValue,
    });
  } else {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
};


const [isSameInfo, setIsSameInfo] = useState(false);

const handleIsSameInfo = () => {
  setIsSameInfo(!isSameInfo);
  if (!isSameInfo) {
    setInputs({
      ...inputs,
      delivName: ordererName,
      delivPhone: delivPhone,
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

  setOrderData(orderdata); 
};

const handlePayMethod = (e) => {
  const { value, name } = e.target;
  if (name === "payMethodId") {
    setPayMethodId(Number(value));  
  } 
};

const orderdata = {
   
  products: orderList,
  totalCost,
  orderer_name: ordererName,
  orderer_phone: ordererPhone,
  orderer_email: ordererEmail,
  deliv_name: delivName,
  deliv_Phone: delivPhone,
  address: fullAddress,
  zipcode: zipcode,
  
  agree,
};

 
 


  const columns = [
    {
      title: '상품',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (text, record) => <img onClick={() => nav(`/ProductDetailForm/${record.id}`)}  src={record.imageUrl} alt={record.imageUrl} style={{ width: '11.5vw', height: 'auto', border:'1px solid #ccc', borderRadius:'8px'}} />
    },
    {
      title: '상품명',
      dataIndex: 'productName',
      key: 'productName',
      render: (text, record) => (
        <EllipsisText text={record.productName} maxLine={1} />
        ),
    },
    
  
    {
      title: '판매가',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '수량',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '배송비',
      dataIndex: 'delivery',
      render: () => <p style={{whiteSpace:'nowrap'}}> 무료</p>,
      
       
      },
    ];

 




    
  
 


  return (
    <>
      <Header />
     
        <Container>
        
       
        <ContentContainer >
       
        
          
           
      
     
      <TableContainer>
      <h3>주문 상품</h3>
      <Table  
                    columns={columns}
                    dataSource={data} /> 
                    </TableContainer>
   
     
      <TableContainer>
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
        <SearchAddress  handleAddress={handleAddress} />
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
          onChange={handlePayMethod}
          defaultChecked
        />
        <label htmlFor="0">신용카드</label>
        <input
          type="radio"
          name="payMethodId"
          value={1}
          onChange={handlePayMethod}
        />
        <label htmlFor="1">카카오페이</label>
     
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
                 payMethodId === 0 ? (
                  <Danal totalCost={totalCost.toLocaleString()}selectedItems={selectedItems}/>
                ) : (
                  <KakaoPay totalCost={totalCost.toLocaleString()}selectedItems={selectedItems}/>
                )
                ) : (
                  <button type="button" disabled>
                    결제하기
                  </button>
                )}
        </BtnWrapper>
      </Wrapper>
      </TableContainer>
    
      </ContentContainer>
        
          </Container>
      </>
  );
};export default OrderPage;