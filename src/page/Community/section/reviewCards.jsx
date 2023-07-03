import React, { useState, useEffect } from 'react';
import { HeartOutlined, EyeFilled, EditOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col, Layout, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../../../images/profile.png';
import camping from '../../../images/camping.png';
import ReviewApi from '../../../API/ReviewAPI';
import LikesApi from '../../../API/LikesAPI';

const { Meta } = Card;
const { Content } = Layout;

const ReviewContent = styled(Card)`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
  border: 1px solid #DDDDDD;
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
  const [likesCount, setLikesCount] = useState({});  // 좋아요 수 저장을 위한 state

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await ReviewApi.getAllReviews();
        console.log(response.data);  // <-- 이 부분에 추가하세요
        const reviewData = response.data;
        setReviews(reviewData);
  
        let likesCountData = {};
        for (let review of reviewData) {
          const likesResponse = await LikesApi.countReviewLikes(review.id);
          likesCountData[review.id] = likesResponse.data;
        }
        setLikesCount(likesCountData);
  
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
              <span><HeartOutlined /> {likesCount[review.id] || 0}</span>,  // 좋아요 수 표시
              <span><EyeFilled /> {review.viewCount || 0}</span>,  // viewCount 표시
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
      <Content style={{ padding: '120px', position: 'relative', backgroundColor: '#FFFFFF' }}>
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
