import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';
import SmallSideBar from '../smallSidebar';
import AxiosApi from '../../../API/TestAxios';
import Functions from '../../../Functions';
import MyPageImageBar from './myPageImage';
import { ImageFlexBox } from './cart';
import { SidebarContainer } from './cart';

const StyledLayout = styled.div`
  display: flex;
`;

const StyledContent = styled.div`
  flex: 1;
  height: auto;
  padding: 20px;
  margin: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  .img{
    width: 4vw;
    height: 4vw;
  }
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

  const { nickName, userPhoneNm, email, userAddr, userImg } = userInfo;

  return (
    <>
      <Header />
      <StyledLayout>
        <SidebarContainer>
        <Sidebar />
        </SidebarContainer>
        <SmallSideBar />
        <ImageFlexBox>
        <MyPageImageBar type = {"info"} />
        <StyledContent style={{ marginTop: '3vh' }}>
          <Descriptions title="회원 정보">
          <Descriptions.Item label="프로필이미지">
            {userImg && <img className='img' src={userImg} alt="User" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />}
          </Descriptions.Item>
            <Descriptions.Item label="닉네임">{nickName}</Descriptions.Item>
            <Descriptions.Item label="전화번호">{userPhoneNm}</Descriptions.Item>
            <Descriptions.Item label="이메일">{email}</Descriptions.Item>
            <Descriptions.Item label="주소">
              {userAddr}
            </Descriptions.Item>
          </Descriptions>
        </StyledContent>
        </ImageFlexBox>
      </StyledLayout>
    </>
  );
};

export default UserInfo;
