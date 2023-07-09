
import React,{useState,useContext} from "react";
import { useOrderContext } from "../../../context/OrderContext";
import AxiosApi from "../../../API/TestAxios";
import { UserContext } from "../../../API/UserInfo";
import { CartContext } from "../../../context/CartContext";




    





const Danal=(totalCost)=> {
  const { orderData } = useOrderContext();
  const { userEmail } = useContext(UserContext);
  const {selectedItems} = useContext(CartContext);
  console.log(totalCost); 
  console.log(selectedItems);
  
    const onClickPayment=()=> {
      /* 1. 가맹점 식별하기 */
      const { IMP } = window;
      IMP.init('imp41626608');
  
      /* 2. 결제 데이터 정의하기 */
      const data = {
        pg: 'danal_tpay.9810030929',                           // PG사
        pay_method: 'card',                           // 결제수단
        merchant_uid: `merchant_${new Date().getTime()}`,   // 주문번호
        amount: orderData.totalCost,                               // 결제금액
        name: selectedItems[0].productName,                 // 주문명
        buyer_name: orderData.orderer_name,                           // 구매자 이름
        buyer_tel: orderData.orderer_phone,                     // 구매자 전화번호
        buyer_email: userEmail,               // 구매자 이메일
        buyer_addr: orderData.address,                    // 구매자 주소
        buyer_postcode: orderData.zipcode,                      // 구매자 우편번호
      };
  
      /* 4. 결제 창 호출하기 */
      IMP.request_pay(data, callback);
    }
  
    /* 3. 콜백 함수 정의하기 */
    const callback = async (response) => {
      const { success, error_msg, imp_uid, paid_amount } = response;
  
      if (success) {
        try {
          // 결제 검증
          const verify = await AxiosApi.verifyPayment(imp_uid);
          const data = verify.data;
          // 결제검증을 추가
          if (paid_amount == data.response.amount) {
            alert("결제 및 결제검증완료");
            console.log(selectedItems); 
            const productId = selectedItems.map(item => item.id);  // 제품 ID 리스트
          const quantity = selectedItems.map(item => item.quantity);  // 제품 수량 리스트
           
          for(let i=0; i<productId.length; i++){
            await AxiosApi.createOrder(userEmail, productId[i], quantity[i]);
          }
          } else {
            alert("결제 검증 실패");
          }
        } catch (error) {
          alert("결제 검증 중 오류 발생");
          console.error(error);
        }
      } else {
        alert(`결제 실패: ${error_msg}`);
      }
    }
  
  
    return (
        <>
       
      
      <button onClick={onClickPayment}>{totalCost.totalCost.toLocaleString()}원 결제하기</button>
      
      </>
    );
  };
  export default Danal;