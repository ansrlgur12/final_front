import React, { useState, useEffect } from 'react';
import { List, Button, Popconfirm, message, Modal, Input, Form } from 'antd';
import CommentApi from '../../../API/CommnetAPI';
import Functions from '../../../Functions';

const CommentList = ({ reviewId }) => {
  const token = Functions.getAccessToken();
  const [comments, setComments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await CommentApi.getCommentByReview(reviewId);
        const commentsData = response.data;
        setComments(commentsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
  }, [reviewId]);

  const handleSubmit = async () => {
    try {
      const response = await CommentApi.createComment(token, reviewId, content);
      const newComment = response.data;
      setComments([...comments, newComment]);
      setContent('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await CommentApi.deleteComment(token, commentId);
      setComments(comments.filter(comment => comment.id !== commentId));
      message.success('댓글이 삭제되었습니다.!');
    } catch (error) {
      console.log(error);
      message.error('댓글 삭제가 실패하였습니다.');
    }
  };

  const showModal = (commentId, content) => {
    setEditingCommentId(commentId);
    setEditingContent(content);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      await CommentApi.updateComment(token, reviewId, editingContent);
      setComments(comments.map(comment => comment.id === editingCommentId ? { ...comment, content: editingContent } : comment));
      message.success('댓글이 성공적으로 수정되었습니다.');
    } catch (error) {
      console.log(error);
      message.error('댓글 수정이 실패하였습니다.');
    }
    setIsModalVisible(false);
  };  

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Form onFinish={handleSubmit}>
        <Form.Item>
          <Input.TextArea
            rows={4}
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="댓글을 작성해주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            작성
          </Button>
        </Form.Item>
      </Form>

      <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={comment => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => showModal(comment.id, comment.content)}>수정하기</Button>,
              <Popconfirm
                title="정말 댓글을 삭제하시겠습니까?"
                onConfirm={() => handleDelete(comment.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="link">삭제하기</Button>
              </Popconfirm>,
            ]}
          >
            <List.Item.Meta
              title={comment.memberId}
              description={comment.content}
            />
          </List.Item>
        )}
      >
        <Modal title="댓글 수정" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Input.TextArea value={editingContent} onChange={e => setEditingContent(e.target.value)} />
        </Modal>
      </List>
    </>
  );
};

export default CommentList;
