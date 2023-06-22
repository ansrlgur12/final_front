import React from 'react';
import { HeartOutlined, EyeFilled } from '@ant-design/icons';
import { Avatar, Card, Row, Col, Layout } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from "../../../images/profile.png";
import camping from "../../../images/camping.png";
import Header from '../../../main/header';
import Sider from 'antd/es/layout/Sider';
import Sidebar from '../sidebar';

const { Meta } = Card;
const { Content } = Layout;

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPostsWrapper = styled.div`
  padding: 40px;
  text-align: center;
`;

const PostContent = styled(Card)`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;

const MyReview = () => {
  // 더미 데이터
  const dummyData = [
    { id: 1, title: '게시글 1', author: '사용자1' },
    { id: 2, title: '게시글 2', author: '사용자1' },
    { id: 3, title: '게시글 3', author: '사용자1' },
    { id: 4, title: '게시글 4', author: '사용자1' },
  ];

  const filteredPosts = dummyData.filter(post => post.author === '사용자1');

  const posts = filteredPosts.map(post => (
    <Col span={8} key={post.id}>
      <PostContent
        cover={
          <Link to={`/post/${post.id}`}>
            <img
              alt="대표이미지"
              src={camping}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </Link>
        }
        actions={[
          <HeartOutlined />,
          <EyeFilled key="edit" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={profile} />}
          title={post.title}
          description={post.author}
        />
      </PostContent>
    </Col>
  ));

  return (
    <>
      <Header />
      <StyledLayout>
        <Sidebar />
        <StyledContent>
          <MyPostsWrapper>
            <Title>내가 쓴 게시글</Title>
            <Row gutter={[10, 15]}>{posts}</Row>
          </MyPostsWrapper>
        </StyledContent>
      </StyledLayout>
    </>
  );
};

export default MyReview
