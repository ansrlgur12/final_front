import axios from "axios";

export const CAMO_DOMAIN = "http://localhost:8111";

const ReviewApi = {

  //리뷰 생성
  createReview: async (token, title, content, date, postType, viewCount, img) => {
    const review = {
      title: title,
      content: content,
      date: date,
      postType: postType,
      viewCount: viewCount,
      img: img
    };

    try {
      return await axios.post(CAMO_DOMAIN + "/review", review, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
    } catch (error) {
      throw error;
    }
  },

  //리뷰 수정
  updateReview: async (id, memberId, title, content, date, postType, viewCount, img) => {
    const reviewDto = {
      id: id,
      title: title,
      content: content,
      date: date,
      postType: postType,
      viewCount: viewCount,
      img: img
    };
    return await axios.put(`${CAMO_DOMAIN}/review/${id}?memberId=${memberId}`, reviewDto);
  },  

// 리뷰 삭제
deleteReview: async (memberId, reviewId) => {
  const response = await axios.delete(`${CAMO_DOMAIN}/review/${reviewId}`, {
    params: {
      memberId: memberId
    }
  });
  return response.data;
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


//리뷰 검색
searchReviews: async (keyword) => {
  return await axios.get(`${CAMO_DOMAIN}/review/search/${keyword}`);
},

//상품 검색
searchProducts: async (brand, productName) => {
  return await axios.get(`${CAMO_DOMAIN}/product-search?brand=${brand}&productName=${productName}`);
},

//캠핑장명 검색
searchCamps: async (facltNm) => {
  return await axios.get(`${CAMO_DOMAIN}/camp/search?facltNm=${facltNm}`);
}

};
export default ReviewApi;
