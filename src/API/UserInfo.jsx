import { createContext, useState, useEffect } from "react";
import axios from 'axios'; 
import Functions from "../Functions";
export const UserContext = createContext(null);


const UserStore = (props) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[nickName, setNickName] = useState("");
    const[isLogin, setIsLogin] = useState(false);
    const[url, setUrl] = useState("");
    const[userImg, SetUserImg] = useState("");
    const[token, setToken] = useState("");
    const[userAddr, setUserAddr] = useState("");
    const[userPhoneNm, setUserPhoneNm] = useState("");

    useEffect(() => {
        const token = Functions.getAccessToken();
        const domain = "http://localhost:8111";
      
        axios.get(domain + "/api/v1/userinfo", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        })
        .then(response => {
            console.log("response data: ", response.data); // 여기서 response data 전체를 출력합니다.
      
            setEmail(response.data.email);
            setNickName(response.data.nickName);
            SetUserImg(response.data.userImg);
        })
        .catch(error => {
            console.log(error);
        });
      }, [token]); 
      

    return(
        <UserContext.Provider value={{email, setEmail, password, setPassword, nickName, setNickName,
                                        isLogin, setIsLogin, url, setUrl, userImg, SetUserImg, token, setToken}}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserStore;
