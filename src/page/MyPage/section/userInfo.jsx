import React from 'react';
import { Descriptions } from 'antd';
import Header from '../../../main/header';
import Sidebar from '../sidebar';
import { Layout } from 'antd';

const UserInfo = () => {
  return (
    <>
   
      <Header />

 
      <Layout>

       
        <Sidebar />

        {/* 사용자 정보 */}
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">정승현</Descriptions.Item>
          <Descriptions.Item label="NickName">곰돌이</Descriptions.Item>
          <Descriptions.Item label="Telephone">01023618786</Descriptions.Item>
          <Descriptions.Item label="Email">tmdgus21@naver.com</Descriptions.Item>
          <Descriptions.Item label="Address">
            서울
          </Descriptions.Item>
        </Descriptions>

      </Layout>
    </>
  );
};

export default UserInfo;
