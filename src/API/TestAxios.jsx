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
        return await axios.get(domain + "/product")
   },

   getOverlayInfo : async(xValue, yValue) => {
        return await axios.get(domain + `/camp/overlay/${xValue}/${yValue}`)
   },

   getAnimalCampData : async() => {

    return await axios.get(domain + "/camp/animalData")
},

};
export default AxiosApi;