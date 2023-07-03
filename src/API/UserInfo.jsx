import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
    const[userEmail, setUserEmail] = useState("");
    const[password, setPassword] = useState("");
    const[isLogin, setIsLogin] = useState(false);
    const[userImage, setUserImage] = useState("");
    const[url, setUrl] = useState("");
    const[nickName, setNickName] = useState("");
    const[userName, setUserName] = useState("");
    const[userPhoneNm, setUserPhoneNm] = useState("");
    const[userAddr, setUserAddr] = useState("");

    return(
        <UserContext.Provider value={{userEmail, setUserEmail, password, setPassword,
                                        isLogin, setIsLogin, userImage, setUserImage,
                                        url, setUrl, nickName, setNickName,
                                        userName, setUserName, userPhoneNm, setUserPhoneNm,
                                        userAddr, setUserAddr}}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserStore;
