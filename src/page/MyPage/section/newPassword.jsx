import React from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';

const LayoutContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  height: 150px;
  flex: 1;
  padding: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled(Form)`
  max-width: 800px;
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 50px;
`;

const passwordRules = { //비밀번호 입력필드 유효성 검사 규칙 정의
  newPassword: [
    { required: true, message: '새로운 비밀번호를 입력해주세요' },
  ],
  confirmPassword: [
    { required: true, message: '비밀번호 다시한번 입력해주세요' },
    ({ getFieldValue }) => ({ //비밀번호 확인 필드검사하고, 오류나 성공 반환
      validator(_, value) {
        if (!value || getFieldValue('newPassword') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'));
      },
    }),
  ],
};

const NewPassword = () => { //새로운 비밀번호 입력하고 확인하는 함수
  const [form] = Form.useForm();
  
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('성공:', values);
    } catch (errorInfo) {
      console.log('실패:', errorInfo);
    }
  };

  return (
    <>
      <Header />
      <LayoutContainer>
        <Sidebar />
        <ContentContainer>
          <StyledForm form={form} name="dynamic_rule">
            <StyledFormItem
              name="newPassword"
              label="New Password"
              rules={passwordRules.newPassword}
            >
              <Input.Password placeholder="새로운 비밀번호를 입력하세요" />
            </StyledFormItem>
            <StyledFormItem
              name="confirmPassword"
              label="Confirm Password"
              dependencies={['newPassword']}
              rules={passwordRules.confirmPassword}
            >
              <Input.Password placeholder="다시한번 입력해주세요." />
            </StyledFormItem>
            <StyledFormItem>
              <Button type="primary" onClick={onCheck}>
                비밀번호 변경
              </Button>
            </StyledFormItem>
          </StyledForm>
        </ContentContainer>
      </LayoutContainer>
    </>
  );
};

export default NewPassword;
