import React from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';
import { Layout } from 'antd';

const StyledForm = styled(Form)`
  max-width: 600px;
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 50px;
`;

// 스타일 설정
const layoutStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// 비밀번호 유효성 검사 규칙
const passwordRules = {
  newPassword: [
    { required: true, message: '새로운 비밀번호를 입력해주세요' },
  ],
  confirmPassword: [
    { required: true, message: '비밀번호 다시한번 입력해주세요' },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue('newPassword') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'));
      },
    }),
  ],
};

const NewPassword = () => {
  const [form] = Form.useForm();
  
  // 비밀번호 확인 버튼 클릭 이벤트 핸들러
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <>
     
      <Header />

   
      <Layout>
    
        <Sidebar />
        
    
        <div style={layoutStyle}>
      
          <StyledForm form={form} name="dynamic_rule">
            {/* 새로운 비밀번호 입력 필드 */}
            <StyledFormItem
              name="newPassword"
              label="New Password"
              rules={passwordRules.newPassword}
            >
              <Input.Password placeholder="새로운 비밀번호를 입력하세요" />
            </StyledFormItem>

            {/* 비밀번호 확인 입력 필드 */}
            <StyledFormItem
              name="confirmPassword"
              label="Confirm Password"
              dependencies={['newPassword']}
              rules={passwordRules.confirmPassword}
            >
              <Input.Password placeholder="다시한번 입력해주세요." />
            </StyledFormItem>

            {/* 비밀번호 변경 버튼 */}
            <StyledFormItem>
              <Button type="primary" onClick={onCheck}>
                비밀번호 변경
              </Button>
            </StyledFormItem>
          </StyledForm>
        </div>
      </Layout>
    </>
  );
};

export default NewPassword;
