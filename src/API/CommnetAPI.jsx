import axios from 'axios';

export const COMMENT_API_URL = 'http://localhost:8111/comment';

const CommentApi = {
  // 댓글 생성
  createComment: async (reviewId, memberId, content) => {
    const comment = {
      reviewId: reviewId,
      memberId: memberId,
      content: content
    };
    return await axios.post(`${COMMENT_API_URL}`, comment);
  },

  // 댓글 수정
  updateComment: async (commentId, content) => {
    const comment = {
      content: content
    };
    return await axios.put(`${COMMENT_API_URL}/${commentId}`, comment);
  },

  // 댓글 삭제
  deleteComment: async (commentId) => {
    return await axios.delete(`${COMMENT_API_URL}/${commentId}`);
  },

  // 댓글 조회
  getCommentByReview: async (reviewId) => {
    return await axios.get(`${COMMENT_API_URL}/review/${reviewId}`);
  }
};

export default CommentApi;
