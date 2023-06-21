import axios from "axios";
export const domain = "http://localhost:8111";

const AxiosApi = {

    campingTest : async() => {

        return await axios.get(domain + "/camping-data")
    },

    getCampingData : async() => {

        return await axios.get(domain + "/campData")
    },
    
    getItemList : async() => {
        return await axios.get(domain+ "/product")
   }

};
export default AxiosApi;