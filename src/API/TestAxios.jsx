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

    getAnimalCampData : async(dho, sigungu, selectedSortBy) => {

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

    getWeather : async(mapY, mapX) => {
        return await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${mapY}&lon=${mapX}&key=${weatherApiKey}`)  
    },

    viewCount : async(facltNm) => {
        return await axios.get(domain + `/camp/viewCount/${facltNm}`);
    },
};

export default AxiosApi;