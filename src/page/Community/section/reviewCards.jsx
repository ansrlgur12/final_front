import React from 'react';
import { HeartOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col, Layout } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from "../../../images/profile.png";
import camping from "../../../images/camping.png";

const { Meta } = Card;
const { Content } = Layout;

const ReviewContent = styled(Card)`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const ReviewImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;

  &:hover img {
    transform: scale(1.05);
  }
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ReviewCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ReviewCards = () => {
  const cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(
      <Col span={6} key={i}>
        <ReviewContent
          actions={[
            <HeartOutlined />,
            <EditOutlined key="edit" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={profile} />}
            title="게시판명"
            description="아이디"
          />
          <Link to="/reviewDetail">
            <ReviewImageWrapper>
              <ReviewImage src={camping} alt="대표이미지" />
            </ReviewImageWrapper>
          </Link>
        </ReviewContent>
      </Col>
    );
  }

  return (
    <Layout>
      <Content style={{ padding: "40px" }}>
        <ReviewCardsWrapper>
          <Row gutter={[10, 15]}>{cards}</Row>
        </ReviewCardsWrapper>
      </Content>
    </Layout>
  );
};

export default ReviewCards;