import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload, Checkbox } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';

const LayoutContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 200px;
  height: 10vh;
  background-color: #FFFFFF;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const StyledCheckbox = styled(Checkbox)`
  width: 300px;
  margin-bottom: 20px;
`;

const StyledUserEdit = styled(Form)`
  width: 600px;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin: auto;
`;

const normFile = (e) => { //프로필사진 업로드 설정 함수
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const generateDummyData = () => {
  return {
    userId: 'User123',
    userNickname: '정승현',
    userEmail: 'tmdgus21@naver.com',
    userPhone: '010-1234-5678',
  };
};

const UserEdit = () => {
  const [formDisabled, setFormDisabled] = useState(true);
  const [initialValues, setInitialValues] = useState(generateDummyData());

  return (
    <>
      <Header />
      <LayoutContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          <StyledCheckbox
            checked={!formDisabled}
            onChange={(e) => setFormDisabled(!e.target.checked)}
          >
            나의 정보 수정하기
          </StyledCheckbox>

          <StyledUserEdit
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            initialValues={initialValues}
          >
            <Form.Item label="User ID" name="userId">
              <Input disabled />
            </Form.Item>
            <Form.Item label="Nickname" name="userNickname">
              <Input disabled={formDisabled} />
            </Form.Item>
            <Form.Item label="Email" name="userEmail">
              <Input disabled={formDisabled} />
            </Form.Item>
            <Form.Item label="Phone Number" name="userPhone">
              <Input disabled={formDisabled} />
            </Form.Item>
            <Form.Item
              label="Profile Image"
              name="userImage"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card" disabled={formDisabled}>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>사진 올리기</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item>
              <StyledButton type="primary" disabled={formDisabled}>
                회원 정보 변경
              </StyledButton>
            </Form.Item>
          </StyledUserEdit>
        </ContentContainer>
      </LayoutContainer>
    </>
  );
};

export default UserEdit;
