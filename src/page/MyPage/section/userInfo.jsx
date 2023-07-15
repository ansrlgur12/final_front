import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';
import SmallSideBar from '../smallSidebar';
import AxiosApi from '../../../API/TestAxios';
import Functions from '../../../Functions';

const StyledLayout = styled.div`
  display: flex;
`;

const StyledContent = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const UserInfo = () => {
  const token = Functions.getAccessToken();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await AxiosApi.userInfo(token);
      const { data } = response;
      console.log(data);
      setUserInfo(data); // 회원 정보 업데이트
    } catch (error) {
  
    }
  };

  if (!userInfo) {
    return null; 
  }

  const { nickName, userPhoneNm, email, userAddr } = userInfo;

  return (
    <>
      <Header />
      <StyledLayout>
        <Sidebar />
        <SmallSideBar />
        <StyledContent style={{ marginTop: '15vh' }}>
          <Descriptions title="User Info">
            <Descriptions.Item label="NickName">{nickName}</Descriptions.Item>
            <Descriptions.Item label="Telephone">{userPhoneNm}</Descriptions.Item>
            <Descriptions.Item label="Email">{email}</Descriptions.Item>
            <Descriptions.Item label="Address">
              {userAddr}
            </Descriptions.Item>
          </Descriptions>
        </StyledContent>
      </StyledLayout>
    </>
  );
};

export default UserInfo;
