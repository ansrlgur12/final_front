import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload, Checkbox } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';
import { Layout } from 'antd';

const StyledCheckbox = styled(Checkbox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: auto;
`;

const StyledUserEdit = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: auto;
`;

// 파일 업로드 처리 함수
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

// 사용자 정보 수정 컴포넌트
const UserEdit = () => {
  // formDisabled 상태와 해당 상태를 업데이트하는 함수를 useState 훅을 사용
  const [formDisabled, setFormDisabled] = useState(true);

  return (
    <>
   
      <Header />

  
      <Layout>

    
        <Sidebar />

        {/* 체크박스 */}
        <StyledCheckbox
          checked={!formDisabled}
          onChange={(e) => setFormDisabled(!e.target.checked)}
        >
          나의 정보 수정하기
        </StyledCheckbox>

        {/* 사용자 정보 수정 폼 */}
        <StyledUserEdit
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          initialValues={{
            userId: 'User123',
            userNickname: '정승현',
            userEmail: 'tmdgus21@naver.',
            userPhone: '010-1234-5678'
          }}
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
          <Form.Item label="Profile Image" name="userImage" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card" disabled={formDisabled}>
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>사진 올리기</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" disabled={formDisabled}>
              회원 정보 변경
            </Button>
          </Form.Item>
        </StyledUserEdit>

      </Layout>
    </>
  );
};

export default UserEdit;
