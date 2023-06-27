import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
    const[userEmail, setUserEmail] = useState("");
    const[password, setPassword] = useState("");
    const[isLogin, setIsLogin] = useState(false);
    const[userImage, setUserImage] = useState("");
    const[url, setUrl] = useState("");

    return(
        <UserContext.Provider value={{userEmail, setUserEmail, password, setPassword, isLogin, setIsLogin, userImage, setUserImage, url, setUrl}}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserStore;
