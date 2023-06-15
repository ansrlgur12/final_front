import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from '../../../main/header';
import Sidebar from '../sidebar';

function Delete() {
  const [inputPwd, setInputPwd] = useState('');

  // 입력된 패스워드 변경 이벤트 핸들러
  const handleChangePassword = (e) => {
    setInputPwd(e.target.value);
  }

  // 회원 탈퇴 처리 이벤트 핸들러
  const handleDeleteMember = () => {
    // 탈퇴 처리 로직을 구현해야 함
  }
  
  return (
    <>

      <Header />


      <Layout>
     
        <Sidebar />
        
       
        <div>
          <h4>정말 탈퇴 하시겠습니까?</h4>
          <ul>
            <li>탈퇴신청 시 1주일 뒤에 처리됩니다.</li>
            <li>1주일 이내 다시 로그인 할 경우 다시 복구신청이 가능합니다.</li>
            <li>탈퇴신청 1주일이 지나면 영구탈퇴가 되므로 주의바랍니다.</li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input style={{ width: '280px', height: '40px', margin: '0 5px' }} value={inputPwd} onChange={handleChangePassword} type='password' placeholder='패스워드를 입력 후 확인을 눌러주세요' />
            <button onClick={handleDeleteMember} style={{ padding: '8px 16px', color: '#fff', backgroundColor: '#6c757d', borderRadius: '5px', fontSize: '16px', border: '0px' }} type='button'>확인</button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Delete;
