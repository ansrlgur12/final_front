import axios from "axios";
export const domain = "http://localhost:8111";
export const weatherApiKey = "12779614ba1e41d795943be1a07331ac";

const AxiosApi = {

    campingTest : async() => {

        return await axios.get(domain + "/camp/camping-data")
    },

    getCampData : async(dho, sigungu) => {

        return await axios.get(domain + `/camp/campData/${dho}/${sigungu}`)
    },
    
    getItemList : async() => {
        return await axios.get(domain+ "/product")
    },
    
    // 로그인
    memberLogin: async (inputEmail, inputPwd) => {
        console.log("이메일 : " + inputEmail);
        console.log("패스워드 : " + inputPwd);
        const loginData = {
            email: inputEmail,
            password: inputPwd
        };
        return await axios.post(domain + "/intro/login", loginData);
    },

    productDetail : async(id) =>{
        return await axios.get(domain+ `/productDetail/${id}`)
    
    },

    getOverlayInfo : async(xValue, yValue) => {
        return await axios.get(domain + `/camp/overlay/${xValue}/${yValue}`)
    },

    getAnimalCampData : async(dho, sigungu) => {

    return await axios.get(domain + `/camp/animalData/${dho}/${sigungu}`)
},

    // 회원 가입 여부 확인
    memberRegCheck : async(email) => {
        return await axios.get(domain + `/check?join=${email}`);
    },

    // 회원 가입
    memberReg : async(nickName, email, password, agreed) => {
        const member = {
            nickName : nickName,
            email : email,
            password : password,
            agreed : agreed
        };
        return await axios.post(domain + "/intro/signup", member);

    },

    searchCampData : async(searchValue, currentData) => {
        return await axios.get(domain + `/camp/searchData/${searchValue}/${currentData}`)
    },

    getWeather : async(mapX, mapY, date) => {
        return await axios.get(domain + `/weather/getWeather/${mapX}/${mapY}/${date}`)
    },                        

    viewCount : async(facltNm) => {
        return await axios.get(domain + `/camp/viewCount/${facltNm}`);
    },

    getImage : async(contentId) => {
        return await axios.get(domain + `/image/getImage/${contentId}`);
    },

    // 닉네임 중복 체크
    checkNick : async(nickName) => {
        const check = {
            params: {
                nickName : nickName
            }
        }
        return await axios.get(domain + '/intro', check);
    },

    // 회원 정보 수정
    userInfo : async(id, chgNick, chgEmail, chgPhone, chgImg)=> {
        const info = {
            id : id,
            newNick : chgNick,
            email : chgEmail,
            newPhone : chgPhone,
            newImg : chgImg
        };
        return await axios.post(domain + "/UserEdit", info);
    },

    // 비밀번호 변경
    newPassword : async(userEmail, pwdChange) => {
        const newP = {
            email : userEmail,
            newPwd : pwdChange
        };
        return await axios.post(domain + "/NewPassword", newP);
    },


    getAbleIcon : async(contentId) => {
        return await axios.get(domain + `/camp/getIcon/${contentId}`);
    },
     // 장바구니 추가
      addToCart : async(productId,quantity,email) => {
      const item = {
          productId : productId,
        quantity : quantity,
        email : email,
      };
      
    return await axios.post(domain + `/cart`, item)
},
// 장바구니 조회
   cartList : async(email) => {
     
     return await axios.post(domain + `/cart/cartList`, {
        email: email,
    })
   },

// 장바구니 삭제
deleteItem : async(cartItemId, email) => {
    return await axios.post (domain + `/cart/deleteItem/${cartItemId}`, {email : email,
    })
},
// 장바구니 수량 수정
updateItem : async(cartItemId, quantity, email) => {
    const item = {
        cartItemId : cartItemId,
      quantity : quantity,
      email : email,
    };
    return await axios.post (domain + `/cart/updateItem/${cartItemId}`, item)
},

onojiCampData : async(mapX, mapY, sbrsCl, doNm, sigunguNm, facltNm, diff, intro, addr1, url) => {
    const data = {
        addr1 : addr1,
        mapX : mapX,
        mapY : mapY,
        sbrsCl : sbrsCl,
        doNm : doNm,
        sigunguNm : sigunguNm,
        facltNm : facltNm,
        diff : diff.toString(),
        intro : intro,
        url : url
    };
    return await axios.post(domain + '/oji/newMark', data)
},
  // 찜하기
  addToFavorite : async(productId,email) => {
    const item = {
        productId : productId,
      email : email,
    };
    
  return await axios.post(domain + `/favorite/add`, item)
},
// 찜목록 조회
favoriteList : async(email) => {
     
    return await axios.post(domain + `/favorite/favoriteList`, {
       email: email,
   })
  },
  // 찜한 상품 삭제
  favoriteDelete : async(favoriteItemId, email) => {
    return await axios.post (domain + `/favorite/deleteItem/${favoriteItemId}`, {email : email,
    })
},
  // 찜한 상품 장바구니로 옮기기
  favoriteMoveToCart : async(favoriteItemId, email) => {
    return await axios.post (domain + `/favorite/moveToCart/${favoriteItemId}`, {email : email,
    })
},
getOjiNojiData : async(dho, sigungu) => {

    return await axios.get(domain + `/oji/ojiData/${dho}/${sigungu}`)
},
getOjiOverLayInfo : async(xValue, yValue) => {
    return await axios.get(domain + `/oji/overlay/${xValue}/${yValue}`)
},
searchOjiCampData : async(searchValue) => {
    console.log(searchValue)
    return await axios.get(domain + `/oji/searchOjiData/${searchValue}`)
},
viewOjiCount : async(facltNm) => {
    return await axios.get(domain + `/oji/viewCount/${facltNm}`);
},


}
export default AxiosApi;