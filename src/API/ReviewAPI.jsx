import axios from "axios";

export const CAMO_DOMAIN = "http://localhost:8111";

const ReviewApi = {
  createReview: async (id, memberId, title, content, date, postType) => {
    const review = {
      id: id,
      memberId: memberId,
      title: title,
      content: content,
      date: date,
      postType: postType,
    };
    return await axios.post(`${CAMO_DOMAIN}/review`, review);
  },

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

  deleteReview: async (id) => {
    return await axios.delete(`${CAMO_DOMAIN}/review/${id}`);
  },

  getReviewsByMember: async (memberId) => {
    return await axios.get(`${CAMO_DOMAIN}/review/member/${memberId}`);
  },

  getReviewsByPostType: async (postType) => {
    return await axios.get(`${CAMO_DOMAIN}/review/postType/${postType}`);
  },

  getReviewById: async (id) => {
    return await axios.get(`${CAMO_DOMAIN}/review/${id}`);
  },
};

export default ReviewApi;
