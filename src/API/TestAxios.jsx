import axios from "axios";
export const domain = "http://localhost:8111";
export const weatherApiKey = "12779614ba1e41d795943be1a07331ac";

const AxiosApi = {

    campingTest : async() => {

        return await axios.get(domain + "/camp/camping-data")
    },

    getCampData : async() => {

        return await axios.get(domain + "/camp/campData")
    },
    
    getItemList : async() => {
        return await axios.get(domain+ "/product")
    },
    
    // 로그인
    /*
    memberLogin : async(inputEmail, inputPwd) => {
        const login = {
            email : inputEmail,
            pwd : inputPwd
        };
        return await axios.get(domain + "/intro", login);
    },
    */

    memberLogin: async (inputEmail, inputPwd) => {
        const loginData = {
          params: {
            email: inputEmail,
            pwd: inputPwd,
          },
        };
        return await axios.get(domain + "/intro", loginData);
      },

   productDetail : async(id) =>{
    return await axios.get(domain+ `/productDetail/${id}`)
 
   },

   getOverlayInfo : async(xValue, yValue) => {
        return await axios.get(domain + `/camp/overlay/${xValue}/${yValue}`)
    },

    getAnimalCampData : async() => {

    return await axios.get(domain + "/camp/animalData")
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
            pwd : password,
            agreed : agreed
        };
        return await axios.post(domain + "/intro", member);
    },

    searchCampData : async(searchValue, currentData) => {
        return await axios.get(domain + `/camp/searchData/${searchValue}/${currentData}`)
    },

    getWeather : async(mapY, mapX) => {
        return await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${mapY}&lon=${mapX}&key=${weatherApiKey}`)  
    },
};

export default AxiosApi;