import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import CommentApi from '../../../API/CommnetAPI';

const CommentList = ({ reviewId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await CommentApi.getCommentsByReview(reviewId);
        const commentsData = response.data;
        setComments(commentsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
  }, [reviewId]);

  return (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={comment => (
        <List.Item>
          <List.Item.Meta
            title={comment.memberId}
            description={comment.content}
          />
        </List.Item>
      )}
    />
  );
};

export default CommentList;
