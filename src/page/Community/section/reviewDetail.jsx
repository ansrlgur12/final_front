import React, { useState, useEffect } from 'react';
import { HeartOutlined, ShareAltOutlined, EditOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import styled from 'styled-components';
import camping from '../../../images/camping.png';
import ReviewApi from '../../../API/ReviewAPI';
import CommentForm from './commentForm';
import CommentList from './commentList';
import { useParams } from 'react-router-dom';
import Header from '../../../main/header';

const { Content } = Layout;

const ReviewContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReviewTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ReviewContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const ReviewImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ReviewMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const ReviewDate = styled.p`
  font-size: 14px;
  color: #888;
`;

const ReviewActions = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #888;
  margin-left: 10px;
`;

const ReviewDetail = () => {
  const [review, setReview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await ReviewApi.getReviewById(id);
        const reviewData = response.data;
        setReview(reviewData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReview();
  }, [id]);

  return (
    <Layout>
      <Header />
      <Content style={{ padding: '40px' }}>
        {review ? (
          <ReviewContainer>
            <ReviewTitle>{review.title}</ReviewTitle>
            <ReviewContent>{review.content}</ReviewContent>
            <ReviewImage src={camping} alt="Review Image" />
            <ReviewMeta>
              <ReviewDate>작성일: {review.date}</ReviewDate>
              <ReviewActions>
                <ReviewButton>
                  <HeartOutlined />
                  좋아요
                </ReviewButton>
                <ReviewButton>
                  <ShareAltOutlined />
                  공유하기
                </ReviewButton>
                <ReviewButton>
                  <EditOutlined />
                  수정하기
                </ReviewButton>
              </ReviewActions>
            </ReviewMeta>
            <CommentList reviewId={review.memberId} />
            <CommentForm reviewId={review.memberId} />
          </ReviewContainer>
        ) : (
          <p>리뷰가 없습니다.</p>
        )}
      </Content>
    </Layout>
  );
};

export default ReviewDetail;
