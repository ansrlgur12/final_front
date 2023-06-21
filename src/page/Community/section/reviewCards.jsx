import React from 'react';
import { HeartOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col, Layout} from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from "../../../images/profile.png";
import camping from "../../../images/camping.png";

const { Meta } = Card;
const {Content} = Layout;

const ReviewContent = styled(Card)`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
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
          cover={
            <Link to="/reviewDetail">
              <img
                alt="대표이미지"
                src={camping}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </Link>
          }
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
