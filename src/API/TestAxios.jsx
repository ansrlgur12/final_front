import axios from "axios";
export const domain = "http://localhost:8111";

const AxiosApi = {

    campingTest : async() => {

        return await axios.get(domain + "/camp/camping-data")
    },

    getCampData : async() => {

        return await axios.get(domain + "/camp/campData")
    },
    
    getItemList : async() => {
        return await axios.get(domain+ "/product")
<<<<<<< HEAD
    },
    
    // 로그인
    memberLogin : async(id, pwd) => {
        const login = {
            id : id,
            pwd : pwd
        };
        return await axios.post(domain + "/login", login);
    },
=======
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
>>>>>>> 5124130a6dcb42b53c00b605ed5a6986065ada3b

    // 회원 가입 여부 확인
    memberRegCheck : async(email) => {
        return await axios.get(domain + `/check?join=${email}`);
    },

    // 회원 가입
    memberReg : async(nickName, email, pwd, agreed) => {
        const member = {
            nickName : nickName,
            email : email,
            pwd : pwd,
            agreed : agreed
        };
        return await axios.post(domain + "/signUp", member);
    },
};

export default AxiosApi;