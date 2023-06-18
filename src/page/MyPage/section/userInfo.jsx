import React from 'react';
import { Descriptions } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';

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
  return (
    <>
      <Header />
      <StyledLayout>
        <Sidebar />
        <StyledContent>
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">정승현</Descriptions.Item>
            <Descriptions.Item label="NickName">곰돌이</Descriptions.Item>
            <Descriptions.Item label="Telephone">01023618786</Descriptions.Item>
            <Descriptions.Item label="Email">tmdgus21@naver.com</Descriptions.Item>
            <Descriptions.Item label="Address">
              서울
            </Descriptions.Item>
          </Descriptions>
        </StyledContent>
      </StyledLayout>
    </>
  );
};

export default UserInfo;
