import axios from "axios";

export const CAMO_DOMAIN = "http://localhost:8111";

const ReviewApi = {
  //리뷰 생성
  createReview: async (memberId, title, content, date, postType) => {
    const review = {
      memberId: memberId,
      title: title,
      content: content,
      date: date,
      postType: postType,
    };
    return await axios.post(`${CAMO_DOMAIN}/review`, review);
  },
  //리뷰 수정
  updateReview: async (id, memberId, title, content, date, postType) => {
    const reviewDto = {
      id: id,
      memberId: memberId,
      title: title,
      content: content,
      date: date,
      postType: postType,
    };
    return await axios.put(`${CAMO_DOMAIN}/review/${id}`, reviewDto);
  },
  //리뷰 삭제
  deleteReview: async (id) => {
    return await axios.delete(`${CAMO_DOMAIN}/review/${id}`);
  },
  //전체 리뷰 조회
  getAllReviews: async () => {
    return await axios.get(`${CAMO_DOMAIN}/review`);
  },
  //특정 회원 리뷰 조회
  getReviewsByMember: async (memberId) => {
    return await axios.get(`${CAMO_DOMAIN}/review/member/${memberId}`);
  },
  //특정 리뷰 조회
  getReviewsByPostType: async (postType) => {
    return await axios.get(`${CAMO_DOMAIN}/review/postType/${postType}`);
  },
  //번호별 리뷰 가져오기
  getReviewById: async (id) => {
    return await axios.get(`${CAMO_DOMAIN}/review/${id}`);
  },
};

export default ReviewApi;
