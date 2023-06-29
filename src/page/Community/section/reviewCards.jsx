import React, { useState, useEffect } from 'react';
import { HeartOutlined, EyeFilled, EditOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col, Layout, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../../../images/profile.png';
import camping from '../../../images/camping.png';
import ReviewApi from '../../../API/ReviewAPI';

const { Meta } = Card;
const { Content } = Layout;

const ReviewContent = styled(Card)`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const WriteButton = styled(Link)`
  position: absolute;
  top: 50px;
  right: 190px;
  display: flex;
  align-items: center;
  background-color: #2E2E2E;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  text-decoration: none;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ReviewCards = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await ReviewApi.getAllReviews();
        const reviewData = response.data;
        setReviews(reviewData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, []);

  const renderReviewCards = () => {
    return reviews.map((review, index) => {
      let postTypeText = null;
      if (review.postType === 1) {
        postTypeText = <p>유료캠핑장</p>;
      }

      return (
        <Col span={6} key={index}>
          <ReviewContent
            cover={
              <Link to={`/reviewDetail/${review.id}`}>
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
              avatar={<Avatar src={profile} />} //유저프로필
              title={review.title}
            />
            {postTypeText}
          </ReviewContent>
        </Col>
      );
    });
  };

  return (
    <Layout>
      <Content style={{ padding: '120px', position: 'relative' }}>
        {/* 작성하기 버튼 */}
        <WriteButton to="/writeReviewPage">작성하기<EditOutlined style={{ marginLeft: '5px' }} /></WriteButton>
        
        {/* 리뷰 카드 목록 */}
        <Row gutter={[10, 15]}>
          {reviews.length > 0 ? renderReviewCards() : <p>리뷰가 없습니다.</p>}
        </Row>
        
        {/* 페이지네이션 */}
        <PaginationWrapper>
          <Pagination defaultCurrent={1} total={15} />
        </PaginationWrapper>
      </Content>
    </Layout>
  );
};

export default ReviewCards;
